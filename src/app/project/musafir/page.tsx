// src/app/project/musafir/page.tsx

import React from 'react';
import projectImage from '../../../../public/musafir.png';
import Image from 'next/image';
import Link from 'next/link';

const MusafirTraveller = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-4">Musafir Traveller</h1>
            <div className="w-full max-w-4xl mx-auto mb-8">
                 <Image 
                    src={projectImage} 
                    alt="Musafir Traveller" 
                    className="rounded-lg shadow-lg w-full"
                    width={800}
                    height={600}
                 />
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Brief Description</h2>
                    <p>
                        Musafir Traveller is a full-stack MERN application designed for travel enthusiasts. It serves as a comprehensive platform where users can discover tourist spots, view details, and manage their own added locations. The application focuses on providing a seamless and interactive user experience.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Main Technology Stack</h2>
                    <ul className="list-disc list-inside">
                        <li><strong>Frontend:</strong> React, React Router, Tailwind CSS, DaisyUI</li>
                        <li><strong>Backend:</strong> Node.js, Express.js</li>
                        <li><strong>Database:</strong> MongoDB</li>
                        <li><strong>Authentication:</strong> Firebase Authentication</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Project Links</h2>
                    <div className="flex space-x-4">
                         <a href="https://marvelous-gaufre-bd3a39.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-secondary">Live Project</a>
                         <a href="https://github.com/MdImranHossen01/A12-Musafir-Traveller" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub Repository (Client)</a>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
                    <p>
                        One of the main challenges was implementing secure and persistent user authentication with Firebase across the MERN stack. Another challenge was managing the state of tourist spots efficiently, ensuring real-time updates when a user adds or modifies a location without needing a full page refresh.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Potential Improvements & Future Plans</h2>
                    <p>
                        Future plans include integrating a booking system for hotels and flights via third-party APIs. I also aim to add a user review and rating system for each tourist spot and implement an admin dashboard for content management and user oversight.
                    </p>
                </div>

                 <div className="text-center mt-12">
                     <Link href="/#projects" className="btn btn-primary">Back to All Projects</Link>
                 </div>
            </div>
        </div>
    );
};

export default MusafirTraveller;