import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <Image 
            src="https://picsum.photos/seed/profile/600/600.jpg" 
            alt="Profile" 
            className="rounded-lg shadow-lg w-full"
            fill
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 primary-text">John Doe</h2>
          <p className="text-lg text-gray-600 mb-4">
            Full Stack Developer
          </p>
          <p className="text-gray-700 mb-6">
            I m a passionate full stack developer with over 5 years of experience in creating web applications. 
            I love working with modern technologies and solving complex problems.
          </p>
          <p className="text-gray-700 mb-6">
            My expertise includes React, Next.js, Node.js, Express, MongoDB, and PostgreSQL. 
            I m always eager to learn new technologies and improve my skills.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md card-shadow">
            <h3 className="text-xl font-bold mb-4 primary-text">Frontend</h3>
            <ul className="space-y-2 text-gray-700">
              <li>HTML/CSS</li>
              <li>JavaScript/TypeScript</li>
              <li>React/Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md card-shadow">
            <h3 className="text-xl font-bold mb-4 primary-text">Backend</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Node.js/Express</li>
              <li>MongoDB/Mongoose</li>
              <li>PostgreSQL/Prisma</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md card-shadow">
            <h3 className="text-xl font-bold mb-4 primary-text">Tools</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Git/GitHub</li>
              <li>VS Code</li>
              <li>Docker</li>
              <li>CI/CD</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md card-shadow">
            <h3 className="text-xl font-bold mb-4 primary-text">Other</h3>
            <ul className="space-y-2 text-gray-700">
              <li>UI/UX Design</li>
              <li>Agile/Scrum</li>
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md card-shadow">
            <h3 className="text-xl font-bold mb-2 primary-text">Senior Full Stack Developer</h3>
            <p className="text-gray-600 mb-4">Tech Company | 2020 - Present</p>
            <p className="text-gray-700">
              Led development of multiple web applications using React, Node.js, and MongoDB. 
              Improved application performance by 40% through optimization techniques.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md card-shadow">
            <h3 className="text-xl font-bold mb-2 primary-text">Full Stack Developer</h3>
            <p className="text-gray-600 mb-4">Digital Agency | 2018 - 2020</p>
            <p className="text-gray-700">
              Developed and maintained client websites using various technologies. 
              Collaborated with design team to implement responsive and user-friendly interfaces.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md card-shadow">
            <h3 className="text-xl font-bold mb-2 primary-text">Junior Web Developer</h3>
            <p className="text-gray-600 mb-4">Startup | 2017 - 2018</p>
            <p className="text-gray-700">
              Assisted in the development of web applications and gained experience in frontend and backend technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}