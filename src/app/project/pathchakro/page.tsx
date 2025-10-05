// src/app/project/pathchakro/page.tsx

import React from 'react';
import projectImage from '../../../../public/Pathchakro.png';
import Image from 'next/image';
import Link from 'next/link';

const Pathchakro = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-4">Pathchakro - Library Management</h1>
            <div className="w-full max-w-4xl mx-auto mb-8">
                 <Image 
                    src={projectImage} 
                    alt="Pathchakro" 
                    className="rounded-lg shadow-lg w-full"
                    width={800}
                    height={600}
                 />
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Brief Description</h2>
                    <p>
                        Pathchakro is a digital library management system. It allows users to browse book categories, view available books, and borrow them. Users must be logged in to borrow a book, and the system tracks borrowed books and return dates.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Main Technology Stack</h2>
                    <ul className="list-disc list-inside">
                        <li><strong>Frontend:</strong> React, React Router, Tailwind CSS</li>
                        <li><strong>Backend:</strong> Node.js, Express.js</li>
                        <li><strong>Database:</strong> MongoDB</li>
                        <li><strong>Authentication:</strong> Firebase (for user login and protected routes)</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Project Links</h2>
                    <div className="flex space-x-4">
                         <a href="https://pathchakro-a6827.web.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-secondary">Live Project</a>
                         <a href="https://github.com/MdImranHossen01/A11-Pathchakro.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub Repository (Client)</a>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
                    <p>
                        The primary challenge was managing the book quantity state. When a user borrows a book, its quantity must decrease, and it should not be borrowable if the quantity is zero. Implementing the return functionality to correctly update the quantity and users record was also complex. Ensuring that users cannot borrow a book they already have was another key logic puzzle.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Potential Improvements & Future Plans</h2>
                    <p>
                        I plan to add an automatic email notification system to remind users about upcoming return dates. A feature for users to add book reviews and ratings is also on the roadmap. For administrators, a full-featured dashboard to add, update, and delete book entries would be a valuable addition.
                    </p>
                </div>

                 <div className="text-center mt-12">
                     <Link href="/#projects" className="btn btn-primary">Back to All Projects</Link>
                 </div>
            </div>
        </div>
    );
};

export default Pathchakro;