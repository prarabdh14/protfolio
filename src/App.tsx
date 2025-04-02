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
            title: 'Senior Full Stack Developer',
            company: 'Tech Corp',
            period: '2020 - Present',
            description: 'Led development of multiple web applications using React and Node.js.'
          },
          {
            title: 'Full Stack Developer',
            company: 'StartUp Inc',
            period: '2018 - 2020',
            description: 'Developed and maintained various web applications.'
          }
        ].map((job, index) => (
          <div
            key={index}
            className="bg-black/30 backdrop-blur-sm rounded-lg p-6 sm:p-8 transition-transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-2 text-red-400">{job.title}</h3>
            <p className="text-gray-400 mb-2">{job.company}</p>
            <p className="text-sm text-gray-500 mb-4">{job.period}</p>
            <p className="text-gray-300">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <div className="min-h-screen bg-transparent p-8">
    <div className="max-w-6xl mx-auto mt-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
          Projects
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'E-commerce Platform',
            description: 'A full-featured e-commerce platform built with React and Node.js.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80'
          },
          {
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates.',
            image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80'
          },
          {
            title: 'Social Media Dashboard',
            description: 'A dashboard for managing multiple social media accounts.',
            image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80'
          }
        ].map((project, index) => (
          <div
            key={index}
            className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden transition-transform hover:-translate-y-1"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-400">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
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
    <div className="max-w-4xl mx-auto mt-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
          Education
        </span>
      </h2>
      <div className="space-y-6">
        {[
          {
            degree: "Bachelor of Technology",
            field: "Computer Science",
            school: "Your University Name",
            period: "2020 - 2024",
            achievements: [
              "CGPA: X.XX/10",
              "Member of Computer Science Society",
              "Won XYZ Hackathon"
            ]
          },
          // Add more education entries if needed
        ].map((edu, index) => (
          <div key={index} className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-400">{edu.degree}</h3>
            <p className="text-lg text-gray-300">{edu.field}</p>
            <p className="text-gray-400">{edu.school}</p>
            <p className="text-sm text-gray-500 mb-4">{edu.period}</p>
            <ul className="list-disc list-inside space-y-2">
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