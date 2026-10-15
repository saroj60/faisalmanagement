import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { MapPin, DollarSign, Users, Calendar, ArrowRight, Trash2 } from 'lucide-react';
import API_BASE_URL from '../config/api';
import SEO from '../components/common/SEO';

const Demands = () => {
    const [demands, setDemands] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    const isAdmin = user?.role === 'admin';
    const [error, setError] = useState(null);

    const fetchDemands = () => {
        fetch(`${API_BASE_URL}/api/demands`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                if (data && Array.isArray(data)) {
                    setDemands(data);
                } else {
                    setDemands([]);
                    setError("Received invalid data from server.");
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch demands", err);
                setError("Failed to load demands. Please try again later.");
                setDemands([]);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchDemands();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this demand?")) return;

        try {
            const response = await fetch(`${API_BASE_URL}/api/demands/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });

            if (response.ok) {
                alert("Demand deleted successfully.");
                fetchDemands(); // Refresh list
            } else {
                alert("Failed to delete demand.");
            }
        } catch (err) {
            console.error(err);
            alert("Error deleting demand.");
        }
    };

    return (
        <>
            <SEO 
                title="Current Overseas Job Demands & Vacancies"
                description="Explore verified overseas jobs and manpower demand letters in Kuwait, UAE, Qatar, Saudi Arabia, Bahrain, and Malaysia. Apply for skilled and professional roles today."
                keywords="Overseas Job Demands Nepal, Gulf Job Vacancies Kathmandu, Kuwait Jobs for Nepalese, Manpower Demand Letters Nepal"
                canonicalPath="/demands"
            />
            <div className="bg-primary text-white py-12 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6">Current Demands</h1>
                    <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
                        Explore opportunities across the globe.
                    </p>
                </div>
            </div>

            <Section>
                <div className="max-w-7xl mx-auto">
                    {loading ? (
                        <p className="text-center">Loading demands...</p>
                    ) : error ? (
                        <div className="text-center py-10">
                            <h3 className="text-2xl text-red-600 mb-2">Oops! Something went wrong.</h3>
                            <p className="text-gray-500">{error}</p>
                        </div>
                    ) : demands.length === 0 ? (
                        <div className="text-center py-10">
                            <h3 className="text-2xl text-gray-600">No active demands at the moment.</h3>
                            <p className="text-gray-500 mt-2">Please check back later.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {demands.map((demand) => (
                                <Card key={demand.id} className="p-5 sm:p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
                                    <div className="mb-4">
                                        <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 line-clamp-2">{demand.title}</h3>
                                        <div className="flex items-center text-gray-500 mb-2">
                                            <MapPin size={16} className="mr-2" /> {demand.country}
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-6 flex-grow">
                                        <div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                                            <span className="flex items-center text-gray-600"><DollarSign size={16} className="mr-2 text-green-600" /> Salary</span>
                                            <span className="font-semibold">{demand.salary}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                                            <span className="flex items-center text-gray-600"><Users size={16} className="mr-2 text-blue-600" /> Workers Needed</span>
                                            <span className="font-semibold">{demand.workers}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                                            <span className="flex items-center text-gray-600"><Calendar size={16} className="mr-2 text-orange-600" /> Start Date</span>
                                            <span className="font-semibold">{demand.startDate}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="flex items-center text-gray-600"><Calendar size={16} className="mr-2 text-red-600" /> End Date</span>
                                            <span className="font-semibold">{demand.endDate}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 mt-auto">
                                        <Link to={`/contact`} className="flex-1">
                                            <Button className="w-full flex items-center justify-center group">
                                                Apply Now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                        {isAdmin && (
                                            <button
                                                onClick={() => handleDelete(demand.id)}
                                                className="bg-red-50 text-red-600 p-3 rounded-md hover:bg-red-100 transition-colors"
                                                title="Delete Demand"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        )}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </Section>
        </>
    );
};

export default Demands;
