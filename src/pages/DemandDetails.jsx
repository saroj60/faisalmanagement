import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, DollarSign, Users, Calendar, ChevronLeft, ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import API_BASE_URL from '../config/api';
import SEO from '../components/common/SEO';

const DemandDetails = () => {
    const { id } = useParams();
    const [demand, setDemand] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/demands/${id}`)
            .then(res => res.json())
            .then(data => {
                setDemand(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch demand", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <Section><p className="text-center">Loading...</p></Section>;
    if (!demand) return <Section><p className="text-center">Demand not found.</p></Section>;

    const jobSchema = demand ? {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": demand.title,
        "description": demand.description || `Overseas employment opportunity for ${demand.title} in ${demand.country}. Apply through Faisal Management Services.`,
        "datePosted": demand.createdAt ? new Date(demand.createdAt).toISOString().split('T')[0] : "2026-01-01",
        "validThrough": demand.endDate || "2026-12-31",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
            "@type": "Organization",
            "name": "Faisal Management Services LLC",
            "sameAs": "https://faisalnepal.com.np",
            "logo": "https://faisalnepal.com.np/favicon.png"
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": demand.country
            }
        },
        "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "AED",
            "value": {
                "@type": "QuantitativeValue",
                "value": demand.salary || "Competitive"
            }
        }
    } : null;

    return (
        <>
            <SEO 
                title={`${demand.title} in ${demand.country}`}
                description={`Job vacancy for ${demand.title} in ${demand.country}. Salary: ${demand.salary || 'Competitive'}. Open positions: ${demand.workers || 'Multiple'}. Recruited by Faisal Management Services.`}
                canonicalPath={`/demands/${id}`}
                schema={jobSchema}
            />
            <Section>
            <div className="max-w-4xl mx-auto">
                <Link to="/demands" className="flex items-center text-gray-600 hover:text-primary mb-6">
                    <ChevronLeft size={20} className="mr-1" /> Back to Demands
                </Link>

                <Card className="p-5 sm:p-8 border border-gray-100 shadow-lg">
                    <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-4 leading-snug">{demand.title}</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8">
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-center text-sm sm:text-base md:text-lg">
                                <MapPin size={20} className="mr-3 text-red-500 shrink-0" />
                                <span className="text-gray-600">Location:</span>
                                <span className="ml-2 font-semibold">{demand.country}</span>
                            </div>
                            <div className="flex items-center text-sm sm:text-base md:text-lg">
                                <DollarSign size={20} className="mr-3 text-green-500 shrink-0" />
                                <span className="text-gray-600">Salary:</span>
                                <span className="ml-2 font-semibold">{demand.salary}</span>
                            </div>
                            <div className="flex items-center text-sm sm:text-base md:text-lg">
                                <Users size={20} className="mr-3 text-blue-500 shrink-0" />
                                <span className="text-gray-600">Workers Needed:</span>
                                <span className="ml-2 font-semibold">{demand.workers}</span>
                            </div>
                        </div>

                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-center text-sm sm:text-base md:text-lg">
                                <Calendar size={20} className="mr-3 text-orange-500 shrink-0" />
                                <span className="text-gray-600">Start Date:</span>
                                <span className="ml-2 font-semibold">{demand.startDate}</span>
                            </div>
                            <div className="flex items-center text-sm sm:text-base md:text-lg">
                                <Calendar size={20} className="mr-3 text-orange-500 shrink-0" />
                                <span className="text-gray-600">End Date:</span>
                                <span className="ml-2 font-semibold">{demand.endDate}</span>
                            </div>
                        </div>
                    </div>

                    <div className="border-t pt-6">
                        <Link to="/contact">
                            <Button size="lg" className="w-full sm:w-auto">
                                Apply Now <ArrowRight size={20} className="ml-2" />
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </Section>
        </>
    );
};

export default DemandDetails;
