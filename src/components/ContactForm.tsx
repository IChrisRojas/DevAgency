import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function ContactForm() {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: '-100px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');

        // Simulate API call
        setTimeout(() => {
            setFormState('success');
            setTimeout(() => setFormState('idle'), 5000); // Reset after 5s
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-transparent to-[#020202] relative overflow-hidden">
            {/* Decorative blurry blobs */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
                <div className="w-96 h-96 bg-dev-accent/20 rounded-full blur-[100px]" />
            </div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
                <div className="w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                    {/* Left side: Empty space for generated content (WebGL, etc.) */}
                    <div className="hidden lg:block"></div>

                    {/* Right side: Contact Form */}
                    <div
                        ref={sectionRef}
                        className={`bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 transition-all duration-1000 transform ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <div className="text-left mb-10">
                            <h2 className="text-3xl font-bold text-white">Construyamos algo brillante.</h2>
                            <p className="mt-3 text-slate-300">Discute tu proyecto con nuestro equipo de ingeniería.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Nombre</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-800 text-white placeholder:text-slate-500 focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-dev-accent/50 focus:border-dev-accent transition-colors"
                                        placeholder="Juan Pérez"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-800 text-white placeholder:text-slate-500 focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-dev-accent/50 focus:border-dev-accent transition-colors"
                                        placeholder="juan@ejemplo.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Detalles del Proyecto</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-800 text-white placeholder:text-slate-500 focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-dev-accent/50 focus:border-dev-accent transition-colors resize-none"
                                    placeholder="Cuéntanos sobre tus objetivos..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={formState !== 'idle'}
                                className="w-full relative h-[60px] flex items-center justify-center px-8 py-4 bg-dev-accent hover:bg-violet-600 text-white font-medium rounded-xl shadow-lg shadow-dev-accent/20 hover:shadow-dev-accent/40 transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed group overflow-hidden"
                            >
                                <div className="relative w-full h-full flex items-center justify-center">
                                    {formState === 'idle' && (
                                        <div className="flex items-center animate-in fade-in slide-in-from-bottom-2 duration-300">
                                            Enviar Mensaje
                                            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </div>
                                    )}
                                    {formState === 'submitting' && (
                                        <div className="flex items-center animate-in fade-in slide-in-from-bottom-2 duration-300">
                                            <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                            Enviando...
                                        </div>
                                    )}
                                    {formState === 'success' && (
                                        <div className="flex items-center text-green-300 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                            <CheckCircle2 className="w-5 h-5 mr-2" />
                                            Mensaje Enviado
                                        </div>
                                    )}
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
