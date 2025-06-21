import React from 'react';
import { Monitor, Users, ClipboardCheck, MessageCircle } from 'lucide-react';

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  icon: string;
  colorClass: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon, colorClass }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'monitor':
        return <Monitor size={24} />;
      case 'users':
        return <Users size={24} />;
      case 'clipboard-check':
        return <ClipboardCheck size={24} />;
      case 'message-circle':
        return <MessageCircle size={24} />;
      default:
        return <Monitor size={24} />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <div className={`w-10 h-10 rounded-full ${colorClass} text-white flex items-center justify-center mr-3`}>
          {renderIcon()}
        </div>
        <h3 className="text-2xl font-bold text-blue-900">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-700">{skill.name}</span>
              <span className="text-sm text-gray-600">{skill.proficiency}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${colorClass}`}
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;