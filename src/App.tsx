import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';

// Pages
const About = () => (
  <div className="min-h-screen bg-transparent p-8">
    <div className="max-w-4xl mx-auto mt-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
          About Me
        </span>
      </h2>
      <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 sm:p-8 text-white">
        <p className="text-gray-300 mb-6">
          I'm a passionate Full Stack Developer with over 5 years of experience in building web applications.
          I specialize in React, Node.js, and modern web technologies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-400">Skills</h3>
            <div className="space-y-2">
              {['React', 'Node.js', 'TypeScript', 'Python', 'AWS'].map(skill => (
                <div key={skill} className="bg-red-500/20 backdrop-blur-sm rounded-full px-4 py-2">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-400">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Bachelor in Computer Science</h4>
                <p className="text-gray-400">University of Technology</p>
                <p className="text-sm text-gray-500">2015 - 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Experience = () => (
  <div className="min-h-screen bg-transparent p-8">
    <div className="max-w-4xl mx-auto mt-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
          Experience
        </span>
      </h2>
      <div className="space-y-8">
        {[
         
          {
            title: 'Prompt Verse',
            company: 'Prompt Engineering Competition',
            period: 'November 2024',
            description: 'Designed over 50 tailored prompts resulting in improved task completion times by approximately 30%, improving overall team engagement in creative brainstorming activities by an impressive 40%.',
            description2: 'Bagged position in Top 10 amongst 500+ candidates.'
          },
          {
            title: 'TCS NQT',
            company: 'Examination',
            period: 'November 2024',
            description: 'Scored 100% in Hands-On Coding Assessment 98% in Reasoning, 80% in Advance Quantative Reasoning, 65% in Numerical and 64% in Verbal.',
            description2: 'Achieved an overall score of 81.39%.'
          },
          {
            title: 'Providence Leap Ideathon',
            company: 'Ideathon',
            period: 'October 2024',
            description: 'Developed a technical solution to address the challenge of providing equitable healthcare to all strata of society in collaboration with a team of 4.',
            description2: 'Stood out as a Semi-Finalist i.e. in the top 20% of 5500+ participants.'
          }
        ].map((job, index) => (
          <div
            key={index}
            className="bg-black/30 backdrop-blur-sm rounded-lg p-6 sm:p-8 transition-transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-2 text-red-400">{job.title}</h3>
            <p className="text-gray-400 mb-2">{job.company}</p>
            <p className="text-sm text-gray-500 mb-4">{job.period}</p>
            <p className="text-gray-300 mb-2">{job.description}</p>
            {job.description2 && (
              <p className="text-gray-300">{job.description2}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <div className="min-h-screen bg-transparent p-8">
    <div className="max-w-4xl mx-auto mt-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
          Projects
        </span>
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {[
          {
            title: 'EquiHealth',
            description: 'A real-time healthcare platform enabling instant doctor consultations, live health tracking, and AI-driven health insights. Built with a scalable backend (Hono.js, Cloudflare Workers, Flask) and an engaging frontend (React.js, Tailwind CSS, Framer Motion), it enhances user experience and retention. Integrated AI models provide predictive health analytics and personalized patient insights with high accuracy.',
            video: '/EquiHealth.mp4'
          }
        ].map((project, index) => (
          <div
            key={index}
            className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden transition-transform hover:-translate-y-1"
          >
            <div className="relative w-full h-[400px]">
              <video
                className="w-full h-full object-contain bg-black/50"
                autoPlay
                muted
                loop
                playsInline
                controls
                onError={(e) => console.error("Video loading error:", e)}
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-400">{project.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Skills = () => (
  <div className="min-h-screen bg-transparent p-8">
    <div className="max-w-4xl mx-auto mt-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
          Skills
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            category: "Programming Languages",
            skills: ["Python", "JavaScript", "Java", "C", "C++"]
          },
          {
            category: "Web Technologies",
            skills: ["React.js", "Node.js", "HTML5", "CSS3", "TypeScript"]
          },
          {
            category: "Tools & Frameworks",
            skills: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL"]
          },
          {
            category: "Other Skills",
            skills: ["Problem Solving", "Team Leadership", "Agile Development", "System Design"]
          }
        ].map((category, index) => (
          <div key={index} className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-red-400">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-red-500/20 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Education = () => (
  <div className="min-h-screen bg-transparent p-8">
    <div className="max-w-6xl mx-auto mt-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
          Education
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            degree: "Bachelor of Technology",
            field: "Computer Science and Engineering",
            school: "Vellore Institute of Technology, Bhopal",
            period: "2020 - 2024",
            achievements: [
              "CGPA: 8.71/10",
              "Member of Computer Science Society",
              "Participated in various hackathons and coding competitions"
            ]
          },
          {
            degree: "Higher Secondary (12th)",
            field: "Science with Computer Science",
            school: "Kendriya Vidyalaya No.1, Bhopal",
            period: "2019 - 2020",
            achievements: [
              "Percentage: 89.6%",
              "School Head Boy",
              "Active participant in cultural activities"
            ]
          }
        ].map((edu, index) => (
          <div 
            key={index} 
            className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 ${index === 1 ? 'md:text-right' : ''}`}
          >
            <h3 className="text-xl font-semibold text-red-400">{edu.degree}</h3>
            <p className="text-lg text-gray-300">{edu.field}</p>
            <p className="text-gray-400">{edu.school}</p>
            <p className="text-sm text-gray-500 mb-4">{edu.period}</p>
            <ul className={`space-y-2 ${index === 1 ? 'list-none' : 'list-disc list-inside'}`}>
              {edu.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-300">{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Leadership = () => (
  <div className="min-h-screen bg-transparent p-8">
    <div className="max-w-4xl mx-auto mt-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
          Leadership
        </span>
      </h2>
      <div className="space-y-6">
        {[
          {
            position: "Technical Lead",
            organization: "Organization Name",
            period: "2023 - Present",
            responsibilities: [
              "Led a team of X developers",
              "Managed project deliverables",
              "Mentored junior developers"
            ]
          },
          // Add more leadership experiences
        ].map((role, index) => (
          <div key={index} className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-400">{role.position}</h3>
            <p className="text-gray-400">{role.organization}</p>
            <p className="text-sm text-gray-500 mb-4">{role.period}</p>
            <ul className="list-disc list-inside space-y-2">
              {role.responsibilities.map((resp, i) => (
                <li key={i} className="text-gray-300">{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ExtraCurricular = () => (
  <div className="min-h-screen bg-transparent p-8">
    <div className="max-w-4xl mx-auto mt-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
          Extra-Curricular Activities
        </span>
      </h2>
      <div className="space-y-6">
        {[
          {
            activity: "Competitive Programming",
            details: [
              "Participated in XYZ competitions",
              "Ranked ABC in contest",
              "Solved N+ problems"
            ]
          },
          // Add more activities
        ].map((activity, index) => (
          <div key={index} className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-400 mb-4">{activity.activity}</h3>
            <ul className="list-disc list-inside space-y-2">
              {activity.details.map((detail, i) => (
                <li key={i} className="text-gray-300">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Home Page Component
const Home = () => (
  <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black/30">
    <div className="max-w-7xl mx-auto text-center">
      <div className="space-y-12 mt-24">
        {/* Name and Title with Animation */}
        <div className="space-y-6 animate-fadeIn">
          <h1 className="text-4xl sm:text-6xl font-bold">
            <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
              Hi, I'm Prarabdh Atrey!
            </span>
          </h1>
        </div>

        {/* Profile Image with Animation */}
        <div className="relative inline-block group">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-full mx-auto border-4 border-red-500 shadow-lg transition-transform duration-500 group-hover:scale-105 object-cover"
          />
        </div>

        {/* Title and Description */}
        <div className="space-y-6 animate-fadeIn">
          <p className="text-xl sm:text-4xl text-gray-300">
            Software Developer
          </p>
          <p className="text-gray-300 max-w-4.5xl mx-auto text-lg">
            I'm a tech enthusiast passionate about AI, full-stack development and playing wiht new technologies.<br></br> 
            I love solving complex problems through code, whether it's building intelligent systems or creating innovative solutions.<br></br> 
            With a strong foundation in Python, JavaScript, C, and Java, I enjoy turning ideas into reality.<br></br>
            Always eager to learn, build, and push boundaries! 
          </p>
        </div>

        {/* Social Links with Hover Effects */}
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/prarabdh14" 
            className="p-3 rounded-full bg-red-500/20 hover:bg-red-500/40 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://www.linkedin.com/in/prarabdh-atrey-498ab9255/" 
            className="p-3 rounded-full bg-red-500/20 hover:bg-red-500/40 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="mailto:prarabdhatrey@gmail.com" 
            className="p-3 rounded-full bg-red-500/20 hover:bg-red-500/40 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const createParticles = () => {
    const particleCount = Math.min(window.innerWidth / 10, 150);
    console.log(`Creating ${particleCount} particles`);
    for (let i = 0; i < particleCount; i++) {
      // Particle creation logic...
    }
  };

  const animate = () => {
    console.log("Animating particles");
    // Animation logic...
  };

  return (
    <Router>
      <ParticleBackground />
      <div className="relative min-h-screen bg-transparent text-white">
        <nav className="fixed w-full bg-black/50 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <Link to="/" className="text-xl font-bold bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
                  Prarabdh Atrey
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-red-500/20 hover:text-white transition-colors">
                    Home
                  </Link>
                  <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-red-500/20 hover:text-white transition-colors">
                    About
                  </Link>
                  <Link to="/skills" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-red-500/20 hover:text-white transition-colors">
                    Skills
                  </Link>
                  <Link to="/education" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-red-500/20 hover:text-white transition-colors">
                    Education
                  </Link>
                  <Link to="/experience" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-red-500/20 hover:text-white transition-colors">
                    Experience
                  </Link>
                  <Link to="/leadership" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-red-500/20 hover:text-white transition-colors">
                    Leadership
                  </Link>
                  <Link to="/extra-curricular" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-red-500/20 hover:text-white transition-colors">
                    Extra-Curricular
                  </Link>
                  <Link to="/projects" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-red-500/20 hover:text-white transition-colors">
                    Projects
                  </Link>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-red-500/20"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-sm">
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-red-500/20 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-red-500/20 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/skills"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-red-500/20 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </Link>
                <Link
                  to="/education"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-red-500/20 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Education
                </Link>
                <Link
                  to="/experience"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-red-500/20 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </Link>
                <Link
                  to="/leadership"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-red-500/20 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Leadership
                </Link>
                <Link
                  to="/extra-curricular"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-red-500/20 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Extra-Curricular
                </Link>
                <Link
                  to="/projects"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-red-500/20 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/extra-curricular" element={<ExtraCurricular />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;