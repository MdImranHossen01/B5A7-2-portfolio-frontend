// src/app/project/homa-room/page.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import projectImage from '../../../../public/Homa_Room.png';

const HomaRoom = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-4">Homa Room Finder</h1>
            <div className="w-full max-w-4xl mx-auto mb-8">
                 <Image 
                    src={projectImage} 
                    alt="Homa Room Finder" 
                    className="rounded-lg shadow-lg w-full"
                    width={800}
                    height={600}
                 />
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Brief Description</h2>
                    <p>
                        Homa Room Finder is a web application that helps users find and book rooms. It features a curated list of properties with detailed information, images, and availability. The platform aims to simplify the process of finding temporary accommodation.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Main Technology Stack</h2>
                    <ul className="list-disc list-inside">
                        <li><strong>Frontend:</strong> React, React Router, Tailwind CSS</li>
                        <li><strong>Backend:</strong> Node.js, Express.js</li>
                        <li><strong>Database:</strong> MongoDB</li>
                        <li><strong>Authentication:</strong> JWT (JSON Web Tokens)</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Project Links</h2>
                    <div className="flex space-x-4">
                         <a href="https://roommate-finder-5c556.web.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-secondary">Live Project</a>
                         <a href="https://github.com/MdImranHossen01/A10-Roomate-Finder" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub Repository (Client)</a>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
                    <p>
                        Implementing the booking logic with date-picking and availability checks was a significant challenge. Ensuring that a room could not be double-booked for the same date range required careful backend validation and state management on the frontend. Securing the booking endpoints with JWT authentication was also a critical part of development.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Potential Improvements & Future Plans</h2>
                    <p>
                        Future enhancements include adding a price filtering feature and an interactive map view to show room locations. I also want to implement a real-time messaging system for users to communicate with property owners. Integrating a secure online payment gateway is the next major milestone for this project.
                    </p>
                </div>

                 <div className="text-center mt-12">
                     <Link href="/#projects" className="btn btn-primary">Back to All Projects</Link>
                 </div>
            </div>
        </div>
    );
};

export default HomaRoom;