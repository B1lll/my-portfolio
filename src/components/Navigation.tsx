import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'WORKS', href: '#works' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'HONORS', href: '#honors' },
  { label: 'SKILLS', href: '#skills' }
];

interface NavigationProps {
  language: 'en' | 'zh';
  onLanguageChange: () => void;
}

export function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-xl font-bold tracking-tighter text-white"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          FANJUN.
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="relative text-sm font-medium text-white/70 hover:text-white transition-colors group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-purple-300 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
        
        {/* 原本在这里的语言按钮已被移除 */}
        
        <button className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}