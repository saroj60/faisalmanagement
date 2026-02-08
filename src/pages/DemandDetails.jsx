import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, DollarSign, Users, Calendar, ChevronLeft, ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const DemandDetails = () => {
    const { id } = useParams();
    const [demand, setDemand] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/demands/${id}`)
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

    return (
        <Section>
            <div className="max-w-4xl mx-auto">
                <Link to="/demands" className="flex items-center text-gray-600 hover:text-primary mb-6">
                    <ChevronLeft size={20} className="mr-1" /> Back to Demands
                </Link>

                <Card className="p-8 border border-gray-100 shadow-lg">
                    <h1 className="text-3xl font-bold text-primary mb-4">{demand.title}</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                            <div className="flex items-center text-lg">
                                <MapPin size={24} className="mr-3 text-red-500" />
                                <span className="text-gray-600">Location:</span>
                                <span className="ml-2 font-semibold">{demand.country}</span>
                            </div>
                            <div className="flex items-center text-lg">
                                <DollarSign size={24} className="mr-3 text-green-500" />
                                <span className="text-gray-600">Salary:</span>
                                <span className="ml-2 font-semibold">{demand.salary}</span>
                            </div>
                            <div className="flex items-center text-lg">
                                <Users size={24} className="mr-3 text-blue-500" />
                                <span className="text-gray-600">Workers Needed:</span>
                                <span className="ml-2 font-semibold">{demand.workers}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center text-lg">
                                <Calendar size={24} className="mr-3 text-orange-500" />
                                <span className="text-gray-600">Start Date:</span>
                                <span className="ml-2 font-semibold">{demand.startDate}</span>
                            </div>
                            <div className="flex items-center text-lg">
                                <Calendar size={24} className="mr-3 text-orange-500" />
                                <span className="text-gray-600">End Date:</span>
                                <span className="ml-2 font-semibold">{demand.endDate}</span>
                            </div>
                        </div>
                    </div>

                    <div className="border-t pt-6">
                        <Link to="/contact">
                            <Button size="lg" className="w-full md:w-auto">
                                Apply Now <ArrowRight size={20} className="ml-2" />
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </Section>
    );
};

export default DemandDetails;
