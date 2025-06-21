import React from 'react';
import { CheckCircle, Briefcase, GraduationCap, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Learn about my background, experience, and passion for IT management and supervision.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional headshot"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Nifa Naushadbhai</h2>
              <p className="text-gray-700 mb-6">
                I am an IT professional with over 5 years of experience in system administration, network management, and team leadership. My goal is to leverage my technical expertise and management skills to lead IT teams in delivering efficient and innovative solutions.
              </p>
              <p className="text-gray-700 mb-6">
                Throughout my career, I have demonstrated a strong ability to bridge the gap between technical requirements and business objectives, ensuring that IT initiatives align with organizational goals and deliver measurable value.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  <span>Problem Solver</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  <span>Team Leader</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  <span>Strategic Thinker</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  <span>Technical Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-blue-900 text-center">Professional Experience</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="relative pl-10 md:pl-0">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-200"></div>

              <div className="md:flex items-center relative">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -ml-0.5 w-6 h-6 rounded-full bg-blue-900 z-10"></div>

                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-blue-900">IT Support Intern</h3>
                  <p className="text-gray-600">Royal Cyber Inc</p>
                  <p className="text-gray-500">Jul 2024 - Jan 2025</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md md:w-1/2 md:ml-12">
                  <Briefcase className="text-blue-900 mb-4 inline-block md:hidden" />
                  <p className="text-gray-700">
                    Performed initial troubleshooting for basic network issues, system alerts, and user connectivity complaints.Created and managed incident tickets using ServiceNow, including documenting resolution steps and escalating
                    unresolved issues to L2/L3.Logged and responded to incoming issues through ServiceNow Incident Management, maintaining SLA timelines
                    and proper ticket categorization.
                  </p>
                </div>
              </div>




            </div>
          </div>
        </div>
      </section>

      {/* Education and Certifications */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-blue-900 flex items-center">
                <GraduationCap className="mr-3" /> Education
              </h2>
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Master of Science in Information Technology</h3>
                  <p className="text-gray-600 mb-2">University of Technology</p>
                  <p className="text-gray-500">2014 - 2016</p>
                  <p className="mt-4 text-gray-700">
                    Specialized in IT Management and Information Security. Thesis on "Optimizing IT Resource Allocation in Mid-Size Enterprises."
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Bachelor of Science in Computer Science</h3>
                  <p className="text-gray-600 mb-2">State University</p>
                  <p className="text-gray-500">2010 - 2014</p>
                  <p className="mt-4 text-gray-700">
                    Graduated with honors. Coursework included network infrastructure, database management, and software development.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 text-blue-900 flex items-center">
                <Award className="mr-3" /> Certifications
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">CompTIA A+</h3>
                  <p className="text-gray-600">Certified IT professional</p>
                  <p className="text-gray-500">2020</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">ITIL Foundation</h3>
                  <p className="text-gray-600">IT service management</p>
                  <p className="text-gray-500">2019</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Cisco Certified Network Associate (CCNA)</h3>
                  <p className="text-gray-600">Network administration</p>
                  <p className="text-gray-500">2018</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Microsoft Certified: Azure Administrator</h3>
                  <p className="text-gray-600">Cloud infrastructure management</p>
                  <p className="text-gray-500">2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Statement */}
      <section className="section bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">Personal Statement</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-6">
              As an IT professional with a passion for leadership, I am committed to bridging the gap between technical expertise and business objectives. I believe that effective IT management is about more than just maintaining systems—it's about leveraging technology to drive innovation and create value.
            </p>
            <p className="text-gray-700 mb-6">
              Throughout my career, I have focused on developing both my technical skills and my ability to lead and inspire teams. I understand that successful IT supervision requires a balance of technical knowledge, strategic thinking, and interpersonal skills.
            </p>
            <p className="text-gray-700">
              My goal is to continue growing as an IT leader, taking on increasingly complex challenges and helping organizations harness the full potential of their technology investments. I am excited about the opportunity to apply my skills and experience in a supervisory role where I can make a meaningful impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;