import React from 'react';

const Table = ({ variant = 'minimal', data, columns, striped = false, bordered = false, hover = false }) => {
  const getAlignmentClass = (alignment) => {
    switch (alignment) {
      case 'left':
        return 'text-left';
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';
      default:
        return 'text-left';
    }
  };

  const renderHeader = () => (
    <thead>
      <tr className={`border-b border-border ${variant === 'interactive' ? 'bg-surface-container-low' : ''}`}>
        {columns.map((column, index) => (
          <th
            key={index}
            className={`py-md px-md font-label-sm text-label-sm uppercase tracking-widest text-secondary ${getAlignmentClass(column.alignment)}`}
          >
            {column.header}
          </th>
        ))}
      </tr>
    </thead>
  );

  const renderCell = (cell, column, rowIndex) => {
    if (column.type === 'checkbox') {
      return (
        <td className={`py-md px-md ${getAlignmentClass(column.alignment)}`}>
          <input
            className="bg-background border-border rounded-none text-primary focus:ring-0 focus:ring-offset-0"
            type="checkbox"
          />
        </td>
      );
    }

    if (column.type === 'status') {
      return (
        <td className={`py-md px-md ${getAlignmentClass(column.alignment)}`}>
          <span className="inline-flex items-center gap-xs px-sm py-1 bg-surface-container-highest rounded-full border border-border">
            <span className={`w-1.5 h-1.5 rounded-full ${cell.color}`}></span>
            <span className="text-xs font-label-sm text-primary">{cell.text}</span>
          </span>
        </td>
      );
    }

    if (column.type === 'progress') {
      return (
        <td className={`py-md px-md ${getAlignmentClass(column.alignment)}`}>
          <div className="w-32 h-1 bg-surface-container rounded-full overflow-hidden">
            <div className={`h-full bg-primary w-${cell.width}`}></div>
          </div>
        </td>
      );
    }

    if (column.type === 'button') {
      return (
        <td className={`py-md px-md ${getAlignmentClass(column.alignment)}`}>
          <button className="bg-primary text-on-primary text-[10px] font-bold px-sm py-1 rounded-full uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
            {cell.text}
          </button>
        </td>
      );
    }

    return (
      <td className={`py-lg px-md ${getAlignmentClass(column.alignment)} ${column.type === 'header' ? 'text-primary font-medium' : 'text-secondary'}`}>
        {cell}
      </td>
    );
  };

  const renderRow = (row, rowIndex) => (
    <tr
      key={rowIndex}
      className={`hover:bg-surface transition-colors duration-200 ${striped && rowIndex % 2 === 0 ? 'bg-surface-container-low' : ''} ${variant === 'interactive' ? 'group' : ''}`}
    >
      {row.map((cell, cellIndex) => renderCell(cell, columns[cellIndex], rowIndex))}
    </tr>
  );

  return (
    <div className={`overflow-x-auto ${bordered ? 'border border-border rounded-lg' : ''} ${variant === 'technical' ? 'dashed-border p-md relative bg-surface' : ''}`}>
      <table className="w-full text-left border-collapse">
        {renderHeader()}
        <tbody className={`divide-y divide-border/30 ${variant === 'interactive' ? 'divide-border' : ''}`}>
          {data.map((row, rowIndex) => renderRow(row, rowIndex))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
