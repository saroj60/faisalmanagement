import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Briefcase, Building, ChevronLeft, CheckCircle } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import TextArea from '../components/ui/TextArea';

// This data should ideally come from a shared source or API
const jobs = [
    {
        id: 1,
        title: 'Front Desk Officer',
        location: 'Dubai, UAE',
        type: 'Full-time',
        salary: 'AED 3500 - AED 4500',
        company: 'Luxury Hotel Group',
        posted: '2 days ago',
        description: 'We are looking for a professional Front Desk Officer to manage our reception area. You will act as the "face" of our company and ensure visitors receive a heartwarming welcome.',
        requirements: [
            'Proven work experience as a Receptionist, Front Office Representative or similar role',
            'Proficiency in Microsoft Office Suite',
            'Hands-on experience with office equipment (e.g. fax machines and printers)',
            'Professional attitude and appearance',
            'Solid written and verbal communication skills',
            'Ability to be resourceful and proactive when issues arise'
        ],
        benefits: ['Accommodation provided', 'Transportation', 'Medical Insurance', 'Annual Ticket']
    },
    {
        id: 2,
        title: 'Office Administrator',
        location: 'Riyadh, Saudi Arabia',
        type: 'Contract',
        salary: 'SAR 4000 - SAR 5000',
        company: 'Corporate Solutions',
        posted: '1 week ago',
        description: 'Organize and coordinate administration duties and office procedures. Your role is to create and maintain a pleasant work environment, ensuring high levels of organizational effectiveness, communication and safety.',
        requirements: [
            'Proven experience as an Office Manager, Front Office Manager or Administrative Assistant',
            'Knowledge of office administrator responsibilities, systems and procedures',
            'Proficiency in MS Office (MS Excel and MS Outlook, in particular)',
            'Excellent time management skills and ability to multi-task and prioritize work',
            'Attention to detail and problem solving skills'
        ],
        benefits: ['Housing Allowance', 'Transportation', 'Health Insurance']
    },
    {
        id: 3,
        title: 'Civil Engineer',
        location: 'Doha, Qatar',
        type: 'Full-time',
        salary: 'QAR 8000 - QAR 12000',
        company: 'BuildRight Construction',
        posted: '3 days ago',
        description: 'We are seeking a Civil Engineer to plan, design and oversee construction and maintenance of building structures and infrastructure.',
        requirements: [
            'Bachelor degree in Civil Engineering',
            'Minimum 3 years of experience',
            'Project management capability',
            'AutoCAD proficiency'
        ],
        benefits: ['Accommodation', 'Transport', 'Food Allowance']
    },
    {
        id: 4,
        title: 'Heavy Vehicle Driver',
        location: 'Kuwait City, Kuwait',
        type: 'Contract',
        salary: 'KWD 180 - KWD 250',
        company: 'Logistics Co.',
        posted: '5 days ago',
        description: 'Transport goods from source to destination safely and timely.',
        requirements: [
            'Valid Heavy Vehicle Driving License',
            'Clean driving record',
            'Minimum 2 years experience',
            'Basic mechanical knowledge'
        ],
        benefits: ['Accommodation', 'Overtime', 'Medical']
    },
];

const JobDetails = () => {
    const { id } = useParams();
    const job = jobs.find(j => j.id === parseInt(id));

    if (!job) {
        return (
            <Section>
                <div className="text-center py-20">
                    <h2 className="text-3xl font-bold text-gray-800">Job Not Found</h2>
                    <Link to="/jobs">
                        <Button variant="outline" className="mt-4">Back to Jobs</Button>
                    </Link>
                </div>
            </Section>
        );
    }

    return (
        <>
            <div className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/jobs" className="flex items-center text-gray-600 hover:text-primary mb-6 transition-colors">
                        <ChevronLeft size={20} className="mr-1" /> Back to Jobs
                    </Link>

                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-primary mb-2">{job.title}</h1>
                                <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                                    <span className="flex items-center"><Building size={16} className="mr-1" /> {job.company}</span>
                                    <span className="flex items-center"><MapPin size={16} className="mr-1" /> {job.location}</span>
                                    <span className="flex items-center"><Briefcase size={16} className="mr-1" /> {job.type}</span>
                                    <span className="flex items-center"><Clock size={16} className="mr-1" /> Posted {job.posted}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-green-50 text-green-700 font-bold px-4 py-2 rounded-lg border border-green-100 flex items-center">
                                    <DollarSign size={18} className="mr-1" /> {job.salary}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Section className="pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Job Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-primary mb-4">Job Description</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {job.description}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-primary mb-4">Key Requirements</h3>
                            <ul className="space-y-2">
                                {job.requirements.map((req, idx) => (
                                    <li key={idx} className="flex items-start text-gray-600">
                                        <CheckCircle size={18} className="mr-3 text-green-500 mt-1 flex-shrink-0" />
                                        <span>{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-primary mb-4">Benefits</h3>
                            <div className="flex flex-wrap gap-3">
                                {job.benefits.map((benefit, idx) => (
                                    <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {benefit}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Application Form */}
                    <div className="lg:col-span-1">
                        <Card className="p-6 sticky top-24 border border-gray-100 shadow-lg">
                            <h3 className="text-xl font-bold text-primary mb-4">Apply for this Job</h3>
                            <form className="space-y-4">
                                <Input label="Full Name" placeholder="Enter your full name" />
                                <Input label="Email Address" type="email" placeholder="name@example.com" />
                                <Input label="Phone Number" placeholder="+977 9800000000" />
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">Upload CV / Resume</label>
                                    <input type="file" className="block w-full text-sm text-gray-500
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-primary file:text-white
                                        hover:file:bg-opacity-90
                                    "/>
                                </div>
                                <TextArea label="Cover Letter (Optional)" placeholder="Tell us why you are suitable..." rows={3} />
                                <Button className="w-full" size="lg">Submit Application</Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default JobDetails;
