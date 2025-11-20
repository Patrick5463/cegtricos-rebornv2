import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-10 border-t border-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="mb-4 font-bold text-brand-900 text-xl">CEGRICOS</div>
        <p className="text-brand-400 text-sm mb-6 text-center">
          Siguranță și sănătate în muncă la standarde moderne.
        </p>
        <p className="text-brand-300 text-xs">
          &copy; {new Date().getFullYear()} Cegricos.
        </p>
      </div>
    </footer>
  );
};

export default Footer;