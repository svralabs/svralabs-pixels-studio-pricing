import React, { useState, useEffect } from 'react';
import styles from './DataTable.module.css';

const DataTable = ({ data, columns, pagination = false, sorting = false, selectable = false }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [selectedRows, setSelectedRows] = useState([]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    if (!sorting || !sortConfig.key) return data;

    const sortableData = [...data];
    sortableData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    return sortableData;
  }, [data, sortConfig, sorting]);

  const paginatedData = React.useMemo(() => {
    if (!pagination) return sortedData;

    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage, itemsPerPage, pagination]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(paginatedData.map(row => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {selectable && (
              <th className={`${styles.tableHeader} ${styles.checkboxCell}`}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={selectedRows.length === paginatedData.length && paginatedData.length > 0}
                  onChange={handleSelectAll}
                  aria-label="Select all rows"
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                className={`${styles.tableHeader} ${column.textAlign === 'right' ? styles.textRight : ''} ${sorting ? styles.sortable : ''} ${sortConfig.key === column.key ? styles.active : ''}`}
                onClick={() => sorting && requestSort(column.key)}
                aria-sort={sortConfig.key === column.key ? sortConfig.direction : undefined}
              >
                {column.label}
                {sorting && (
                  <span className={styles.sortIcon}>
                    {sortConfig.key === column.key && sortConfig.direction === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {paginatedData.map((row) => (
            <tr key={row.id} className={styles.tableRow}>
              {selectable && (
                <td className={`${styles.tableCell} ${styles.checkboxCell}`}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleSelectRow(row.id)}
                    aria-label={`Select row ${row.id}`}
                  />
                </td>
              )}
              {columns.map((column) => (
                <td
                  key={`${row.id}-${column.key}`}
                  className={`${styles.tableCell} ${column.textAlign === 'right' ? styles.textRight : ''} ${column.fontWeight === 'medium' ? styles.fontMedium : ''} ${column.variant === 'secondary' ? styles.secondary : ''} ${column.tabularNums ? styles.tabularNums : ''}`}
                >
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {pagination && (
        <div className={styles.paginationContainer}>
          <button
            className={styles.paginationButton}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`${styles.paginationButton} ${currentPage === page ? styles.active : ''}`}
              onClick={() => handlePageChange(page)}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          ))}

          <button
            className={styles.paginationButton}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          <span className={styles.paginationInfo}>
            Page {currentPage} of {totalPages}
          </span>
        </div>
      )}
    </div>
  );
};

export default DataTable;
