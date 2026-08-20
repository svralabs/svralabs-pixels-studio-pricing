import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DuolingoPricingPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="h-16 border-b border-[var(--border-color)] bg-white flex items-center sticky top-0 z-50">
<div className="max-w-[1080px] mx-auto w-full px-6 flex justify-between items-center">
<img alt="Duolingo" className="w-[140px] h-[33px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-PflZvFABahe6Qhmh0hIuiO8jK5JrWMkjueUql3FJKB9ekT90Lq9HltvuoJJM19YZxE0S3gMNBx9VQRJwtULX6gm-rdD57K9W2uvbfGxQvbM_ZMxF8FY8NN6Vmr12hS6qh7EwDx5jOO6MByTqLqGShATgnRznP1gOCXucj72n-Wum00UaoyqOmU2Y7hQjLbvHfvIjRtTlzL2TbVgb0qpbQz_QbJhCBOeks3JPuMj2LQnMan9C8YdrNQ"/>
<a className="text-[13px] font-bold uppercase tracking-wider text-[var(--nav-text)] hover:text-[var(--gray-text)] transition-colors" href="#">Masuk</a>
</div>
</nav>


<header className="text-center pt-16 pb-8 px-6 bg-gradient-to-b from-[rgba(125,60,255,0.08)] to-white">
<span className="inline-block text-[12px] font-extrabold uppercase tracking-[1.5px] text-[var(--super)] bg-[rgba(125,60,255,0.1)] px-[14px] py-[6px] rounded-[20px] mb-4">
      Super Duolingo
    </span>
<h1 className="font-feather text-[32px] md:text-[42px] text-[var(--gray-text)] leading-[1.1] mb-4">
      Belajar lebih cepat,<br/>tanpa gangguan
    </h1>
<p className="text-[18px] font-medium text-[var(--gray-light)] max-w-[520px] mx-auto leading-relaxed">
      Buka hati tak terbatas, bebas iklan, dan latihan personal yang mempercepat kemajuanmu.
    </p>

<div className="flex justify-center mt-8 mb-2">
<div className="relative inline-flex bg-[#f1f1f1] rounded-[14px] p-[5px]" id="cycle-container">
<span className="cycle-slider"></span>
<button className="relative z-10 border-none bg-transparent font-bold text-[14px] uppercase tracking-wider text-[var(--gray-text)] px-[22px] py-[10px] rounded-[10px] transition-colors cursor-pointer" id="btn-monthly" onclick="setCycle('monthly')">
          Bulanan
        </button>
<button className="relative z-10 border-none bg-transparent font-bold text-[14px] uppercase tracking-wider text-[var(--gray-light)] px-[22px] py-[10px] rounded-[10px] transition-colors cursor-pointer flex items-center gap-2" id="btn-annual" onclick="setCycle('annual')">
          Tahunan <span className="text-[10px] font-extrabold text-[var(--green)] bg-[rgba(88,204,2,0.14)] px-1.5 py-0.5 rounded-md">−40%</span>
</button>
</div>
</div>
</header>


<section className="max-w-[1000px] mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">

<div className="border-2 border-[var(--border-color)] rounded-[20px] p-7 flex flex-col" data-purpose="plan-card">
<div className="text-[14px] font-extrabold uppercase tracking-widest text-[var(--gray-light)] mb-3.5">Gratis</div>
<div className="flex items-baseline gap-1 mb-1">
<span className="font-feather text-[38px] text-[var(--gray-text)]">Rp0</span>
<span className="text-[14px] font-bold text-[var(--nav-text)]">/selamanya</span>
</div>
<div className="text-[13px] font-semibold text-[var(--gray-light)] min-h-[34px] leading-relaxed">
        Semua yang kamu butuhkan untuk mulai belajar.
      </div>
<ul className="my-5 flex-grow">
<li className="flex gap-2.5 text-[14px] font-semibold text-[var(--gray-text)] py-1.5 leading-relaxed"><span className="text-[var(--green)] font-black">✓</span>Semua pelajaran inti</li>
<li className="flex gap-2.5 text-[14px] font-semibold text-[var(--gray-text)] py-1.5 leading-relaxed"><span className="text-[var(--green)] font-black">✓</span>Sistem streak &amp; XP</li>
<li className="flex gap-2.5 text-[14px] font-semibold text-[var(--gray-text)] py-1.5 leading-relaxed"><span className="text-[var(--green)] font-black">✓</span>Ikut liga mingguan</li>
<li className="flex gap-2.5 text-[14px] font-semibold text-[var(--nav-text)] py-1.5 leading-relaxed"><span className="text-[var(--border-color)] font-black">✓</span>5 hati per hari</li>
<li className="flex gap-2.5 text-[14px] font-semibold text-[var(--nav-text)] py-1.5 leading-relaxed"><span className="text-[var(--border-color)] font-black">✓</span>Ada iklan</li>
</ul>
<button className="btn-duo btn-ghost-duo">Paket saat ini</button>
</div>

<div className="border-2 border-[var(--super)] rounded-[20px] p-7 flex flex-col relative shadow-[0_12px_32px_rgba(125,60,255,0.14)]" data-purpose="plan-card">
<span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--super)] text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full whitespace-nowrap">
        Paling populer
      </span>
<div className="text-[14px] font-extrabold uppercase tracking-widest text-[var(--super)] mb-3.5">Super</div>
<div className="flex items-baseline gap-1 mb-1">
<span className="font-feather text-[38px] text-[var(--gray-text)]" data-annual="Rp47rb" data-monthly="Rp79rb" id="price-super">Rp79rb</span>
<span className="text-[14px] font-bold text-[var(--nav-text)]">/bulan</span>
</div>
<div className="text-[13px] font-semibold text-[var(--gray-light)] min-h-[34px] leading-relaxed" data-annual="Ditagih Rp569rb per tahun. Hemat 40%." data-monthly="Ditagih bulanan, batal kapan saja." id="sub-super">
        Ditagih bulanan, batal kapan saja.
      </div>
<ul className="my-5 flex-grow">
<li className="flex gap-2.5 text-[14px] font-semibold text-[var(--gray-text)] py-1.5 leading-relaxed"><span className="text-[var(--green)] font-black">✓</span>Hati tak terbatas</li>
<li className="flex gap-2.5 text-[14px] font-semibold text-[var(--gray-text)] py-1.5 leading-relaxed"><span className="text-[var(--green)] font-black">✓</span>Tanpa iklan sama sekali</li>
<li className="flex gap-2.5 text-[14px] font-semibold text-[var(--gray-text)] py-1.5 leading-relaxed"><span className="text-[var(--green)] font-black">✓</span>Latihan kesalahan personal</li>
<li className="flex gap-2.5 text-[14px] font-semibold text-[var(--gray-text)] py-1.5 leading-relaxed"><span className="text-[var(--green)] font-black">✓</span>Tantangan kuis penguasaan</li>
<li className="flex gap-2.5 text-[14px] font-semibold text-[var(--gray-text)] py-1.5 leading-relaxed"><span className="text-[var(--green)] font-black">✓</span>Pelacak kemajuan terperinci</li>
</ul>
<button className="btn-duo btn-super-duo">Coba 1 minggu gratis</button>
</div>

<div className="border-2 border-[var(--border-color)] rounded-[20px] p-7 flex flex-col" data-purpose="plan-card">
<div className="text-[14px] font-extrabold uppercase tracking-widest text-[var(--gray-light)] mb-3.5">Super Family</div>
<div className="flex items-baseline gap-1 mb-1">
<span className="font-feather text-[38px] text-[var(--gray-text)]" data-annual="Rp77rb" data-monthly="Rp129rb" id="price-family">Rp129rb</span>
<span className="text-[14px] font-bold text-[var(--nav-text)]">/bulan</span>
</div>
<div className="text-[13px] font-semibold text-[var(--gray-light)] min-h-[34px] leading-relaxed">
        Semua manfaat Super untuk hingga 6 anggota.
      </div>
<ul className="my-5 flex-grow">
<li className="flex gap-2.5 text-[14px] font-semibold text-[var(--gray-text)] py-1.5 leading-relaxed"><span className="text-[var(--green)] font-black">✓</span>Semua manfaat Super</li>
<li className="flex gap-2.5 text-[14px] font-semibold text-[var(--gray-text)] py-1.5 leading-relaxed"><span className="text-[var(--green)] font-black">✓</span>Sampai 6 akun</li>
<li className="flex gap-2.5 text-[14px] font-semibold text-[var(--gray-text)] py-1.5 leading-relaxed"><span className="text-[var(--green)] font-black">✓</span>Satu tagihan untuk keluarga</li>
<li className="flex gap-2.5 text-[14px] font-semibold text-[var(--gray-text)] py-1.5 leading-relaxed"><span className="text-[var(--green)] font-black">✓</span>Kelola anggota kapan saja</li>
<li className="flex gap-2.5 text-[14px] font-semibold text-[var(--gray-text)] py-1.5 leading-relaxed"><span className="text-[var(--green)] font-black">✓</span>Cocok untuk belajar bareng</li>
</ul>
<button className="btn-duo btn-primary-duo">Pilih Family</button>
</div>
</section>


<section className="max-w-[760px] mx-auto my-12 px-6">
<h2 className="font-feather text-[28px] text-[var(--gray-text)] text-center mb-6">Bandingkan paket</h2>
<div className="overflow-hidden border-2 border-[var(--border-color)] rounded-[16px]">
<table className="w-full border-collapse">
<thead>
<tr className="bg-[#fafafa]">
<th className="p-4 text-left text-[12px] font-extrabold uppercase tracking-wider border-b border-[var(--border-color)]">Fitur</th>
<th className="p-4 text-center text-[12px] font-extrabold uppercase tracking-wider border-b border-[var(--border-color)]">Gratis</th>
<th className="p-4 text-center text-[12px] font-extrabold uppercase tracking-wider border-b border-[var(--border-color)] text-[var(--super)]">Super</th>
</tr>
</thead>
<tbody>
<tr>
<td className="p-4 text-left font-bold text-[14px] text-[var(--gray-text)] border-b border-[var(--border-color)]">Pelajaran inti</td>
<td className="p-4 text-center border-b border-[var(--border-color)]"><span className="text-[var(--green)] text-lg font-black">✓</span></td>
<td className="p-4 text-center border-b border-[var(--border-color)]"><span className="text-[var(--green)] text-lg font-black">✓</span></td>
</tr>
<tr>
<td className="p-4 text-left font-bold text-[14px] text-[var(--gray-text)] border-b border-[var(--border-color)]">Hati</td>
<td className="p-4 text-center border-b border-[var(--border-color)] text-[14px]">5 / hari</td>
<td className="p-4 text-center border-b border-[var(--border-color)]"><span className="text-[var(--green)] text-lg font-black">∞</span></td>
</tr>
<tr>
<td className="p-4 text-left font-bold text-[14px] text-[var(--gray-text)] border-b border-[var(--border-color)]">Iklan</td>
<td className="p-4 text-center border-b border-[var(--border-color)] text-[14px]">Ada</td>
<td className="p-4 text-center border-b border-[var(--border-color)] text-[14px]">Tidak ada</td>
</tr>
<tr>
<td className="p-4 text-left font-bold text-[14px] text-[var(--gray-text)] border-b border-[var(--border-color)]">Latihan kesalahan personal</td>
<td className="p-4 text-center border-b border-[var(--border-color)]"><span className="text-[var(--border-color)] text-lg font-black">✕</span></td>
<td className="p-4 text-center border-b border-[var(--border-color)]"><span className="text-[var(--green)] text-lg font-black">✓</span></td>
</tr>
<tr>
<td className="p-4 text-left font-bold text-[14px] text-[var(--gray-text)] border-b border-[var(--border-color)]">Kuis penguasaan</td>
<td className="p-4 text-center border-b border-[var(--border-color)]"><span className="text-[var(--border-color)] text-lg font-black">✕</span></td>
<td className="p-4 text-center border-b border-[var(--border-color)]"><span className="text-[var(--green)] text-lg font-black">✓</span></td>
</tr>
<tr>
<td className="p-4 text-left font-bold text-[14px] text-[var(--gray-text)]">Laporan kemajuan</td>
<td className="p-4 text-center text-[14px]">Dasar</td>
<td className="p-4 text-center text-[14px]">Terperinci</td>
</tr>
</tbody>
</table>
</div>
</section>


<section className="max-w-[720px] mx-auto mt-12 mb-16 px-6">
<h2 className="font-feather text-[28px] text-[var(--gray-text)] text-center mb-6">Pertanyaan umum</h2>
<div className="space-y-3">

<div className="faq-item open border-2 border-[var(--border-color)] rounded-[14px] overflow-hidden">
<button className="w-full bg-white border-none text-left font-extrabold text-[16px] text-[var(--gray-text)] p-5 cursor-pointer flex justify-between items-center outline-none" onclick="toggleFaq(this)">
          Apakah uji coba gratis benar-benar gratis?
          <span className="faq-chevron text-[var(--nav-text)] text-lg transition-transform">▾</span>
</button>
<div className="faq-answer">
<p className="px-5 pb-5 text-[14px] font-medium text-[var(--gray-light)] leading-relaxed">
            Ya. Kamu bisa mencoba Super selama 1 minggu tanpa biaya. Batalkan kapan saja sebelum periode berakhir dan kamu tidak akan ditagih.
          </p>
</div>
</div>

<div className="faq-item border-2 border-[var(--border-color)] rounded-[14px] overflow-hidden">
<button className="w-full bg-white border-none text-left font-extrabold text-[16px] text-[var(--gray-text)] p-5 cursor-pointer flex justify-between items-center outline-none" onclick="toggleFaq(this)">
          Bisakah saya batalkan kapan saja?
          <span className="faq-chevron text-[var(--nav-text)] text-lg transition-transform">▾</span>
</button>
<div className="faq-answer">
<p className="px-5 pb-5 text-[14px] font-medium text-[var(--gray-light)] leading-relaxed">
            Tentu. Pengelolaan langganan ada di pengaturan akun, dan pembatalan berlaku di akhir siklus tagihan berjalan.
          </p>
</div>
</div>

<div className="faq-item border-2 border-[var(--border-color)] rounded-[14px] overflow-hidden">
<button className="w-full bg-white border-none text-left font-extrabold text-[16px] text-[var(--gray-text)] p-5 cursor-pointer flex justify-between items-center outline-none" onclick="toggleFaq(this)">
          Apa beda Super dan Super Family?
          <span className="faq-chevron text-[var(--nav-text)] text-lg transition-transform">▾</span>
</button>
<div className="faq-answer">
<p className="px-5 pb-5 text-[14px] font-medium text-[var(--gray-light)] leading-relaxed">
            Keduanya punya fitur yang sama. Super Family membagikan manfaat itu ke maksimal enam akun dengan satu tagihan tunggal.
          </p>
</div>
</div>

<div className="faq-item border-2 border-[var(--border-color)] rounded-[14px] overflow-hidden">
<button className="w-full bg-white border-none text-left font-extrabold text-[16px] text-[var(--gray-text)] p-5 cursor-pointer flex justify-between items-center outline-none" onclick="toggleFaq(this)">
          Apakah kemajuan belajar saya tetap aman?
          <span className="faq-chevron text-[var(--nav-text)] text-lg transition-transform">▾</span>
</button>
<div className="faq-answer">
<p className="px-5 pb-5 text-[14px] font-medium text-[var(--gray-light)] leading-relaxed">
            Selalu. Streak, XP, dan riwayat pelajaranmu tersimpan di akun, baik kamu memakai paket gratis maupun Super.
          </p>
</div>
</div>
</div>
</section>




    </div>
  );
}
