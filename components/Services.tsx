import React from 'react';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-brand-500 font-semibold tracking-widest uppercase text-xs mb-4">Servicii Premium</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-900">Soluții Complete</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SERVICES_DATA.map((service) => (
            <div 
              key={service.id}
              className="group bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-2xl hover:shadow-brand-200/50 transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-brand-100"
            >
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-500 transition-colors duration-500">
                <service.icon className="h-8 w-8 text-brand-500 group-hover:text-white transition-colors duration-500" />
              </div>
              
              <h4 className="text-2xl font-bold text-brand-900 mb-4">
                {service.title}
              </h4>
              
              <p className="text-brand-700/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;