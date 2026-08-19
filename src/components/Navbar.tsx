'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background py-3 shadow-md border-b border-border' : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="text-xl font-extrabold tracking-tight flex items-center">
              <span className="text-foreground">Portofolio</span>
              <span className="text-primary">.</span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/85 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Right items */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border bg-card/50 text-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/95 rounded-full shadow-md hover:shadow-primary/20 transition-all duration-200"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Mobile menu button & Theme toggle */}
          <div className="flex items-center md:hidden space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border bg-card/50 text-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:text-primary focus:outline-none cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden fixed top-18 left-0 w-full h-[calc(100vh-4.5rem)] glass-panel z-40 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
        <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col justify-between h-full bg-background/95">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-lg text-base font-medium text-foreground/80 hover:text-primary hover:bg-card/50 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-border">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3 text-center text-base font-medium text-primary-foreground bg-primary rounded-xl shadow-md transition-all duration-200"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
