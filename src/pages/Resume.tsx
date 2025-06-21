import React from 'react';
import { Download, FileText, Briefcase, GraduationCap, Award, User } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resume</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            My professional background, experience, and qualifications for IT management roles.
          </p>
        </div>
      </section>

      {/* Resume Actions */}
      <section className="py-8 bg-white border-b">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-900">Nifa Naushadbhai - IT Manager</h2>
            <p className="text-gray-600">San Francisco, CA | Nifa2025@gmail.com | (555) 123-4567</p>
          </div>
          <a
            href="/nifa.pdf"
            download
            className="btn btn-primary flex items-center"
          // onClick={(e) => {
          //   e.preventDefault();
          //   alert('In a real application, this would download the PDF version of the resume.');
          // }}
          >
            <Download size={20} className="mr-2" /> Download PDF
          </a>
        </div>
      </section>

      {/* Resume Content */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="bg-white p-8 rounded-lg shadow-md">
            {/* Professional Summary */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                <User className="mr-3" /> Professional Summary
              </h2>
              <p className="text-gray-700">
                IT professional with over 5 years of experience in system administration, network management, and team leadership. Demonstrated success in implementing efficient IT solutions, managing technical projects, and leading high-performing teams. Strong problem-solving abilities with expertise in network security, cloud infrastructure, and IT service management.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <Briefcase className="mr-3" /> Professional Experience
              </h2>


              <div className="mb-8">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-blue-900">IT L1 Support </h3>
                  <p className="text-gray-600">2018 - 2020</p>
                </div>
                <p className="text-gray-700 mb-2">Royal Cyber Inc.</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Managed network infrastructure for a company of 200+ employees across multiple locations.</li>
                  <li>Designed and implemented network security protocols that reduced security incidents by 60%.</li>
                  <li>Led migration to cloud-based services, resulting in 30% improvement in system performance.</li>
                  <li>Conducted regular network audits and vulnerability assessments to ensure data integrity.</li>
                  <li>Trained staff on network security best practices and IT policies.</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <GraduationCap className="mr-3" /> Education
              </h2>

              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-blue-900">Master of Science in Information Technology</h3>
                  <p className="text-gray-600">2022 - 2026</p>
                </div>
                <p className="text-gray-700">University of Technology, San Francisco, CA</p>
                <p className="text-gray-700 mt-2">
                  Specialized in IT Management and Information Security. Thesis on "Optimizing IT Resource Allocation in Mid-Size Enterprises."
                </p>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-blue-900">Bachelor of Science in Computer Science</h3>
                  <p className="text-gray-600">2018 - 2022</p>
                </div>
                <p className="text-gray-700">State University, Los Angeles, CA</p>
                <p className="text-gray-700 mt-2">
                  Graduated with honors. Coursework included network infrastructure, database management, and software development.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <Award className="mr-3" /> Certifications
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900">CompTIA A+</h3>
                  <p className="text-gray-600">2020</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900">ITIL Foundation</h3>
                  <p className="text-gray-600">2019</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900">Cisco Certified Network Associate (CCNA)</h3>
                  <p className="text-gray-600">2018</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900">Microsoft Certified: Azure Administrator</h3>
                  <p className="text-gray-600">2017</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <FileText className="mr-3" /> Skills
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-blue-900 mb-3">Technical Skills</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Network Administration & Security</li>
                    <li>Cloud Infrastructure (AWS, Azure)</li>
                    <li>System Administration (Windows, Linux)</li>
                    <li>IT Service Management</li>
                    <li>Virtualization (VMware, Hyper-V)</li>
                    <li>Database Management</li>
                    <li>Network Monitoring & Troubleshooting</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-3">Management Skills</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Team Leadership & Mentoring</li>
                    <li>Project Management</li>
                    <li>Budget Planning & Resource Allocation</li>
                    <li>Strategic Planning</li>
                    <li>Performance Management</li>
                    <li>Vendor Management</li>
                    <li>Risk Assessment & Mitigation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Preview */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">Resume Preview</h2>
          <div className="bg-gray-100 p-4 rounded-lg flex justify-center">
            <div className="bg-white shadow-lg p-8 max-w-2xl w-full">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-blue-900">Nifa Naushadbhai</h2>
                <p className="text-gray-700">IT Manager</p>
                <div className="flex justify-center items-center mt-2 text-sm text-gray-600">
                  <span>San Francisco, CA</span>
                  <span className="mx-2">•</span>
                  <span>Nifa2025@gmail.com</span>
                  <span className="mx-2">•</span>
                  <span>(555) 123-4567</span>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-bold border-b-2 border-blue-900 pb-1 mb-2">Professional Summary</h3>
                <p className="text-sm text-gray-700">
                  IT professional with over 1 year of experience in system administration, network management, and team leadership. Demonstrated success in implementing efficient IT solutions...
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-bold border-b-2 border-blue-900 pb-1 mb-2">Experience</h3>

                <div className="mb-2">
                  <div className="flex justify-between">
                    <span className="font-bold">IT L1 Support </span>
                    <span className="text-sm">Jul 2024 - Jan 2025</span>
                  </div>
                  <p className="text-sm">Royal Cyber Inc.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold border-b-2 border-blue-900 pb-1 mb-2">Education</h3>
                <div className="flex justify-between">
                  <span className="font-bold">M.S. Information Technology</span>
                  <span className="text-sm">2014 - 2016</span>
                </div>
                <p className="text-sm">University of Technology, San Francisco, CA</p>
              </div>

              <div className="text-center mt-8 text-gray-500 text-sm italic">
                [Preview truncated - Download for full resume]
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="/nifa.pdf"
              download
              className="btn btn-primary inline-flex items-center"
            // onClick={(e) => {
            //   e.preventDefault();
            //   alert('In a real application, this would download the PDF version of the resume.');
            // }}
            >
              <Download size={20} className="mr-2" /> Download Full Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;