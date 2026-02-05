import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import TextArea from '../components/ui/TextArea';

const JobSeekers = () => {
    return (
        <>
            <div className="bg-primary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Apply for a Job</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Join our database of skilled professionals.
                    </p>
                </div>
            </div>

            <Section>
                <div className="max-w-3xl mx-auto">
                    <Card className="p-8 border border-gray-100 shadow-lg">
                        <form className="space-y-6" action="https://formsubmit.co/faisalmanagementservicess@gmail.com" method="POST">
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_subject" value="New Job Application from Website" />
                            <input type="hidden" name="_next" value="http://localhost:5173/jobs" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="Full Name" name="full_name" placeholder="Enter your full name" required />
                                <Input label="Email Address" type="email" name="email" placeholder="name@example.com" required />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="Phone Number" name="phone" placeholder="+977 9800000000" required />
                                <Input label="Qualification" name="qualification" placeholder="e.g. Bachelor's in Management" required />
                            </div>

                            <Input label="Desired Position" name="position" placeholder="e.g. Front Desk Officer, Accountant" required />

                            <Input label="Experience (Years)" name="experience" placeholder="e.g. 2 years" required />

                            <TextArea label="Additional Information" name="additional_info" placeholder="Briefly describe your skills and experience..." rows={4} />

                            <Button size="lg" className="w-full" type="submit">Submit Application</Button>
                        </form>
                    </Card>
                </div>
            </Section>
        </>
    );
};

export default JobSeekers;
