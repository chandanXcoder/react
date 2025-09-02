import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Frontend Developer",
    "UI/UX Designer", 
    "Full Stack Developer",
    "React Specialist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-600">
                  JD
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              John Doe
            </span>
          </h1>

          {/* Animated Role */}
          <div className="h-12 mb-6">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-medium">
              I'm a{' '}
              <span className="text-blue-600 font-semibold transition-all duration-500">
                {roles[currentRole]}
              </span>
            </p>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8 leading-relaxed">
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            I combine technical expertise with creative problem-solving to build modern web applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:john@example.com"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a
              href="#about"
              className="inline-block text-gray-400 hover:text-blue-600 transition-colors duration-200"
            >
              <ChevronDown size={32} />
            </a>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-50 blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-xl animate-pulse delay-1000"></div>
    </section>
  );
}