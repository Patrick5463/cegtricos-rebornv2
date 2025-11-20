import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-50 rounded-full blur-3xl"></div>
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-200/50">
                    <img 
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
                      alt="Modern Team" 
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                    />
                </div>
                {/* Floating Badge */}
                <div className="absolute bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block border border-brand-50">
                    <p className="text-4xl font-bold text-brand-500 mb-1">100%</p>
                    <p className="text-sm text-brand-900 font-medium">Conformitate Legală Garantată</p>
                </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-8 leading-tight">
              Partenerul Tău de Încredere în SSM
            </h2>
            <p className="text-lg text-brand-800/60 mb-8 leading-relaxed">
              Cegricos redefinește standardele de protecția muncii prin simplitate și profesionalism. 
              Eliminăm birocrația inutilă și ne concentrăm pe ceea ce contează: siguranța echipei tale.
            </p>
            <p className="text-lg text-brand-800/60 mb-10 leading-relaxed">
              Fie că ai nevoie de evaluarea riscurilor sau de instruirea periodică a angajaților, 
              oferim servicii adaptate perfect nevoilor tale, accesibile de pe orice dispozitiv.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;