"use client";  // Menambahkan deklarasi untuk menjadikan komponen ini komponen klien

import React from "react";

const Footer = () => {
  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        {/* Ganti "Home" dengan tombol "Scroll Up" */}
        <button 
          onClick={scrollToTop} 
          className="text-white font-semibold hover:text-primary-700"
        >
          Home
        </button>
        <p className="text-slate-600 font-semibold hover:text-secondary-50">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
