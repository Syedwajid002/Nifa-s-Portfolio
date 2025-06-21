import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import SkillCategory from '../components/SkillCategory';
import { technicalSkills, managementSkills, projectSkills, softSkills } from '../data/skills';

const Skills: React.FC = () => {
  const toolExperience = [
    { name: 'JIRA', years: 4 },
    { name: 'Microsoft Office', years: 7 },
    { name: 'Power BI', years: 3 },
    { name: 'Active Directory', years: 5 },
    { name: 'Tableau', years: 2 },
    { name: 'ServiceNow', years: 3 },
    { name: 'VMware', years: 4 },
    { name: 'Azure', years: 3 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            An overview of my technical, management, and soft skills relevant to IT supervision roles.
          </p>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SkillCategory 
                title="Technical Skills" 
                skills={technicalSkills}
                icon="monitor"
                colorClass="bg-blue-600"
              />
              <div className="mt-12">
                <SkillCategory 
                  title="Management Skills" 
                  skills={managementSkills}
                  icon="users"
                  colorClass="bg-teal-600"
                />
              </div>
            </div>
            <div>
              <SkillCategory 
                title="Project Skills" 
                skills={projectSkills}
                icon="clipboard-check"
                colorClass="bg-indigo-600"
              />
              <div className="mt-12">
                <SkillCategory 
                  title="Soft Skills" 
                  skills={softSkills}
                  icon="message-circle"
                  colorClass="bg-purple-600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Experience */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-blue-900 text-center">Tools Experience</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={toolExperience}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Years of Experience', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="years" fill="#1E3A8A" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Key Competencies */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">Key Competencies for IT Supervision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Strategic Planning</h3>
              <p className="text-gray-700 mb-4">
                Developing and implementing IT strategies that align with organizational goals and business objectives.
              </p>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-900 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Resource Management</h3>
              <p className="text-gray-700 mb-4">
                Efficiently allocating and managing IT resources, including personnel, equipment, and budget.
              </p>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-900 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Team Leadership</h3>
              <p className="text-gray-700 mb-4">
                Building, motivating, and mentoring high-performing IT teams to achieve departmental goals.
              </p>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-900 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Problem Solving</h3>
              <p className="text-gray-700 mb-4">
                Identifying and resolving complex technical and operational challenges efficiently.
              </p>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-900 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Performance Management</h3>
              <p className="text-gray-700 mb-4">
                Establishing metrics, monitoring systems, and evaluating team performance against objectives.
              </p>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-900 h-2.5 rounded-full" style={{ width: '88%' }}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Risk Management</h3>
              <p className="text-gray-700 mb-4">
                Identifying, assessing, and mitigating IT risks to ensure operational continuity and security.
              </p>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-900 h-2.5 rounded-full" style={{ width: '82%' }}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="section bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">Professional Development</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-6">
              I am committed to continuous improvement and regularly invest in expanding my skills and knowledge. My approach to professional development includes:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</div>
                <div>
                  <h4 className="font-bold text-blue-900">Ongoing Education</h4>
                  <p className="text-gray-700">Regularly participating in workshops, webinars, and courses to stay current with industry trends and best practices.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</div>
                <div>
                  <h4 className="font-bold text-blue-900">Industry Certifications</h4>
                  <p className="text-gray-700">Pursuing relevant certifications to validate and enhance my expertise in specific areas of IT management.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</div>
                <div>
                  <h4 className="font-bold text-blue-900">Networking</h4>
                  <p className="text-gray-700">Actively participating in professional IT communities and organizations to exchange knowledge and best practices.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</div>
                <div>
                  <h4 className="font-bold text-blue-900">Mentorship</h4>
                  <p className="text-gray-700">Seeking guidance from experienced IT leaders while also mentoring junior professionals to strengthen my leadership abilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;