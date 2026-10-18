import React, { useState } from 'react';
import { 
    Building2, Phone, Mail, MapPin, CheckCircle2, ShieldCheck, 
    FileText, Users, ArrowRight, Clock, Award, Briefcase, 
    ChevronDown, Send, Download, ExternalLink, HardHat, 
    Sparkles, Shield, Utensils, Truck, Cpu, MessageSquare,
    Eye, X, ZoomIn, Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/common/SEO';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import TextArea from '../components/ui/TextArea';
import { COMPANY_INFO } from '../utils/constants';
import { UAE_CLIENTS } from '../data/uaeClients';

const WORKFORCE_CATEGORIES = [
    {
        icon: HardHat,
        title: "Construction & Civil Infrastructure",
        arabicTitle: "عمالة البناء والتشييد والمشاريع الكبرى",
        roles: [
            "Masons (Block, Plaster, Tile & Stone)",
            "Shuttering & Finishing Carpenters",
            "Reinforcing Fitters & Steel Fixers",
            "Concrete & Foundation Workers",
            "General Site Helpers & Riggers"
        ]
    },
    {
        icon: Cpu,
        title: "MEP, Electrical & Technical Works",
        arabicTitle: "الكهرباء والتمديدات والميكانيكا والتكييف",
        roles: [
            "Industrial Wiring Electricians",
            "Domestic Wiring Electricians",
            "HVAC & Central A/C Technicians",
            "Fitter Plumbers & Pipe Fitters",
            "Patrol Diesel Mechanics & Auto Electricians"
        ]
    },
    {
        icon: Shield,
        title: "Heavy Scaffolding & Welding (6G/TIG)",
        arabicTitle: "السقالات الصناعية واللحام المعتمد",
        roles: [
            "Heavy Scaffolding Specialists (TÜV / CISRS Std.)",
            "Electric Arc Welders (3G / 4G)",
            "Oxygen & Gas Welders",
            "TIG & MIG Argon Welders",
            "Fabricators & Structural Blacksmiths"
        ]
    },
    {
        icon: Truck,
        title: "Logistics, Transport & Drivers",
        arabicTitle: "النقليات واللوجستيات والسائقين",
        roles: [
            "Heavy Truck & Trailer Drivers (UAE GCC Lic.)",
            "Light Delivery & Van Drivers",
            "Forklift & Heavy Equipment Operators",
            "Warehouse Pickers, Packers & Movers",
            "Fleet Maintenance Crew"
        ]
    },
    {
        icon: Utensils,
        title: "Agro, Poultry & Food Processing",
        arabicTitle: "الإنتاج الزراعي والدواجن وتجهيز الأغذية",
        roles: [
            "Poultry Farm Handlers & Caretakers",
            "Food Packaging & Sorting Operators",
            "Cold Storage & Freezer Handlers",
            "Hygiene & Sanitation Helpers",
            "Warehouse Cargo Loading Staff"
        ]
    },
    {
        icon: Sparkles,
        title: "Facilities Management & Hospitality",
        arabicTitle: "إدارة المرافق والخدمات الفندقية والأمن",
        roles: [
            "Commercial & Mall Cleaning Staff",
            "Security Guards & Access Control",
            "Hospital & Clinic Sanitization Janitors",
            "Waiters, Baristas & Kitchen Stewards",
            "Office Assistants & Tea Boys"
        ]
    }
];

const UAE_ATTESTATION_STEPS = [
    {
        step: "01",
        title: "Demand Letter & Power of Attorney",
        arabic: "إصدار كتاب الطلب والتوكيل الرسمي",
        desc: "The UAE employer issues an official Demand Letter, Special Power of Attorney (SPA), and Sample Employment Contract detailing job titles, basic salaries in AED, and workplace benefits."
    },
    {
        step: "02",
        title: "UAE Chamber of Commerce & MoFA Attestation",
        arabic: "تصديق غرفة التجارة ووزارة الخارجية الإماراتية",
        desc: "The documentation is attested by the respective local Chamber of Commerce (Abu Dhabi, Dubai, Sharjah, Ajman) and the UAE Ministry of Foreign Affairs (MoFA)."
    },
    {
        step: "03",
        title: "Embassy of Nepal Verification (Abu Dhabi)",
        arabic: "توثيق سفارة نيبال في أبوظبي",
        desc: "The Embassy of Nepal in Abu Dhabi reviews and registers the quota under Nepal Govt. License No. 1289/074/075, issuing an official embassy verification seal (NEAD/Lab series)."
    },
    {
        step: "04",
        title: "Trade Testing, GAMCA Medical & Selection",
        arabic: "الفحص الطبي والاختبارات الفنية في كاتماندو",
        desc: "Rigorous skill verification at our Kathmandu technical workshop, biometric GAMCA-approved medical tests, and direct client interviews (in-person or HD video conference)."
    },
    {
        step: "05",
        title: "UAE Work Permit (MoHRE) & Air Deployment",
        arabic: "إصدار تصاريح العمل والسفر إلى دولة الإمارات",
        desc: "UAE electronic work permits generated via MoHRE, Nepal Department of Foreign Employment (DOFE) clearance, pre-departure cultural briefing, and scheduled flights to UAE airports."
    }
];

const UAE_FAQS = [
    {
        q: "Why do top UAE contractors and royal courts choose Nepali manpower?",
        a: "Nepali workers are internationally admired for their honesty, disciplined obedience, physical endurance under hot Middle Eastern weather, and strict adherence to workplace regulations. They have earned the trust of major UAE institutions such as the Office of H.H. Sheikh Hamdan Bin Zayed Al Nahyan, Trojan General Contracting, and Granite Construction."
    },
    {
        q: "Is Faisal Management officially verified by the Embassy of Nepal in Abu Dhabi?",
        a: "Yes. Faisal Management Services LLC (formerly Sony International Pvt. Ltd., Nepal Govt. Lic. No. 1289/074/75) has a direct verified track record with the Embassy of Nepal in Abu Dhabi, having successfully attested and executed demand quotas ranging from 10 to over 230 workers per client."
    },
    {
        q: "What is the typical deployment timeline from UAE Demand Letter to arrival?",
        a: "The standard end-to-end recruitment cycle takes 30 to 45 days. This includes UAE Chamber/MoFA attestation, Nepal Embassy Abu Dhabi verification, candidate trade testing, GAMCA medical examination, MoHRE entry visa issuance, and final Nepal DOFE labour clearance."
    },
    {
        q: "Are the recruitments fully compliant with the UAE Labour Law and Wage Protection System (WPS)?",
        a: "Yes. All employment contracts comply strictly with Federal Decree-Law No. 33 of 2021 regarding the regulation of employment relationships in the UAE. Salaries are formatted to meet all Wage Protection System (WPS) requirements with full provision of medical insurance, accommodation, and round-trip air passage."
    },
    {
        q: "Can UAE employers conduct live practical trade tests before recruitment?",
        a: "Absolutely. We host clients in Kathmandu with dedicated trade testing workshops for masonry, electrical wiring, welding (TIG/MIG/Arc), carpentry, scaffolding, and mechanical repairs. For employers unable to travel, we provide high-definition live video evaluations and recorded technical test demonstrations."
    }
];

const EMIRATES = [
    "Abu Dhabi",
    "Dubai",
    "Sharjah",
    "Ajman",
    "Ras Al Khaimah",
    "Fujairah",
    "Umm Al Quwain"
];

const UaeManpower = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        emirate: 'Abu Dhabi',
        workforceCategory: 'Construction & Civil Infrastructure',
        workerCount: '',
        requirements: ''
    });

    const [openFaq, setOpenFaq] = useState(0);
    const [selectedPortfolioImage, setSelectedPortfolioImage] = useState(null);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const whatsappNumber = '9779705111337';
        const msg = `*UAE Manpower Request - Faisal Management*%0A%0A` +
            `*Company:* ${formData.companyName}%0A` +
            `*Emirate:* ${formData.emirate}%0A` +
            `*Contact Person:* ${formData.contactPerson}%0A` +
            `*Phone:* ${formData.phone}%0A` +
            `*Email:* ${formData.email}%0A` +
            `*Category:* ${formData.workforceCategory}%0A` +
            `*Workers Needed:* ${formData.workerCount}%0A` +
            `*Requirements:* ${formData.requirements}`;

        window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
    };

    // Schema.org Graph for UAE Manpower Services
    const uaeSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "EmploymentAgency",
                "@id": "https://faisalnepal.com.np/#uae-operations",
                "name": "Faisal Management Services LLC - UAE Manpower Supply",
                "alternateName": [
                    "شركة فيصل لخدمات الإدارة ذ.م.م - استقدام العمالة النيبالية للإمارات",
                    "Faisal Management UAE Recruitment Hub"
                ],
                "url": "https://faisalnepal.com.np/uae-manpower-supply",
                "logo": "https://faisalnepal.com.np/favicon.png",
                "description": "Government authorized Nepal recruitment agency supplying verified skilled, technical, and civil workforce to premier UAE enterprises, contractors, and royal court offices in Abu Dhabi, Dubai, and the Northern Emirates. Lic. No. 1289/074/75.",
                "telephone": "+977 9705111337",
                "email": "info@faisalmanagement.com.np",
                "areaServed": [
                    { "@type": "Country", "name": "United Arab Emirates" },
                    { "@type": "AdministrativeArea", "name": "Abu Dhabi" },
                    { "@type": "AdministrativeArea", "name": "Dubai" },
                    { "@type": "AdministrativeArea", "name": "Sharjah" },
                    { "@type": "Country", "name": "Nepal" }
                ],
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Pinglasthan-9, Bajreshwori Marg",
                    "addressLocality": "Kathmandu",
                    "addressCountry": "NP"
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://faisalnepal.com.np/uae-manpower-supply#faq",
                "mainEntity": UAE_FAQS.map(faq => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.a
                    }
                }))
            }
        ]
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <SEO
                title="Nepal Manpower Supply in UAE | Dubai & Abu Dhabi Recruitment Agency"
                description="Govt. Authorized Nepal Overseas Recruitment Agency (Lic. No. 1289/074/75). Supplying vetted construction, technical, MEP, facility, security, poultry & logistics manpower across UAE (Abu Dhabi, Dubai, Sharjah). Verified by Embassy of Nepal, Abu Dhabi."
                keywords="Nepal manpower UAE, hire Nepali workers Dubai, manpower agency Nepal to UAE, Abu Dhabi recruitment agency Nepal, استقدام عمالة نيبالية الإمارات, Trojan contracting Nepal agency, Nepali security guards UAE, construction workers Nepal to Dubai, Nepal Embassy Abu Dhabi verified manpower"
                canonicalPath="/uae-manpower-supply"
                schema={uaeSchema}
            />

            {/* Top UAE Direct Notice Bar */}
            <div className="bg-slate-900 text-white text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                    <div className="flex items-center gap-2">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="font-semibold text-slate-300">
                            UAE Recruitment Operations: <span className="text-white font-bold">Serving Abu Dhabi, Dubai, Sharjah & Northern Emirates</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                        <a 
                            href="tel:+9779705111337" 
                            className="inline-flex items-center gap-1.5 text-accent hover:underline font-bold"
                        >
                            <Phone size={13} />
                            <span>Call Desk: +977 9705111337</span>
                        </a>
                        <span className="text-slate-600 hidden sm:inline">|</span>
                        <a 
                            href="https://wa.me/9779705111337?text=Hello%20Faisal%20Management,%20we%20have%20a%20manpower%20demand%20for%20our%20UAE%20company."
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold"
                        >
                            <MessageSquare size={13} />
                            <span>WhatsApp UAE Desk</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Hero Section with Dual Flags & Credentials */}
            <div className="relative bg-gradient-to-br from-slate-950 via-primary to-slate-900 text-white py-12 sm:py-20 md:py-24 overflow-hidden border-b-4 border-accent">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        
                        {/* Dual Country & Attestation Pill */}
                        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg text-xs sm:text-sm font-semibold">
                            <span className="flex items-center gap-1.5">
                                <span className="text-base sm:text-lg">🇦🇪</span>
                                <span className="text-emerald-300 font-bold">United Arab Emirates</span>
                            </span>
                            <span className="text-slate-400">•</span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-base sm:text-lg">🇳🇵</span>
                                <span className="text-cyan-300 font-bold">Nepal Recruitment Hub</span>
                            </span>
                            <span className="text-slate-400">•</span>
                            <span className="text-amber-300 font-bold flex items-center gap-1">
                                <ShieldCheck size={16} />
                                <span>MoFA & Nepal Embassy Verified</span>
                            </span>
                        </div>

                        {/* Main H1 */}
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
                            Premier Nepal Manpower Supply <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-accent">
                                For Employers Across the UAE
                            </span>
                        </h1>

                        {/* Arabic Tagline */}
                        <p className="text-base sm:text-xl font-arabic text-amber-200/90 max-w-3xl mx-auto font-medium" dir="rtl">
                            وكالة التوظيف النيبالية المعتمدة لتوريد الكوادر البشرية والمهنية لكبرى الشركات في دولة الإمارات العربية المتحدة
                        </p>

                        <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Empowering UAE mega-contractors, royal offices, manufacturing plants, and facility managers with tested Nepali technicians and hardworking labor. Authorized under <strong className="text-white">Nepal Govt. Lic. No. 1289/074/75</strong> with authentic demand history attested by the <strong className="text-white">Embassy of Nepal, Abu Dhabi</strong>.
                        </p>

                        {/* Action CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
                            <a 
                                href="https://wa.me/9779705111337?text=Hello%20Faisal%20Management,%20I%20would%20like%20to%20discuss%20our%20manpower%20demand%20in%20the%20UAE." 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-extrabold shadow-xl hover:scale-105 transition-all text-sm sm:text-base"
                            >
                                <MessageSquare size={18} />
                                <span>WhatsApp UAE Desk</span>
                            </a>
                            <a 
                                href="#demand-form"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-xl font-extrabold shadow-xl hover:scale-105 transition-all text-sm sm:text-base"
                            >
                                <Send size={18} />
                                <span>Submit UAE Manpower Demand</span>
                            </a>
                        </div>

                        {/* Key Credential Badges */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 text-center border-t border-white/10">
                            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                                <div className="text-xl sm:text-2xl font-black text-amber-300">750+</div>
                                <div className="text-[11px] sm:text-xs text-slate-300 font-semibold uppercase">Verified UAE Workers Deployed</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                                <div className="text-xl sm:text-2xl font-black text-cyan-300">MoFA & Embassy</div>
                                <div className="text-[11px] sm:text-xs text-slate-300 font-semibold uppercase">Attested Legal Quotas</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                                <div className="text-xl sm:text-2xl font-black text-emerald-400">1289/074/75</div>
                                <div className="text-[11px] sm:text-xs text-slate-300 font-semibold uppercase">Nepal Govt. License</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                                <div className="text-xl sm:text-2xl font-black text-purple-300">30 - 45 Days</div>
                                <div className="text-[11px] sm:text-xs text-slate-300 font-semibold uppercase">Deployment Lead Time</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Royal & Tier-1 Trust Highlight Card */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
                <div className="bg-white rounded-2xl shadow-xl border-2 border-slate-200 p-5 sm:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-500">Royal Court Experience</h3>
                                <p className="text-sm font-bold text-slate-900 mt-1">
                                    Office of H.H. Sheikh Hamdan Bin Zayed Al Nahyan
                                </p>
                                <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                                    MoFA & Embassy Attested (230 Workers)
                                </span>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 text-primary flex items-center justify-center shrink-0">
                                <Building2 size={24} />
                            </div>
                            <div>
                                <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-500">Mega-Contractor Partner</h3>
                                <p className="text-sm font-bold text-slate-900 mt-1">
                                    Trojan General Contracting L.L.C. (AED 67M Capital)
                                </p>
                                <p className="text-xs text-slate-500 font-medium">Over 200 electricians, masons & fitters supplied</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-start md:justify-end gap-3">
                            <a
                                href="#verified-employers"
                                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold shadow-md hover:scale-105 transition-all w-full md:w-auto justify-center"
                            >
                                <Eye size={16} />
                                <span>Inspect Verified UAE Employers</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Verified UAE Employers & Demand Letters Showcase */}
            <div id="verified-employers" className="py-12 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-2 bg-accent/15 text-accent font-bold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider mb-3">
                            <ShieldCheck size={14} />
                            <span>Authentic Demand Documentation</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                            Verified UAE Employers & Legal Demand Letters
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">
                            Explore real corporate and royal employers in Abu Dhabi, Sharjah, and Ajman who have entrusted their manpower recruitment quotas to our government-authorized agency. Click any letter to view full details.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {UAE_CLIENTS.map((client) => (
                            <div 
                                key={client.id}
                                className="bg-white rounded-2xl border-2 border-slate-200 hover:border-primary shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                            >
                                {/* Thumbnail Image with Click to Zoom */}
                                <div 
                                    className="relative aspect-[4/3] bg-slate-100 overflow-hidden cursor-pointer"
                                    onClick={() => setSelectedPortfolioImage(client)}
                                >
                                    <img 
                                        src={client.portfolioImage} 
                                        alt={client.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/600x800?text=Demand+Letter';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end justify-between p-3">
                                        <span className="text-[11px] font-bold text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                                            {client.emirate}
                                        </span>
                                        <div className="bg-white/90 p-1.5 rounded-full text-slate-900 group-hover:scale-110 transition-transform">
                                            <ZoomIn size={14} />
                                        </div>
                                    </div>
                                    <div className="absolute top-3 left-3">
                                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900 bg-amber-300 px-2 py-0.5 rounded-full shadow-sm">
                                            {client.badge}
                                        </span>
                                    </div>
                                </div>

                                {/* Body Information */}
                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-base font-bold text-slate-900 leading-snug mb-1 group-hover:text-primary transition-colors">
                                            {client.name}
                                        </h3>
                                        <p className="text-xs font-semibold text-slate-500 font-arabic mb-3" dir="rtl">
                                            {client.arabicName}
                                        </p>
                                        
                                        <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                                            <p className="font-semibold text-slate-800 flex items-center gap-1.5">
                                                <Briefcase size={13} className="text-accent shrink-0" />
                                                <span>{client.sector}</span>
                                            </p>
                                            <p className="text-emerald-700 font-bold flex items-center gap-1.5">
                                                <Users size={13} className="shrink-0" />
                                                <span>{client.workersCount}</span>
                                            </p>
                                            <p className="text-[11px] text-slate-500 leading-tight pt-1">
                                                <strong className="text-slate-700">Attestation:</strong> {client.attestation}
                                            </p>
                                        </div>

                                        <div className="pt-2 border-t border-slate-100">
                                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Key Roles:</p>
                                            <div className="flex flex-wrap gap-1">
                                                {client.roles.slice(0, 3).map((role, rIdx) => (
                                                    <span key={rIdx} className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                                                        {role}
                                                    </span>
                                                ))}
                                                {client.roles.length > 3 && (
                                                    <span className="text-[10px] font-semibold text-primary px-1 py-0.5">
                                                        +{client.roles.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                                        <button 
                                            onClick={() => setSelectedPortfolioImage(client)}
                                            className="text-xs font-bold text-primary hover:text-accent inline-flex items-center gap-1"
                                        >
                                            <span>View Letter</span>
                                            <ArrowRight size={13} />
                                        </button>
                                        <a 
                                            href="#demand-form" 
                                            className="text-[11px] font-bold text-slate-500 hover:text-slate-900"
                                        >
                                            Hire Similar
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Workforce Categories Grid */}
            <div className="bg-slate-100 py-12 sm:py-20 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider mb-3">
                            <Briefcase size={14} />
                            <span>Specialized UAE Workforce Supply</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                            Manpower Sectors We Supply to the UAE
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">
                            From massive high-rise construction developments to specialized food production and heavy logistics fleets, we supply tested, certified, and compliant personnel.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {WORKFORCE_CATEGORIES.map((cat, idx) => {
                            const IconComponent = cat.icon;
                            return (
                                <div 
                                    key={idx} 
                                    className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-accent shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                                            <IconComponent size={24} />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">{cat.title}</h3>
                                        <p className="text-xs font-semibold text-slate-500 font-arabic mb-4" dir="rtl">{cat.arabicTitle}</p>
                                        
                                        <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                                            {cat.roles.map((role, rIdx) => (
                                                <li key={rIdx} className="flex items-start gap-2">
                                                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                                                    <span>{role}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-slate-100">
                                        <a 
                                            href="#demand-form"
                                            className="text-xs font-bold text-primary hover:text-accent inline-flex items-center gap-1 group"
                                        >
                                            <span>Request workers in this sector</span>
                                            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Official Step-by-Step UAE Recruitment & Attestation Process */}
            <Section className="py-12 sm:py-20">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider mb-3">
                        <FileText size={14} />
                        <span>Compliance & MoHRE Workflow</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        Official UAE Recruitment & Attestation Process
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">
                        Seamless legal compliance connecting the UAE Ministry of Human Resources & Emiratisation (MoHRE), the Embassy of Nepal in Abu Dhabi, and the Nepal Department of Foreign Employment.
                    </p>
                </div>

                <div className="space-y-6 max-w-4xl mx-auto">
                    {UAE_ATTESTATION_STEPS.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-2xl p-5 sm:p-7 border-2 border-slate-200 shadow-sm flex flex-col sm:flex-row items-start gap-4 sm:gap-6 hover:border-primary transition-colors"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-lg shrink-0 shadow-md">
                                {item.step}
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                                    <h3 className="text-base sm:text-lg font-black text-slate-900">{item.title}</h3>
                                    <span className="text-xs font-bold text-accent font-arabic" dir="rtl">{item.arabic}</span>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Request UAE Manpower Demand Form */}
            <div id="demand-form" className="bg-gradient-to-br from-slate-900 via-primary to-slate-950 text-white py-14 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-accent/20 text-accent font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-3">
                            <Send size={14} />
                            <span>Direct Employer Service</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                            Submit Your UAE Manpower Requirement
                        </h2>
                        <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl mx-auto">
                            Whether you need 10 specialist welders in Sharjah or 200 construction workers in Abu Dhabi, our Kathmandu mobilization team will formulate an official quota strategy and response within 24 hours.
                        </p>
                    </div>

                    <div className="bg-white text-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-2xl border-2 border-slate-200">
                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input 
                                    label="Company Name in UAE *" 
                                    name="companyName"
                                    placeholder="e.g. Al Futtaim Construction / Trojan LLC" 
                                    required
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />
                                <Input 
                                    label="Contact Person / Designation *" 
                                    name="contactPerson"
                                    placeholder="e.g. Emad Al Janabi (HR Director)" 
                                    required
                                    value={formData.contactPerson}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                                        Emirate *
                                    </label>
                                    <select
                                        name="emirate"
                                        value={formData.emirate}
                                        onChange={handleChange}
                                        className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white"
                                    >
                                        {EMIRATES.map((em, i) => (
                                            <option key={i} value={em}>{em}</option>
                                        ))}
                                    </select>
                                </div>
                                <Input 
                                    label="UAE Phone / WhatsApp *" 
                                    name="phone"
                                    placeholder="+971 50 000 0000" 
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <Input 
                                    label="Official Corporate Email *" 
                                    type="email" 
                                    name="email"
                                    placeholder="recruitment@company.ae" 
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                                        Workforce Category *
                                    </label>
                                    <select
                                        name="workforceCategory"
                                        value={formData.workforceCategory}
                                        onChange={handleChange}
                                        className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white"
                                    >
                                        {WORKFORCE_CATEGORIES.map((c, i) => (
                                            <option key={i} value={c.title}>{c.title}</option>
                                        ))}
                                    </select>
                                </div>
                                <Input 
                                    label="Number of Workers Needed *" 
                                    name="workerCount"
                                    placeholder="e.g. 50 Electricians, 30 Masons" 
                                    required
                                    value={formData.workerCount}
                                    onChange={handleChange}
                                />
                            </div>

                            <TextArea 
                                label="Job Specifications, Salaries & Welfare *" 
                                name="requirements"
                                placeholder="State basic salary offer in AED, overtime policy, food/camp details, site location, and expected mobilization date..." 
                                required
                                value={formData.requirements}
                                onChange={handleChange}
                            />

                            <div className="pt-2">
                                <Button 
                                    size="lg" 
                                    type="submit" 
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base py-4 rounded-xl shadow-lg flex items-center justify-center gap-2"
                                >
                                    <Send size={18} />
                                    <span>Transmit Demand to UAE Recruitment Desk</span>
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* UAE Employer FAQ Accordion */}
            <Section className="py-12 sm:py-20">
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider mb-3">
                        <FileText size={14} />
                        <span>Frequently Asked Questions</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        Answers for UAE Sponsors & HR Managers
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
                        Essential answers regarding UAE visa processes, attestation legalities, and candidate vetting.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-3.5">
                    {UAE_FAQS.map((faq, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-xs transition-all"
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-extrabold text-slate-900 text-sm sm:text-base hover:text-primary transition-colors"
                            >
                                <span>{faq.q}</span>
                                <ChevronDown 
                                    size={18} 
                                    className={`shrink-0 text-slate-500 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-primary' : ''}`} 
                                />
                            </button>
                            {openFaq === idx && (
                                <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-medium">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Section>

            {/* Lightbox Modal for Demand Letter Inspection */}
            <AnimatePresence>
                {selectedPortfolioImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPortfolioImage(null)}
                        className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8"
                    >
                        <motion.button
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-accent transition-colors p-2 bg-black/50 rounded-full z-50"
                            whileHover={{ rotate: 90 }}
                            onClick={() => setSelectedPortfolioImage(null)}
                        >
                            <X size={28} className="sm:w-9 sm:h-9" />
                        </motion.button>

                        <motion.div
                            className="max-w-4xl max-h-[75vh] sm:max-h-[82vh] overflow-hidden flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedPortfolioImage.portfolioImage}
                                alt={selectedPortfolioImage.name}
                                className="max-w-full max-h-[75vh] sm:max-h-[82vh] object-contain rounded-lg shadow-2xl shadow-accent/20"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/800x1100?text=Demand+Letter+Preview';
                                }}
                            />
                        </motion.div>
                        
                        <div className="mt-4 text-center text-white max-w-xl">
                            <h3 className="text-lg sm:text-xl font-bold">{selectedPortfolioImage.name}</h3>
                            <p className="text-xs sm:text-sm text-amber-300 font-arabic" dir="rtl">{selectedPortfolioImage.arabicName}</p>
                            <p className="text-xs text-slate-400 mt-1">{selectedPortfolioImage.attestation}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating UAE WhatsApp Button */}
            <a
                href="https://wa.me/9779705111337?text=Hello%20Faisal%20Management,%20we%20are%20a%20company%20in%20the%20UAE%20interested%20in%20hiring%20manpower."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 font-black text-xs sm:text-sm hover:scale-105 transition-all border-2 border-white"
                title="Chat with UAE Recruitment Desk"
            >
                <MessageSquare size={20} />
                <span className="hidden sm:inline">UAE Desk: WhatsApp Inquiry</span>
            </a>

        </div>
    );
};

export default UaeManpower;
