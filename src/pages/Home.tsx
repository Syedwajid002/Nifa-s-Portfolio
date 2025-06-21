import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, FileText, Briefcase, PieChart } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { featuredProjects } from '../data/projects';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-28 md:py-40">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-[fadeIn_0.8s_ease-in-out]">
              IT Supervisor Readiness Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-[fadeIn_0.8s_0.2s_ease-in-out_forwards] opacity-0">
              A comprehensive showcase of My qualifications, projects, and skills
              demonstrating readiness for IT management roles.
            </p>
            <div className="flex flex-wrap gap-4 animate-[fadeIn_0.8s_0.4s_ease-in-out_forwards] opacity-0">
              <Link to="/projects" className="btn btn-secondary">
                View Projects <ChevronRight size={20} className="ml-2" />
              </Link>
              <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-900">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">About Me</h2>
              <p className="text-gray-700 mb-6">
                I am an IT professional with a strong background in technology management and a passion for building efficient, scalable systems. My expertise spans across system administration, project management, team leadership, and strategic planning.
              </p>
              <p className="text-gray-700 mb-6">
                This portfolio showcases my qualifications, projects, and professional tools that demonstrate my readiness for IT supervisory and management roles.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Me
              </Link>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-900">Key Qualifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow flex items-start">
                  <Award className="text-blue-900 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">CompTIA A+</h4>
                    <p className="text-sm text-gray-600">Certified IT professional</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow flex items-start">
                  <FileText className="text-blue-900 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">ITIL Foundation</h4>
                    <p className="text-sm text-gray-600">IT service management</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow flex items-start">
                  <Briefcase className="text-blue-900 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">5+ Years Experience</h4>
                    <p className="text-sm text-gray-600">IT support & management</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow flex items-start">
                  <PieChart className="text-blue-900 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Project Management</h4>
                    <p className="text-sm text-gray-600">Agile & traditional methodologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Featured Projects</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Explore some of my most significant work demonstrating IT management and supervisory skills.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Skills Overview</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              The key technical and management skills that qualify me for IT supervision roles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Technical</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Network Administration</li>
                <li>System Security</li>
                <li>Cloud Infrastructure</li>
                <li>Troubleshooting</li>
                <li>Software Deployment</li>
              </ul>
            </div>
            <div className="card p-6 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Management</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Team Leadership</li>
                <li>Performance Evaluation</li>
                <li>Resource Allocation</li>
                <li>Budget Planning</li>
                <li>Strategic Planning</li>
              </ul>
            </div>
            <div className="card p-6 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Project</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Agile Methodologies</li>
                <li>Risk Management</li>
                <li>Gantt Chart Creation</li>
                <li>Milestone Planning</li>
                <li>Resource Scheduling</li>
              </ul>
            </div>
            <div className="card p-6 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Soft Skills</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Communication</li>
                <li>Conflict Resolution</li>
                <li>Coaching & Mentoring</li>
                <li>Time Management</li>
                <li>Problem Solving</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/skills" className="btn btn-primary">
              Explore All Skills
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss IT Management Opportunities?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's connect and discuss how my skills and experience can benefit your organization.
          </p>
          <Link to="/contact" className="btn bg-white text-blue-900 hover:bg-gray-100">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;