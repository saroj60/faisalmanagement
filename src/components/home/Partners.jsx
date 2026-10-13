import React from 'react';
import Section from '../ui/Section';
import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { EMBASSY_CLIENTS } from '../../data/clients';

const PartnerLogos = () => {
    // Select the top 12 marquee clients to showcase prominently
    const featuredClients = EMBASSY_CLIENTS.slice(0, 12);

    return (
        <Section className="py-20 bg-gradient-to-b from-slate-100/80 via-blue-50/40 to-slate-100/80 border-y border-slate-200/80">
            {/* High-Visibility Header */}
            <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 border border-emerald-300/80 px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4 shadow-sm">
                    <ShieldCheck size={18} className="text-emerald-700" />
                    <span>Kuwait Embassy Registered Employers</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                    Trusted by 49+ Industry Leaders Across <span className="text-primary underline decoration-accent decoration-4 underline-offset-8">Kuwait & Gulf</span>
                </h2>
                <p className="text-base sm:text-lg text-slate-700 font-medium max-w-2xl mx-auto">
                    Authorized workforce supplier officially approved to deploy manpower to leading enterprises, factories, and commercial corporations.
                </p>
            </div>

            {/* High-Contrast, Bold Client Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 mb-12">
                {featuredClients.map((client) => (
                    <div
                        key={client.id}
                        className="group bg-white border-2 border-slate-200 hover:border-primary rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden transform hover:-translate-y-1.5"
                    >
                        {/* Subtle background glow on hover */}
                        <div className="absolute top-0 right-0 w-28 h-28 bg-primary/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-300"></div>

                        <div>
                            {/* Card Top: S.N and Verification Seal */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-mono font-black px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                                    #{String(client.id).padStart(2, '0')}
                                </span>
                                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                                    <CheckCircle2 size={12} className="text-emerald-600" />
                                    <span>Registered</span>
                                </span>
                            </div>

                            {/* Card Center: Icon & Company Name */}
                            <div className="flex items-start gap-3.5 mb-3">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300">
                                    <Building2 size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-extrabold text-slate-900 group-hover:text-primary transition-colors text-base sm:text-lg leading-snug">
                                        {client.name}
                                    </h3>
                                    <span className="inline-block text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md mt-1.5 border border-blue-100">
                                        {client.sector}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Card Bottom: Country Badge */}
                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
                            <span className="flex items-center gap-1.5">
                                <span className="text-sm">🇰🇼</span>
                                <span>Kuwait</span>
                            </span>
                            <span className="text-primary group-hover:translate-x-1 transition-transform">
                                &rarr;
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* High-Visibility Call To Action */}
            <div className="text-center">
                <Link
                    to="/about#clients"
                    className="inline-flex items-center gap-3 bg-primary hover:bg-accent text-white px-8 py-4 rounded-full font-extrabold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                    <span>View All 49+ Embassy Registered Clients</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
                <p className="text-xs text-slate-500 font-semibold mt-3">
                    Includes official embassy registration numbers, sector categorizations, and document viewer.
                </p>
            </div>
        </Section>
    );
};

export default PartnerLogos;
