import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="Modern Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/70 to-brand-800/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-brand-500/20"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
                Servicii Profesionale SSM
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
              Simplificăm <br/>
              <span className="text-brand-200">Siguranța Muncii</span>
            </h1>
            
            <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-50 mb-12 font-light leading-relaxed">
              Soluții complete de protecția muncii, evaluare riscuri și audit. 
              Modern, rapid și 100% legal.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                    onClick={scrollToContact}
                    className="w-full sm:w-auto group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-brand-600 transition-all duration-200 bg-white rounded-full hover:bg-brand-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-brand-900 shadow-xl"
                >
                    Cere Ofertă
                    <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
                </button>

                <button 
                    onClick={scrollToServices}
                    className="w-full sm:w-auto group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white transition-all duration-200 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 focus:ring-offset-brand-900 backdrop-blur-sm shadow-lg"
                >
                    Servicii
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </div>
        </div>
      </div>

      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-brand-50"></path>
          </svg>
      </div>
    </section>
  );
};

export default Hero;