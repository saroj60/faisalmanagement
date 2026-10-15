import React, { useState } from 'react';
import { 
    Building2, Phone, Mail, MapPin, CheckCircle2, ShieldCheck, 
    FileText, Users, ArrowRight, Clock, Award, Briefcase, 
    ChevronDown, Send, Download, ExternalLink, HardHat, 
    Sparkles, Shield, Utensils, Truck, Cpu, MessageSquare
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import TextArea from '../components/ui/TextArea';
import EmbassyClients from '../components/common/EmbassyClients';
import { COMPANY_INFO } from '../utils/constants';

const WORKFORCE_CATEGORIES = [
    {
        icon: HardHat,
        title: "Construction & Civil Infrastructure",
        arabicTitle: "عمالة البناء والتشييد والمقاولات",
        roles: ["Masons (Block/Plaster/Tile)", "Shuttering & Finishing Carpenters", "Steel Fixers & Welders (6G/TIG/MIG)", "Electricians & Plumbers", "Heavy Equipment & Crane Operators"]
    },
    {
        icon: Sparkles,
        title: "Facilities Management & Cleaning",
        arabicTitle: "خدمات التنظيف وإدارة المرافق",
        roles: ["Commercial Cleaners", "Hospital Janitors & Sanitization Staff", "Waste Management Handlers", "Office Boys & Messengers", "Building Maintenance Technicians"]
    },
    {
        icon: Shield,
        title: "Security Services",
        arabicTitle: "أفراد الأمن والحراسة المدربة",
        roles: ["Corporate Security Guards", "Event & Mall Security", "Access Control & CCTV Operators", "Ex-Gurkha / Military Trained Personnel", "Bouncers & Escort Personnel"]
    },
    {
        icon: Utensils,
        title: "Hospitality & Food Services",
        arabicTitle: "الضيافة والمطاعم والفنادق",
        roles: ["Waiters, Stewards & Bussers", "Line Cooks & Kitchen Helpers", "Baristas & Counter Staff", "Housekeeping & Laundry Staff", "Fast-food Crew Members"]
    },
    {
        icon: Truck,
        title: "Logistics, Warehousing & Drivers",
        arabicTitle: "الخدمات اللوجستية والمستودعات والسائقين",
        roles: ["Light & Heavy Vehicle Drivers (Kuwait GCC Lic.)", "Forklift Operators", "Warehouse Pickers & Packers", "Supermarket Merchandisers", "Loading & Unloading Helpers"]
    },
    {
        icon: Cpu,
        title: "Technical, MEP & Engineering",
        arabicTitle: "الكوادر الفنية والميكانيكا والكهرباء",
        roles: ["HVAC & AC Technicians", "Auto Mechanics & Auto Electricians", "Pipe Fitters & Fabricators", "Land Surveyors & Draftsmen (AutoCAD)", "Quality Control & Site Supervisors"]
    }
];

const ATTESTATION_STEPS = [
    {
        step: "01",
        title: "Employer Demand & Power of Attorney",
        arabic: "إصدار كتاب الطلب والتوكيل",
        desc: "Kuwait company issues official Demand Letter, Special Power of Attorney (SPA), and Employment Contract sample with stated salaries and benefits."
    },
    {
        step: "02",
        title: "Chamber & MoFA Kuwait Attestation",
        arabic: "تصديق غرفة التجارة والخارجية الكويتية",
        desc: "The documents are stamped and authenticated by the Kuwait Chamber of Commerce & Industry (KCCI) and Ministry of Foreign Affairs (MoFA) in Kuwait."
    },
    {
        step: "03",
        title: "Kuwait Embassy Kathmandu Verification",
        arabic: "توثيق سفارة الكويت في كاتماندو",
        desc: "Faisal Management (Lic. 1289/074/75) coordinates with the Kuwait Embassy in Kathmandu for official quota verification and recruitment pre-approval."
    },
    {
        step: "04",
        title: "Trade Testing, Medical (GAMCA) & Selection",
        arabic: "الاختبار المهني والفحص الطبي المعتمد",
        desc: "Thorough practical trade testing at our technical workshop, GAMCA-approved medical screening, and direct client interview (physical or video)."
    },
    {
        step: "05",
        title: "Kuwait Entry Visa & Air Deployment",
        arabic: "إصدار التأشيرة وإنهاء إجراءات السفر",
        desc: "Visa stamping through Kuwait Embassy / VFS, Nepal Department of Foreign Employment (DOFE) final clearance, pre-departure orientation, and arrival in Kuwait."
    }
];

const KUWAIT_FAQS = [
    {
        q: "Why recruit Nepalese workers for companies in Kuwait?",
        a: "Nepali workforce is globally renowned for loyalty, high work ethic, obedience, and endurance in harsh climates. Furthermore, the Kuwait Embassy in Kathmandu maintains a well-regulated verification system ensuring zero fraudulent practices and fast visa turnarounds."
    },
    {
        q: "Is Faisal Management officially recognized by the Kuwait Embassy?",
        a: "Yes. Faisal Management Services LLC (Govt. Lic. No. 1289/074/75, Reg. 165229/73/74) is officially listed on the Kuwait Embassy approved recruitment roster, with 49+ Embassy-registered Kuwaiti corporate sponsors including leading contracting, manufacturing, and trading enterprises."
    },
    {
        q: "Do you have an on-ground office in Kuwait?",
        a: "Yes. We maintain a full-time international liaison office located at Jleeb Al Shyoukh - Al Sour - Complex Road - 50, Floor - 2, Kuwait (C.R. No. 2020/19741). Employers in Kuwait can contact us directly via phone or WhatsApp at +965 98034552."
    },
    {
        q: "How long does the recruitment process take from Demand Letter to Deployment?",
        a: "On average, the entire cycle takes 30 to 45 days. This includes Kuwait Embassy document verification, candidate mobilization, trade testing, GAMCA medical clearance, Kuwait entry visa stamping, and Nepal government labour approval (DOFE)."
    },
    {
        q: "Can Kuwait employers conduct in-person or video interviews?",
        a: "Absolutely. We offer state-of-the-art trade testing workshops and video conference interview suites in Kathmandu. Employers or their representatives can visit Nepal to interview candidates directly, or conduct live technical assessments remotely."
    }
];

const KuwaitManpower = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        workforceCategory: 'Construction & Civil Infrastructure',
        workerCount: '',
        requirements: ''
    });

    const [openFaq, setOpenFaq] = useState(0);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const kuwaitWhatsapp = '96598034552';
        const msg = `*Kuwait Manpower Request - Faisal Management*%0A%0A` +
            `*Company:* ${formData.companyName}%0A` +
            `*Contact Person:* ${formData.contactPerson}%0A` +
            `*Phone:* ${formData.phone}%0A` +
            `*Email:* ${formData.email}%0A` +
            `*Category:* ${formData.workforceCategory}%0A` +
            `*Workers Needed:* ${formData.workerCount}%0A` +
            `*Requirements:* ${formData.requirements}`;

        window.open(`https://wa.me/${kuwaitWhatsapp}?text=${msg}`, '_blank');
    };

    // Schema.org Graph for Kuwait Manpower Services
    const kuwaitSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "EmploymentAgency",
                "@id": "https://faisalnepal.com.np/#kuwait-operations",
                "name": "Faisal Management Services LLC - Kuwait Manpower Supply",
                "alternateName": [
                    "شركة فيصل لخدمات الإدارة ذ.م.م - استقدام العمالة النيبالية للكويت",
                    "Faisal Management Kuwait Liaison Office"
                ],
                "url": "https://faisalnepal.com.np/kuwait-manpower-supply",
                "logo": "https://faisalnepal.com.np/favicon.png",
                "description": "Kuwait Embassy approved recruitment agency connecting Nepali skilled, professional, and technical workers with leading employers across the State of Kuwait. Nepal Lic. No. 1289/074/75, Kuwait C.R. No. 2020/19741.",
                "telephone": "+96598034552",
                "email": "info@faisalmanagement.com.np",
                "areaServed": [
                    {
                        "@type": "Country",
                        "name": "Kuwait"
                    },
                    {
                        "@type": "Country",
                        "name": "Nepal"
                    }
                ],
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Jleeb Al Shyoukh - Al Sour - Complex Road - 50, Floor - 2",
                    "addressLocality": "Jleeb Al Shyoukh",
                    "addressRegion": "Al Farwaniyah",
                    "addressCountry": "KW"
                },
                "contactPoint": [
                    {
                        "@type": "ContactPoint",
                        "telephone": "+96598034552",
                        "contactType": "customer service",
                        "areaServed": "KW",
                        "availableLanguage": ["English", "Arabic", "Hindi", "Nepali"]
                    },
                    {
                        "@type": "ContactPoint",
                        "telephone": "+977-14592271",
                        "contactType": "head office",
                        "areaServed": "NP",
                        "availableLanguage": ["English", "Nepali"]
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://faisalnepal.com.np/kuwait-manpower-supply#faq",
                "mainEntity": KUWAIT_FAQS.map(faq => ({
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
                title="Nepal Manpower Supply in Kuwait | Embassy Approved Recruitment Agency"
                description="Govt. Authorized Nepal Overseas Recruitment Agency (Lic. No. 1289/074/75) with Kuwait Branch Office (C.R. No. 2020/19741). Supplying vetted construction, facility, security, hospitality & technical manpower to Kuwait. Direct Kuwait phone: +965 98034552."
                keywords="Nepal manpower Kuwait, hire Nepali workers Kuwait, Kuwait embassy approved agency Nepal, Nepalese labor supply Kuwait, استقدام عمالة نيبالية الكويت, Faisal Management Kuwait, Nepali security guards Kuwait, construction workers Nepal to Kuwait, manpower supply agency Kathmandu to Kuwait"
                canonicalPath="/kuwait-manpower-supply"
                schema={kuwaitSchema}
            />

            {/* Top Kuwait-Direct Emergency Bar */}
            <div className="bg-slate-900 text-white text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                    <div className="flex items-center gap-2">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="font-semibold text-slate-300">
                            Kuwait Operations Liaison Office: <span className="text-white font-bold">Jleeb Al Shyoukh (C.R. 2020/19741)</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                        <a 
                            href="tel:+96598034552" 
                            className="inline-flex items-center gap-1.5 text-accent hover:underline font-bold"
                        >
                            <Phone size={13} />
                            <span>Call Kuwait: +965 98034552</span>
                        </a>
                        <span className="text-slate-600 hidden sm:inline">|</span>
                        <a 
                            href="https://wa.me/96598034552?text=Hello%20Faisal%20Management,%20we%20have%20a%20manpower%20requirement%20for%20our%20Kuwait%20company."
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold"
                        >
                            <MessageSquare size={13} />
                            <span>WhatsApp Kuwait Office</span>
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
                        
                        {/* Dual Country & Embassy Trust Pill */}
                        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg text-xs sm:text-sm font-semibold">
                            <span className="flex items-center gap-1.5">
                                <span className="text-base sm:text-lg">🇰🇼</span>
                                <span className="text-amber-300 font-bold">State of Kuwait</span>
                            </span>
                            <span className="text-slate-400">•</span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-base sm:text-lg">🇳🇵</span>
                                <span className="text-cyan-300 font-bold">Nepal Recruitment Hub</span>
                            </span>
                            <span className="text-slate-400">•</span>
                            <span className="text-emerald-300 font-bold flex items-center gap-1">
                                <ShieldCheck size={16} />
                                <span>Embassy Approved</span>
                            </span>
                        </div>

                        {/* Main H1 */}
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
                            Reliable Nepal Manpower Supply <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-accent">
                                For Employers in Kuwait
                            </span>
                        </h1>

                        {/* Arabic Tagline */}
                        <p className="text-base sm:text-xl font-arabic text-amber-200/90 max-w-3xl mx-auto font-medium" dir="rtl">
                            وكالة التوظيف النيبالية المعتمدة رسمياً لدى سفارة دولة الكويت | توريد العمالة الماهرة والمهنية والفنية
                        </p>

                        <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Connecting Kuwaiti contractors, facilities managers, and corporate groups with rigorously vetted, hard-working Nepali professionals. Backed by <strong className="text-white">Nepal Lic. No. 1289/074/75</strong> and our local Kuwait liaison branch <strong className="text-white">(C.R. No. 2020/19741)</strong>.
                        </p>

                        {/* Action CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
                            <a 
                                href="https://wa.me/96598034552?text=Hello%20Faisal%20Management,%20I%20would%20like%20to%20discuss%20our%20manpower%20demand%20in%20Kuwait." 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-extrabold shadow-xl hover:scale-105 transition-all text-sm sm:text-base"
                            >
                                <MessageSquare size={18} />
                                <span>WhatsApp Kuwait Office</span>
                            </a>
                            <a 
                                href="#demand-form"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-xl font-extrabold shadow-xl hover:scale-105 transition-all text-sm sm:text-base"
                            >
                                <Send size={18} />
                                <span>Submit Manpower Demand</span>
                            </a>
                        </div>

                        {/* Fast Key Credential Badges */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 text-center border-t border-white/10">
                            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                                <div className="text-xl sm:text-2xl font-black text-amber-300">49+</div>
                                <div className="text-[11px] sm:text-xs text-slate-300 font-semibold uppercase">Kuwait Embassy Clients</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                                <div className="text-xl sm:text-2xl font-black text-cyan-300">2020/19741</div>
                                <div className="text-[11px] sm:text-xs text-slate-300 font-semibold uppercase">Kuwait C.R. Registered</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                                <div className="text-xl sm:text-2xl font-black text-emerald-400">1289/074/75</div>
                                <div className="text-[11px] sm:text-xs text-slate-300 font-semibold uppercase">Nepal Govt. License</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                                <div className="text-xl sm:text-2xl font-black text-purple-300">30 - 45 Days</div>
                                <div className="text-[11px] sm:text-xs text-slate-300 font-semibold uppercase">Turnaround Time</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Kuwait On-Ground Office Box */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
                <div className="bg-white rounded-2xl shadow-xl border-2 border-slate-200 p-5 sm:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-500">Kuwait Branch Location</h3>
                                <p className="text-sm font-bold text-slate-900 mt-1">
                                    {COMPANY_INFO.kuwaitOffice.address}
                                </p>
                                <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                                    Commercial Reg: {COMPANY_INFO.kuwaitOffice.crNumber}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 text-primary flex items-center justify-center shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-500">Direct Kuwait Telephone</h3>
                                <a 
                                    href="tel:+96598034552" 
                                    className="text-lg font-black text-primary hover:text-accent transition-colors block mt-1"
                                >
                                    +965 98034552
                                </a>
                                <p className="text-xs text-slate-500 font-medium">Available during Kuwait business hours</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-start md:justify-end gap-3">
                            <a
                                href="https://wa.me/96598034552"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold shadow-md hover:scale-105 transition-all w-full md:w-auto justify-center"
                            >
                                <MessageSquare size={16} />
                                <span>Message on WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Kuwait Employers Choose Nepalese Manpower */}
            <Section className="py-12 sm:py-20">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider mb-3">
                        <Award size={14} />
                        <span>Workforce Excellence</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        Why Kuwait Companies Prefer Nepali Workers
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">
                        Renowned worldwide for dedication, honesty, and rapid adaptability, Nepali manpower is the preferred backbone for Kuwait’s most challenging infrastructure and commercial projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    <Card className="p-6 bg-white border-2 border-slate-200 hover:border-primary transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 text-primary flex items-center justify-center font-bold mb-4">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">High Integrity & Discipline</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Nepali workers have a zero-strike reputation, strict adherence to workplace regulations, and exceptional respect for local Kuwaiti laws and cultural norms.
                        </p>
                    </Card>

                    <Card className="p-6 bg-white border-2 border-slate-200 hover:border-primary transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-4">
                            <Clock size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Climatic & Physical Endurance</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Accustomed to arduous physical demands, Nepali laborers withstand high-temperature gulf work environments in construction, roadworks, and industrial plants.
                        </p>
                    </Card>

                    <Card className="p-6 bg-white border-2 border-slate-200 hover:border-primary transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
                            <FileText size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Kuwait Embassy Protection</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            With mandatory pre-attestation at the Kuwait Embassy in Kathmandu, all quotas, minimum wages, and safety criteria are legally verified, protecting both employer and employee.
                        </p>
                    </Card>
                </div>
            </Section>

            {/* Workforce Categories Grid */}
            <div className="bg-slate-100 py-12 sm:py-20 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-2 bg-accent/15 text-accent font-bold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider mb-3">
                            <Briefcase size={14} />
                            <span>Recruitment Specializations</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                            Manpower Sectors We Supply to Kuwait
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">
                            From large-scale turnkey infrastructure teams to specialized service staff, we supply rigorously tested personnel across all key sectors.
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
                                        <p className="text-xs font-semibold text-slate-500 mb-4">{cat.arabicTitle}</p>
                                        
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

            {/* Official Kuwait Embassy Recruitment & Attestation Process */}
            <Section className="py-12 sm:py-20">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider mb-3">
                        <FileText size={14} />
                        <span>Step-by-Step Procedure</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        Official Kuwait Recruitment & Attestation Process
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">
                        We manage end-to-end legal compliance in full harmony with the Kuwait Ministry of Social Affairs and Labour and the Embassy of the State of Kuwait in Kathmandu.
                    </p>
                </div>

                <div className="space-y-6 max-w-4xl mx-auto">
                    {ATTESTATION_STEPS.map((item, index) => (
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

            {/* Embassy Registered Clients Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <EmbassyClients 
                    title="49+ Embassy Registered Kuwait Clients"
                    subtitle="Verified corporate entities and industrial enterprises actively serviced by Faisal Management"
                />
            </div>

            {/* Request Manpower Demand Form */}
            <div id="demand-form" className="bg-gradient-to-br from-slate-900 via-primary to-slate-950 text-white py-14 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-accent/20 text-accent font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-3">
                            <Send size={14} />
                            <span>Direct Employer Service</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                            Submit Your Kuwait Manpower Requirement
                        </h2>
                        <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl mx-auto">
                            Fill out the details below. Our Kuwait International representative or Kathmandu headquarters will contact you within 24 hours with a comprehensive quotation and mobilization timeline.
                        </p>
                    </div>

                    <div className="bg-white text-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-2xl border-2 border-slate-200">
                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input 
                                    label="Company Name in Kuwait *" 
                                    name="companyName"
                                    placeholder="e.g. Al-Ahlia Contracting Co." 
                                    required
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />
                                <Input 
                                    label="Contact Person / Designation *" 
                                    name="contactPerson"
                                    placeholder="e.g. Ahmed Al-Sabah (HR Manager)" 
                                    required
                                    value={formData.contactPerson}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input 
                                    label="Kuwait Phone / WhatsApp *" 
                                    name="phone"
                                    placeholder="+965 9000 0000" 
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <Input 
                                    label="Official Corporate Email *" 
                                    type="email" 
                                    name="email"
                                    placeholder="hr@company.com.kw" 
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
                                    placeholder="e.g. 25 Technicians, 50 Laborers" 
                                    required
                                    value={formData.workerCount}
                                    onChange={handleChange}
                                />
                            </div>

                            <TextArea 
                                label="Job Roles & Special Specifications *" 
                                name="requirements"
                                placeholder="Describe skill levels, proposed basic salary in KWD, food/accommodation arrangements, and expected deployment timeline..." 
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
                                    <span>Transmit Request to Kuwait Liaison Office</span>
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Kuwait Employer FAQ Accordion */}
            <Section className="py-12 sm:py-20">
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider mb-3">
                        <FileText size={14} />
                        <span>Frequently Asked Questions</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        Answers for Kuwait Employers & Sponsors
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
                        Transparent information regarding legalities, timelines, and costs.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-3.5">
                    {KUWAIT_FAQS.map((faq, idx) => (
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

            {/* Floating Kuwait WhatsApp Quick Button */}
            <a
                href="https://wa.me/96598034552?text=Hello%20Faisal%20Management,%20we%20are%20a%20company%20in%20Kuwait%20interested%20in%20hiring%20manpower."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 font-black text-xs sm:text-sm hover:scale-105 transition-all border-2 border-white"
                title="Chat with Kuwait Office"
            >
                <MessageSquare size={20} />
                <span className="hidden sm:inline">Kuwait Office: +965 98034552</span>
            </a>

        </div>
    );
};

export default KuwaitManpower;
