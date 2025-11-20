import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-start items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`p-2 rounded-xl mr-3 transition-colors duration-300 ${scrolled ? 'bg-brand-500' : 'bg-white'}`}>
               <ShieldCheck className={`h-6 w-6 transition-colors duration-300 ${scrolled ? 'text-white' : 'text-brand-500'}`} />
            </div>
            <span className={`font-bold text-2xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-brand-900' : 'text-white'}`}>
              CEGRICOS
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;