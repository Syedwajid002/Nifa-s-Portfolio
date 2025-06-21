import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card group overflow-hidden h-full flex flex-col">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-900 rounded-full">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-900 font-medium hover:underline mt-auto"
          >
            View Project <ArrowRight size={16} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;