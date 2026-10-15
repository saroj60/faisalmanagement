import React, { useState, useMemo } from 'react';
import { Building2, Search, ShieldCheck, CheckCircle2, LayoutGrid, Table, FileCheck, ExternalLink, Globe } from 'lucide-react';
import { EMBASSY_CLIENTS } from '../../data/clients';
import embassyDocImg from '../../assets/embassy_registration.jpg';

const EmbassyClients = ({ title = "Our Valued Global Clients", subtitle = "Embassy Registered Companies in Kuwait" }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSector, setSelectedSector] = useState('All');
    const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'
    const [showDocModal, setShowDocModal] = useState(false);

    // Filter categories
    const categories = useMemo(() => {
        return ['All', 'Manufacturing & Aluminium', 'Retail & Supermarket', 'Food & Catering', 'Carpentry & Construction', 'General Trading', 'Plastics & Packaging'];
    }, []);

    const filteredClients = useMemo(() => {
        return EMBASSY_CLIENTS.filter((client) => {
            const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                client.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
                client.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                String(client.id) === searchQuery.trim();

            const matchesCategory = selectedSector === 'All' || client.sector.toLowerCase().includes(selectedSector.toLowerCase());

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedSector]);

    return (
        <div className="w-full my-8 sm:my-16 bg-gradient-to-b from-slate-100/90 via-blue-50/40 to-slate-100/90 p-3.5 sm:p-6 md:p-12 rounded-2xl md:rounded-3xl border-2 border-slate-200/90 shadow-md">
            {/* Header Banner */}
            <div className="bg-gradient-to-br from-primary via-primary-dark to-slate-900 rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-12 text-white shadow-xl relative overflow-hidden mb-8 sm:mb-10 border border-slate-700/50">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-accent/15 blur-3xl pointer-events-none"></div>
                <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-sm font-extrabold tracking-wide text-emerald-300 border border-emerald-400/30 shadow-inner w-fit">
                            <ShieldCheck className="text-emerald-400 shrink-0" size={16} />
                            <span>OFFICIAL EMBASSY REGISTRATION RECORD</span>
                        </div>

                        <button
                            onClick={() => setShowDocModal(true)}
                            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all hover:scale-105 shadow-lg w-full sm:w-auto"
                        >
                            <FileCheck size={16} />
                            <span>View Original Embassy Document</span>
                        </button>
                    </div>

                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3 sm:mb-4">
                        {title}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-3xl leading-relaxed font-medium">
                        Faisal Management Services is officially registered and approved by the Embassy of Kuwait. Below is the verified roster of corporate partners, industrial factories, and commercial enterprises we actively supply manpower to.
                    </p>

                    {/* Quick Stats Badges */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/15 text-center">
                        <div className="bg-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-white/15 backdrop-blur-sm shadow-inner">
                            <div className="text-2xl sm:text-4xl font-black text-amber-300 mb-0.5 sm:mb-1">49+</div>
                            <div className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-slate-200">Registered Clients</div>
                        </div>
                        <div className="bg-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-white/15 backdrop-blur-sm shadow-inner">
                            <div className="text-2xl sm:text-4xl font-black text-emerald-400 mb-0.5 sm:mb-1">Kuwait 🇰🇼</div>
                            <div className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-slate-200">Primary Gulf Hub</div>
                        </div>
                        <div className="bg-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-white/15 backdrop-blur-sm shadow-inner">
                            <div className="text-2xl sm:text-4xl font-black text-cyan-300 mb-0.5 sm:mb-1">100%</div>
                            <div className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-slate-200">Legal Compliance</div>
                        </div>
                        <div className="bg-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-white/15 backdrop-blur-sm shadow-inner">
                            <div className="text-2xl sm:text-4xl font-black text-purple-300 mb-0.5 sm:mb-1">15+</div>
                            <div className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-slate-200">Industry Sectors</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter and Search Bar - High Contrast */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md border-2 border-slate-200 mb-8 space-y-4 sm:space-y-5">
                <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-stretch md:items-center justify-between">
                    {/* Search */}
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search by company or sector..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border-2 border-slate-300 text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-slate-50/50 focus:bg-white"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 hover:text-slate-800 bg-slate-200 px-2 py-1 rounded-md transition-colors"
                            >
                                Clear
                            </button>
                        )}
                    </div>

                    {/* View Switcher and Count */}
                    <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                        <span className="text-[11px] sm:text-xs font-black text-slate-700 uppercase tracking-wider bg-slate-100 px-2.5 py-1.5 rounded-lg border border-slate-200">
                            {filteredClients.length} of {EMBASSY_CLIENTS.length} Companies
                        </span>

                        <div className="inline-flex rounded-xl bg-slate-200/90 p-1 border-2 border-slate-300">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                                    viewMode === 'grid' ? 'bg-primary text-white shadow-md' : 'text-slate-700 hover:text-primary'
                                }`}
                            >
                                <LayoutGrid size={14} />
                                <span>Grid</span>
                            </button>
                            <button
                                onClick={() => setViewMode('table')}
                                className={`flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                                    viewMode === 'table' ? 'bg-primary text-white shadow-md' : 'text-slate-700 hover:text-primary'
                                }`}
                            >
                                <Table size={14} />
                                <span>Table</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Category Pills - Smooth Swipe on Mobile */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-1 -mx-1 px-1">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedSector(cat)}
                            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all border-2 shrink-0 ${
                                selectedSector === cat
                                    ? 'bg-primary text-white border-primary shadow-md scale-105'
                                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border-slate-200'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Display: High-Contrast Grid View */}
            {viewMode === 'grid' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredClients.map((client) => (
                        <div
                            key={client.id}
                            className="group bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-primary shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden transform hover:-translate-y-1.5"
                        >
                            <div className="absolute top-0 right-0 w-28 h-28 bg-primary/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-300"></div>

                            <div>
                                {/* Serial number and Verification Seal */}
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <span className="text-xs font-mono font-black px-2.5 py-1 rounded-lg bg-slate-900 text-white shadow-xs">
                                        #{String(client.id).padStart(2, '0')}
                                    </span>
                                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                                        <CheckCircle2 size={13} className="text-emerald-700" />
                                        <span>Embassy Registered</span>
                                    </span>
                                </div>

                                {/* Icon & Company Name */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                        <Building2 size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-extrabold text-slate-900 group-hover:text-primary transition-colors text-base sm:text-lg leading-snug">
                                            {client.name}
                                        </h3>
                                        <p className="text-xs font-bold text-slate-600 mt-1 flex items-center gap-1.5">
                                            <span className="text-sm">🇰🇼</span>
                                            <span>{client.country}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Sector Bottom Row */}
                            <div className="mt-4 pt-3.5 border-t-2 border-slate-100 flex items-center justify-between text-xs">
                                <span className="text-slate-600 font-bold uppercase tracking-wider text-[11px]">Sector:</span>
                                <span className="text-blue-900 font-extrabold bg-blue-100/90 px-3 py-1.5 rounded-lg border border-blue-200">
                                    {client.sector}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Display: High-Contrast Table View */}
            {viewMode === 'table' && (
                <div className="bg-white rounded-2xl shadow-md border-2 border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-700">
                            <thead className="bg-slate-900 text-xs uppercase font-black text-white tracking-wider">
                                <tr>
                                    <th className="py-4 px-6 text-center w-20">S.N</th>
                                    <th className="py-4 px-6">Company Name</th>
                                    <th className="py-4 px-6">Industry / Sector</th>
                                    <th className="py-4 px-6">Country</th>
                                    <th className="py-4 px-6 text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-slate-100 font-medium">
                                {filteredClients.map((client) => (
                                    <tr key={client.id} className="hover:bg-blue-50/70 transition-colors">
                                        <td className="py-4 px-6 font-mono font-black text-slate-900 text-center bg-slate-50/60">
                                            #{client.id}
                                        </td>
                                        <td className="py-4 px-6 font-extrabold text-slate-900">
                                            <div className="flex items-center gap-2.5">
                                                <Building2 size={18} className="text-primary shrink-0" />
                                                <span className="text-base">{client.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="bg-blue-100 text-blue-900 font-bold px-3 py-1 rounded-md text-xs border border-blue-200">
                                                {client.sector}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 font-bold text-slate-800">
                                            <span className="inline-flex items-center gap-1.5">
                                                <span>🇰🇼</span>
                                                <span>{client.country}</span>
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            <span className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                                                <CheckCircle2 size={13} className="text-emerald-700" />
                                                Registered
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {filteredClients.length === 0 && (
                <div className="text-center py-16 bg-white rounded-2xl border-2 border-slate-200 shadow-sm">
                    <Building2 className="mx-auto text-slate-400 mb-3" size={44} />
                    <h3 className="text-xl font-black text-slate-800">No companies found</h3>
                    <p className="text-sm font-semibold text-slate-500 mt-1">Try adjusting your search query or filter selection.</p>
                </div>
            )}

            {/* Document Preview Modal */}
            {showDocModal && (
                <div
                    className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setShowDocModal(false)}
                >
                    <div
                        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border-2 border-slate-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4 mb-4">
                            <div>
                                <h3 className="text-2xl font-black text-slate-900">Embassy Registration Document</h3>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">Official Kuwait Embassy Company Roster</p>
                            </div>
                            <button
                                onClick={() => setShowDocModal(false)}
                                className="text-slate-400 hover:text-slate-800 text-3xl font-bold p-1 leading-none transition-colors"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="rounded-xl overflow-hidden border-2 border-slate-200 shadow-inner">
                            <img
                                src={embassyDocImg}
                                alt="Embassy Registration Document"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        <div className="mt-5 flex justify-end">
                            <a
                                href={embassyDocImg}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white px-6 py-2.5 rounded-xl text-sm font-extrabold shadow-md hover:scale-105 transition-all"
                            >
                                <ExternalLink size={16} />
                                Open Full Resolution
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmbassyClients;
