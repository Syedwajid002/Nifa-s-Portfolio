import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        text: 'Thank you for your message! I will get back to you as soon as possible.',
        type: 'success',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Get in touch to discuss IT management opportunities or to learn more about my qualifications.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card p-6 flex flex-col items-center text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 mb-4">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">Email</h3>
              <p className="text-gray-700 mb-4">Feel free to email me anytime</p>
              <a href="mailto:Nifa2025@email.com" className="text-blue-900 font-medium hover:underline">
                Nifa2025@email.com
              </a>
            </div>
            <div className="card p-6 flex flex-col items-center text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 mb-4">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">Phone</h3>
              <p className="text-gray-700 mb-4">Available during business hours</p>
              <a href="tel:+15551234567" className="text-blue-900 font-medium hover:underline">
                (555) 123-4567
              </a>
            </div>
            <div className="card p-6 flex flex-col items-center text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">Location</h3>
              <p className="text-gray-700 mb-4">Based in the Bay Area</p>
              <span className="text-blue-900 font-medium">
                San Francisco, California
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Send Me a Message</h2>

              {submitMessage && (
                <div
                  className={`p-4 mb-6 rounded-lg ${submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                >
                  {submitMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Nifa Naushadbhai"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Consulting Request">Consulting Request</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send size={20} className="mr-2" /> Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* Connect Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Connect With Me</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-gray-700 mb-6">
                  I'm always open to connecting with fellow IT professionals, potential employers, or anyone interested in discussing IT management and supervision topics.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://linkedin.com/in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    <Linkedin size={24} className="text-blue-700 mr-4" />
                    <div>
                      <h3 className="font-bold text-gray-900">LinkedIn</h3>
                      <p className="text-gray-600 text-sm">Connect professionally</p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    <Github size={24} className="text-gray-900 mr-4" />
                    <div>
                      <h3 className="font-bold text-gray-900">GitHub</h3>
                      <p className="text-gray-600 text-sm">View my projects and contributions</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-blue-900 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Availability</h3>
                <p className="mb-4">
                  I am currently open to:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="text-blue-300 mr-2">•</div>
                    <span>Full-time IT management positions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-300 mr-2">•</div>
                    <span>Consulting projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-300 mr-2">•</div>
                    <span>Freelance IT supervision roles</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-300 mr-2">•</div>
                    <span>Professional networking</span>
                  </li>
                </ul>
                <p className="text-blue-100">
                  Response time: Within 24-48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">Location</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-96 rounded-lg bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">
                  [Google Map would be embedded here in a production environment]
                </p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 flex items-center">
                <MapPin size={20} className="text-blue-900 mr-2" />
                Based in San Francisco, California - Available for remote work and local opportunities in the Bay Area
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;