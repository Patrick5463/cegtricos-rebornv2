import React, { useState } from 'react';
import { Send, Check, AlertCircle, Mail, Phone } from 'lucide-react';
import { WEB3FORMS_ACCESS_KEY, CONTACT_INFO } from '../constants';
import { FormStatus, ContactFormState } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus(FormStatus.SUCCESS);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(FormStatus.IDLE), 5000);
      } else {
        setStatus(FormStatus.ERROR);
      }
    } catch (error) {
      setStatus(FormStatus.ERROR);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-50 relative overflow-hidden">
      {/* Abstract background circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info Side */}
            <div className="animate-fade-in-left">
                <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6">Contactează-ne</h2>
                <p className="text-xl text-brand-600/80 mb-12 leading-relaxed">
                    Pentru mai multe informații:
                </p>

                <div className="space-y-6">
                    {/* Email Card */}
                    <div className="group flex items-center p-6 bg-white rounded-3xl shadow-sm hover:shadow-xl hover:shadow-brand-100/50 border border-brand-100 transition-all duration-300 hover:-translate-y-1">
                         <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-500 mr-6 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                             <Mail className="w-7 h-7" />
                         </div>
                         <div>
                             <p className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-1">Email</p>
                             <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg md:text-xl font-bold text-brand-900 hover:text-brand-600 transition-colors">
                                {CONTACT_INFO.email}
                             </a>
                         </div>
                    </div>

                    {/* Phone Card */}
                    <div className="group flex items-center p-6 bg-white rounded-3xl shadow-sm hover:shadow-xl hover:shadow-brand-100/50 border border-brand-100 transition-all duration-300 hover:-translate-y-1">
                         <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-500 mr-6 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                             <Phone className="w-7 h-7" />
                         </div>
                         <div>
                             <p className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-1">Telefon</p>
                             <a href={`tel:${CONTACT_INFO.phone}`} className="text-lg md:text-xl font-bold text-brand-900 hover:text-brand-600 transition-colors">
                                {CONTACT_INFO.phone}
                             </a>
                         </div>
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-brand-100/50 overflow-hidden border border-brand-50">
                <div className="p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-brand-900 mb-8">Trimite un mesaj</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-brand-800 ml-1">Nume</label>
                        <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl bg-brand-50/30 border border-brand-100 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100 transition-all duration-300 outline-none text-brand-900 placeholder-brand-300/70 font-medium"
                        placeholder="Numele tău complet"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-brand-800 ml-1">Email</label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl bg-brand-50/30 border border-brand-100 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100 transition-all duration-300 outline-none text-brand-900 placeholder-brand-300/70 font-medium"
                        placeholder="adresa@email.com"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-bold text-brand-800 ml-1">Mesaj</label>
                        <textarea
                        name="message"
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl bg-brand-50/30 border border-brand-100 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100 transition-all duration-300 outline-none text-brand-900 placeholder-brand-300/70 font-medium resize-none"
                        placeholder="Spune-ne cu ce te putem ajuta..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === FormStatus.SUBMITTING}
                        className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1 active:scale-95 ${
                        status === FormStatus.SUCCESS 
                            ? 'bg-green-500 text-white shadow-lg shadow-green-200' 
                            : 'bg-brand-600 text-white hover:bg-brand-500 shadow-xl shadow-brand-300/50'
                        }`}
                    >
                        {status === FormStatus.SUBMITTING && (
                        <span className="animate-pulse flex items-center">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                            Se trimite...
                        </span>
                        )}
                        {status === FormStatus.SUCCESS && (
                        <>
                            <Check className="mr-2 h-6 w-6" /> Mesaj Trimis!
                        </>
                        )}
                        {status === FormStatus.ERROR && (
                        <>
                            <AlertCircle className="mr-2 h-6 w-6" /> Eroare. Încearcă din nou.
                        </>
                        )}
                        {status === FormStatus.IDLE && (
                        <>
                            Trimite Mesajul <Send className="ml-2 h-5 w-5" />
                        </>
                        )}
                    </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;