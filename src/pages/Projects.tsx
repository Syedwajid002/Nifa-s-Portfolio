import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { allProjects } from '../data/projects';
import { Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A collection of my work demonstrating IT supervision and management capabilities.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-gray-50">
        <div className="container">
          {/* Filter */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 sm:mb-0">My Projects</h2>
            <div className="flex items-center bg-white rounded-lg shadow-sm p-1">
              <Filter size={20} className="text-gray-500 ml-2" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="p-2 bg-transparent border-none focus:ring-0 text-gray-700"
              >
                <option value="all">All Projects</option>
                <option value="management">Management</option>
                <option value="technical">Technical</option>
                <option value="documentation">Documentation</option>
              </select>
            </div>
          </div>

          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found matching the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Approach */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">My Project Approach</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">1. Requirements Analysis</h3>
                <p className="text-gray-700">
                  I begin every project by thoroughly understanding the requirements and objectives. This involves stakeholder interviews, documentation review, and defining clear success criteria.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">2. Strategic Planning</h3>
                <p className="text-gray-700">
                  Using tools like Gantt charts and work breakdown structures, I develop comprehensive project plans that outline tasks, timelines, dependencies, and resource requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">3. Team Leadership</h3>
                <p className="text-gray-700">
                  I assemble and lead project teams, assigning roles based on individual strengths, facilitating collaboration, and ensuring clear communication throughout the project lifecycle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">4. Implementation & Quality Assurance</h3>
                <p className="text-gray-700">
                  I oversee the execution of project tasks, monitor progress against milestones, conduct regular quality checks, and implement testing protocols to ensure deliverables meet requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">5. Documentation & Knowledge Transfer</h3>
                <p className="text-gray-700">
                  I create comprehensive documentation and facilitate knowledge transfer sessions to ensure long-term project sustainability and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;