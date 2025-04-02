import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

// Pages
const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-gray-900 p-8">
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
                <div key={skill} className="bg-red-500/20 rounded-full px-4 py-2">
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
  <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-gray-900 p-8">
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
  <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-gray-900 p-8">
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

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-gray-900 text-white">
        {/* Navigation */}
        <nav className="fixed w-full bg-black/50 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <Link to="/" className="text-xl font-bold bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
                  Portfolio
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-red-500/20 hover:text-white transition-colors">
                    About
                  </Link>
                  <Link to="/experience" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-red-500/20 hover:text-white transition-colors">
                    Experience
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
                  to="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-red-500/20 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/experience"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-red-500/20 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
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
          <Route path="/" element={
            <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto text-center">
                <div className="relative inline-block">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                    alt="Profile"
                    className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-red-500"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-white opacity-20 animate-pulse"></div>
                </div>
                
                <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
                    John Doe
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 mb-8">
                  Full Stack Developer
                </p>
                <p className="text-gray-300 max-w-2xl mx-auto mb-12">
                  Passionate Full Stack Developer with expertise in building modern web applications.
                  Specialized in React, Node.js, and cloud technologies.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/40 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/40 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/40 transition-colors">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;