import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Menu,
    X,
    Users,
    ArrowUp,
    ArrowRight,
    MessageSquare,
    FileText,
    Download,
    Mail,
    Github,
    Linkedin,
    Shield,
    AlertTriangle,
    CheckCircle,
    Clock,
    Phone,
    Star
} from 'lucide-react';

const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: 'easeOut'
        }
    }),
};


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/80 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >



        </motion.nav>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, -50]);

    // Extract SVG data URL to avoid JSX parsing issues
    const dotPatternUrl = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

    return (
        <section id="home" className="min-h-screen relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
            <div className={`absolute inset-0 bg-[url('${dotPatternUrl}')] opacity-40`} />

            <motion.div
                style={{ y }}
                className="relative flex items-center justify-center min-h-screen px-4"
            >
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >


                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            Customer Service &{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Incident Management
                            </span>{' '}
                            Toolkit
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            A comprehensive collection of standards, procedures, and templates for
                            delivering exceptional customer service and managing incidents effectively.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.button
                            onClick={() => document.getElementById('standards')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ y: -2, scale: 1.05 }}
                            whileTap={{ y: 0, scale: 0.95 }}
                        >
                            Explore Toolkit
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

const Standards = () => {
    const [activeTab, setActiveTab] = useState(0);

    const standards = [
        {
            icon: <Users className="w-6 h-6" />,
            title: "How IT Should Treat End Users",
            content: [
                "Approach every interaction with empathy and patience",
                "Use clear, non-technical language when explaining solutions",
                "Listen actively and ask clarifying questions",
                "Respect users' time and business priorities",
                "Follow up to ensure complete resolution",
                "Maintain professional demeanor even under pressure"
            ]
        },
        {
            icon: <Star className="w-6 h-6" />,
            title: "Defining Great Service",
            content: [
                "Response time: Acknowledge within 1 hour during business hours",
                "Resolution focus: Solve the problem, not just close the ticket",
                "Communication: Keep users informed throughout the process",
                "Knowledge sharing: Document solutions for future reference",
                "Continuous improvement: Learn from each interaction",
                "Proactive support: Identify and prevent potential issues"
            ]
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Handling Complaints Professionally",
            content: [
                "Acknowledge the user's frustration without becoming defensive",
                "Apologize for any inconvenience caused by the issue",
                "Focus on finding solutions rather than assigning blame",
                "Set realistic expectations for resolution timeframes",
                "Escalate appropriately when necessary",
                "Follow up to ensure customer satisfaction"
            ]
        }
    ];

    return (
        <section id="standards" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Customer Service Standards
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Essential principles for delivering exceptional customer service and building positive relationships with end users.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Tab Navigation */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3"
                    >
                        <div className="space-y-2">
                            {standards.map((standard, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`w-full text-left p-4 rounded-xl transition-colors ${activeTab === index
                                        ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-700'
                                        : 'hover:bg-gray-50 text-gray-700'
                                        }`}
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className={`p-2 rounded-lg ${activeTab === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                                            }`}>
                                            {standard.icon}
                                        </div>
                                        <span className="font-medium">{standard.title}</span>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tab Content */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-2/3"
                    >
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl mr-4">
                                    {standards[activeTab].icon}
                                </div>
                                {standards[activeTab].title}
                            </h3>

                            <ul className="space-y-4">
                                {standards[activeTab].content.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="flex items-start space-x-3"
                                    >
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const EscalationMatrix = () => {
    const [selectedTier, setSelectedTier] = useState<number | null>(null);

    const tiers = [
        {
            level: "Tier 1",
            title: "First Line Support",
            color: "from-green-400 to-green-600",
            bgColor: "bg-green-50",
            textColor: "text-green-700",
            borderColor: "border-green-200",
            responsibilities: [
                "Basic troubleshooting and password resets",
                "Common software issues and user guidance",
                "Hardware replacement (keyboard, mouse, etc.)",
                "Account management and permissions",
                "Documentation of all interactions"
            ],
            escalateTo: "Tier 2 after 30 minutes of troubleshooting or if technical expertise is needed"
        },
        {
            level: "Tier 2",
            title: "Technical Specialists",
            color: "from-blue-400 to-blue-600",
            bgColor: "bg-blue-50",
            textColor: "text-blue-700",
            borderColor: "border-blue-200",
            responsibilities: [
                "Complex software installations and configurations",
                "Network connectivity issues",
                "Server and database problems",
                "Security incidents and investigations",
                "Advanced troubleshooting and analysis"
            ],
            escalateTo: "Tier 3 for critical system failures or when specialized expertise is required"
        },
        {
            level: "Tier 3",
            title: "Senior Engineers & Vendors",
            color: "from-purple-400 to-purple-600",
            bgColor: "bg-purple-50",
            textColor: "text-purple-700",
            borderColor: "border-purple-200",
            responsibilities: [
                "Critical system outages and emergencies",
                "Vendor escalations and coordination",
                "Infrastructure changes and upgrades",
                "Complex security breaches",
                "Root cause analysis and prevention"
            ],
            escalateTo: "External vendors or management for business-critical decisions"
        }
    ];

    return (
        <section id="escalation" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Escalation Matrix
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Clear guidelines for when and how to escalate issues through different tiers of support to ensure efficient resolution.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {/* Escalation Flow */}
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
                        {tiers.map((tier, index) => (
                            <div key={index} className="flex items-center">
                                <motion.div
                                    className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center text-white font-bold text-lg shadow-lg cursor-pointer`}
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedTier(selectedTier === index ? null : index)}
                                >
                                    <div className="text-center">
                                        <div className="text-sm opacity-90">{tier.level}</div>
                                        <div className="text-xs mt-1 opacity-75">Support</div>
                                    </div>
                                </motion.div>

                                {index < tiers.length - 1 && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: index * 0.2 }}
                                        className="hidden md:block mx-4"
                                    >
                                        <ArrowRight className="w-8 h-8 text-gray-400" />
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Tier Details */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {tiers.map((tier, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`${tier.bgColor} ${tier.borderColor} border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${selectedTier === index ? 'ring-4 ring-blue-200 shadow-xl' : 'hover:shadow-lg'
                                    }`}
                                whileHover={{ y: -5 }}
                                onClick={() => setSelectedTier(selectedTier === index ? null : index)}
                            >
                                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${tier.textColor} bg-white/50 mb-4`}>
                                    {tier.level}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-4">{tier.title}</h3>

                                <div className="space-y-3 mb-6">
                                    {tier.responsibilities.map((responsibility, idx) => (
                                        <div key={idx} className="flex items-start space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-gray-700">{responsibility}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className={`${tier.bgColor} border ${tier.borderColor} rounded-lg p-3`}>
                                    <div className="flex items-start space-x-2">
                                        <ArrowUp className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="text-xs font-semibold text-gray-800 mb-1">Escalate When:</div>
                                            <div className="text-xs text-gray-600">{tier.escalateTo}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const SampleResponse = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [displayedText, setDisplayedText] = useState('');

    const sampleResponse = `Dear Sarah,

Thank you for contacting IT support regarding the email synchronization issues you're experiencing with Outlook. I understand how frustrating this must be, especially when you're trying to stay on top of important communications.

I've reviewed your ticket and identified that this appears to be related to a recent server update that affected several users in your department. Here's what I'm doing to resolve this immediately:

1. I'm applying a specific configuration fix to your email profile that should restore full synchronization within the next 15 minutes
2. I'm also implementing a preventive measure to ensure this doesn't happen again
3. I'll monitor your account for the next hour to confirm everything is working properly

You should start seeing your emails sync normally very soon. I'll send you a follow-up email once I've confirmed the fix is working, and I'll also call you in about 20 minutes to make sure everything is functioning as expected.

If you notice any other issues or have questions, please don't hesitate to reach out to me directly at extension 1234 or reply to this ticket. Your productivity is important to us, and I'm committed to making sure this is completely resolved.

Best regards,
Alex Thompson
IT Support Specialist
Direct: (555) 123-1234
Ticket #: CS-2024-0156`;

    useEffect(() => {
        if (isVisible) {
            let index = 0;
            const timer = setInterval(() => {
                if (index < sampleResponse.length) {
                    setDisplayedText(sampleResponse.slice(0, index + 1));
                    index++;
                } else {
                    clearInterval(timer);
                }
            }, 20);
            return () => clearInterval(timer);
        }
    }, [isVisible, sampleResponse]);

    return (
        <section id="response" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Sample Helpdesk Response
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        An example of professional, empathetic communication that demonstrates best practices for customer service responses.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        onViewportEnter={() => setIsVisible(true)}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 shadow-lg"
                    >
                        {/* Email Header */}
                        <div className="border-b border-gray-200 pb-4 mb-6">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">IT Support Response</div>
                                        <div className="text-sm text-gray-600">Ticket #CS-2024-0156</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-gray-600">Response Time</div>
                                    <div className="text-sm font-medium text-green-600">12 minutes</div>
                                </div>
                            </div>
                        </div>

                        {/* Email Content */}
                        <div className="relative">
                            <motion.div
                                className="bg-white rounded-lg p-6 shadow-sm border"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
                                    {displayedText}
                                    {isVisible && displayedText.length < sampleResponse.length && (
                                        <motion.span
                                            animate={{ opacity: [1, 0] }}
                                            transition={{ repeat: Infinity, duration: 0.8 }}
                                            className="inline-block w-2 h-5 bg-blue-500 ml-1"
                                        />
                                    )}
                                </pre>
                            </motion.div>
                        </div>

                        {/* Key Elements Highlighted */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 2 }}
                            className="mt-8 grid md:grid-cols-3 gap-4"
                        >
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <div className="flex items-center space-x-2 mb-2">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="font-medium text-green-800">Empathy</span>
                                </div>
                                <p className="text-sm text-green-700">Acknowledges user frustration and shows understanding</p>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <div className="flex items-center space-x-2 mb-2">
                                    <Clock className="w-5 h-5 text-blue-600" />
                                    <span className="font-medium text-blue-800">Clear Timeline</span>
                                </div>
                                <p className="text-sm text-blue-700">Provides specific timeframes and next steps</p>
                            </div>

                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                <div className="flex items-center space-x-2 mb-2">
                                    <Phone className="w-5 h-5 text-purple-600" />
                                    <span className="font-medium text-purple-800">Follow-up</span>
                                </div>
                                <p className="text-sm text-purple-700">Commits to monitoring and provides direct contact</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const IncidentTemplate = () => {
    const templateSections = [
        {
            title: "Incident Summary",
            fields: ["Date/Time of Incident", "Reported By", "Severity Level", "Brief Description"]
        },
        {
            title: "Detailed Description",
            fields: ["What Happened", "When Did It Occur", "Who Was Affected", "Business Impact"]
        },
        {
            title: "Investigation & Response",
            fields: ["Initial Response Actions", "Root Cause Analysis", "Timeline of Events", "Evidence Collected"]
        },
        {
            title: "Resolution & Follow-up",
            fields: ["Resolution Steps Taken", "Verification of Fix", "Prevention Measures", "Lessons Learned"]
        }
    ];

    return (
        // <section id="template" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //         <motion.div
        //             initial={{ opacity: 0, y: 30 }}
        //             whileInView={{ opacity: 1, y: 0 }}
        //             transition={{ duration: 0.8 }}
        //             viewport={{ once: true }}
        //             className="text-center mb-16"
        //         >
        //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        //                 Incident Report Template
        //             </h2>
        //             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        //                 A comprehensive template for documenting incidents, ensuring thorough investigation and proper resolution tracking.
        //             </p>
        //         </motion.div>

        //         <div className="max-w-5xl mx-auto">
        //             <motion.div
        //                 initial={{ opacity: 0, scale: 0.95 }}
        //                 whileInView={{ opacity: 1, scale: 1 }}
        //                 transition={{ duration: 0.8 }}
        //                 viewport={{ once: true }}
        //                 className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
        //             >
        //                 {/* Template Header */}
        //                 <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        //                     <div className="flex items-center justify-between">
        //                         <div>
        //                             <h3 className="text-2xl font-bold mb-2">IT Incident Report</h3>
        //                             <p className="opacity-90">Comprehensive incident documentation template</p>
        //                         </div>
        //                         <div className="text-right">
        //                             <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">
        //                                 Template v2.1
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>

        //                 {/* Template Sections */}
        //                 <div className="p-6">
        //                     <div className="grid gap-6">
        //                         {templateSections.map((section, index) => (
        //                             <motion.div
        //                                 key={index}
        //                                 initial={{ opacity: 0, x: -20 }}
        //                                 whileInView={{ opacity: 1, x: 0 }}
        //                                 transition={{ duration: 0.6, delay: index * 0.1 }}
        //                                 viewport={{ once: true }}
        //                                 className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
        //                             >
        //                                 <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        //                                     <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold mr-3">
        //                                         {index + 1}
        //                                     </div>
        //                                     {section.title}
        //                                 </h4>

        //                                 <div className="grid md:grid-cols-2 gap-3">
        //                                     {section.fields.map((field, fieldIndex) => (
        //                                         <div key={fieldIndex} className="flex items-center space-x-3">
        //                                             <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
        //                                             <span className="text-gray-700">{field}</span>
        //                                         </div>
        //                                     ))}
        //                                 </div>
        //                             </motion.div>
        //                         ))}
        //                     </div>

        //                     {/* Action Buttons */}
        //                     <motion.div
        //                         initial={{ opacity: 0, y: 20 }}
        //                         whileInView={{ opacity: 1, y: 0 }}
        //                         transition={{ duration: 0.8, delay: 0.5 }}
        //                         viewport={{ once: true }}
        //                         className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200"
        //                     >
        //                         <motion.button
        //                             className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        //                             whileHover={{ y: -2, scale: 1.02 }}
        //                             whileTap={{ y: 0, scale: 0.98 }}
        //                         >
        //                             <Download className="inline-block w-5 h-5 mr-2" />
        //                             Download Word Template
        //                         </motion.button>

        //                         <motion.button
        //                             className="flex-1 bg-white text-gray-800 px-6 py-3 rounded-xl font-semibold border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300"
        //                             whileHover={{ y: -2, scale: 1.02 }}
        //                             whileTap={{ y: 0, scale: 0.98 }}
        //                         >
        //                             <FileText className="inline-block w-5 h-5 mr-2" />
        //                             View PDF Version
        //                         </motion.button>
        //                     </motion.div>
        //                 </div>
        //             </motion.div>
        //         </div>
        //     </div>
        // </section>
        <motion.section
            className="bg-gray-50 py-10 px-4"
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
        >
            <motion.div
                className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h2
                    className="text-3xl font-bold mb-6 text-blue-900 text-center"
                    variants={sectionVariant}
                    custom={1}
                >
                    Incident Report Template
                </motion.h2>

                <form className="space-y-6">
                    <motion.div variants={sectionVariant} custom={2}>
                        <label className="block text-gray-700 font-semibold mb-1">Incident Title</label>
                        <input type="text" placeholder="e.g. Network Outage in Block A" className="w-full p-2 border rounded-md" />
                    </motion.div>

                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={sectionVariant} custom={3}>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Date & Time</label>
                            <input type="datetime-local" className="w-full p-2 border rounded-md" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Reported By</label>
                            <input type="text" placeholder="Full Name, Role, Contact" className="w-full p-2 border rounded-md" />
                        </div>
                    </motion.div>

                    <motion.div variants={sectionVariant} custom={4}>
                        <label className="block text-gray-700 font-semibold mb-1">1. What Happened?</label>
                        <textarea rows={4} className="w-full p-2 border rounded-md" placeholder="Describe the incident clearly..." />
                    </motion.div>

                    <motion.div variants={sectionVariant} custom={5}>
                        <label className="block text-gray-700 font-semibold mb-1">2. Who Was Involved?</label>
                        <textarea rows={3} className="w-full p-2 border rounded-md" placeholder="People, systems, departments..." />
                    </motion.div>

                    <motion.div variants={sectionVariant} custom={6}>
                        <label className="block text-gray-700 font-semibold mb-1">3. Impact on Systems/Users</label>
                        <textarea rows={3} className="w-full p-2 border rounded-md" placeholder="What systems/users were affected?" />
                    </motion.div>

                    <motion.div variants={sectionVariant} custom={7}>
                        <label className="block text-gray-700 font-semibold mb-1">4. Response Actions & Timeline</label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2 font-semibold text-sm text-gray-600">
                            <span>Time</span>
                            <span>Action Taken</span>
                            <span>By Whom</span>
                        </div>
                        {[...Array(1)].map((_, i) => (
                            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                                <input type="text" placeholder="10:15 AM" className="p-2 border rounded-md" />
                                <input type="text" placeholder="Issue escalated to IT" className="p-2 border rounded-md" />
                                <input type="text" placeholder="Sarah Khan" className="p-2 border rounded-md" />
                            </div>
                        ))}
                    </motion.div>

                    <motion.div variants={sectionVariant} custom={8}>
                        <label className="block text-gray-700 font-semibold mb-1">Final Resolution Summary</label>
                        <textarea rows={3} className="w-full p-2 border rounded-md" placeholder="Root cause and final resolution..." />
                    </motion.div>

                    <motion.div className="flex items-center space-x-4" variants={sectionVariant} custom={9}>
                        <label className="text-gray-700 font-semibold">Follow-Up Required?</label>
                        <label className="flex items-center space-x-1">
                            <input type="radio" name="followup" className="form-radio" />
                            <span>Yes</span>
                        </label>
                        <label className="flex items-center space-x-1">
                            <input type="radio" name="followup" className="form-radio" />
                            <span>No</span>
                        </label>
                    </motion.div>

                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4" variants={sectionVariant} custom={10}>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Submitted By</label>
                            <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-md" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Signature</label>
                            <input type="text" placeholder="Your Signature" className="w-full p-2 border rounded-md" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Date</label>
                            <input type="date" className="w-full p-2 border rounded-md" />
                        </div>
                    </motion.div>

                    <motion.div className="text-center mt-6" variants={sectionVariant} custom={11}>
                        <button
                            type="submit"
                            className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                alert("Incident Report Submitted Successfully We will get back to you soon !")
                            }}
                        >
                            Submit Report
                        </button>
                    </motion.div>
                </form>
            </motion.div>
        </motion.section>
    );
};

// const Downloads = () => {
//     const resources = [
//         {
//             title: "Customer Service Standards Guide",
//             type: "PDF",
//             size: "2.3 MB",
//             description: "Complete guide covering all service standards and best practices",
//             icon: <FileText className="w-8 h-8" />,
//             color: "from-red-500 to-pink-500",
//             bgColor: "bg-red-50",
//             borderColor: "border-red-200"
//         },
//         {
//             title: "Escalation Matrix Flowchart",
//             type: "PDF",
//             size: "1.8 MB",
//             description: "Visual flowchart showing escalation paths and decision points",
//             icon: <ArrowUp className="w-8 h-8" />,
//             color: "from-blue-500 to-indigo-500",
//             bgColor: "bg-blue-50",
//             borderColor: "border-blue-200"
//         },
//         {
//             title: "Incident Report Template",
//             type: "DOCX",
//             size: "156 KB",
//             description: "Editable Word template for comprehensive incident documentation",
//             icon: <AlertTriangle className="w-8 h-8" />,
//             color: "from-orange-500 to-yellow-500",
//             bgColor: "bg-orange-50",
//             borderColor: "border-orange-200"
//         },
//         {
//             title: "Sample Response Library",
//             type: "PDF",
//             size: "3.1 MB",
//             description: "Collection of professional response templates for common scenarios",
//             icon: <MessageSquare className="w-8 h-8" />,
//             color: "from-green-500 to-emerald-500",
//             bgColor: "bg-green-50",
//             borderColor: "border-green-200"
//         },
//         {
//             title: "Complete Toolkit Package",
//             type: "ZIP",
//             size: "8.2 MB",
//             description: "All resources bundled together in a single download",
//             icon: <Download className="w-8 h-8" />,
//             color: "from-purple-500 to-violet-500",
//             bgColor: "bg-purple-50",
//             borderColor: "border-purple-200"
//         }
//     ];

//     return (
//         <section id="downloads" className="py-20 bg-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                     className="text-center mb-16"
//                 >
//                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                         Download Resources
//                     </h2>
//                     <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                         Access all toolkit components in various formats. Each resource is designed to be immediately usable in your organization.
//                     </p>
//                 </motion.div>

//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {resources.map((resource, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: index * 0.1 }}
//                             viewport={{ once: true }}
//                             className={`${resource.bgColor} ${resource.borderColor} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer`}
//                             whileHover={{ y: -5, scale: 1.02 }}
//                             whileTap={{ scale: 0.98 }}
//                         >
//                             <div className="flex items-start justify-between mb-4">
//                                 <div className={`p-3 bg-gradient-to-br ${resource.color} text-white rounded-xl group-hover:scale-110 transition-transform duration-300`}>
//                                     {resource.icon}
//                                 </div>
//                                 <div className="text-right">
//                                     <div className="text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded-full">
//                                         {resource.type}
//                                     </div>
//                                     <div className="text-xs text-gray-500 mt-1">{resource.size}</div>
//                                 </div>
//                             </div>

//                             <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
//                                 {resource.title}
//                             </h3>

//                             <p className="text-sm text-gray-600 mb-4 leading-relaxed">
//                                 {resource.description}
//                             </p>

//                             <motion.button
//                                 className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-medium border border-gray-200 hover:border-gray-300 transition-colors group-hover:bg-gray-50"
//                                 whileHover={{ y: -1 }}
//                                 whileTap={{ y: 0 }}
//                             >
//                                 <Download className="inline-block w-4 h-4 mr-2" />
//                                 Download
//                             </motion.button>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Usage Stats */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.5 }}
//                     viewport={{ once: true }}
//                     className="mt-16 grid md:grid-cols-3 gap-6 text-center"
//                 >
//                     <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
//                         <div className="text-3xl font-bold text-blue-600 mb-2">2,400+</div>
//                         <div className="text-gray-600">Downloads This Month</div>
//                     </div>
//                     <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
//                         <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
//                         <div className="text-gray-600">User Satisfaction Rate</div>
//                     </div>
//                     <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6">
//                         <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
//                         <div className="text-gray-600">Organizations Using</div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                </motion.div>
            </div>
        </footer>
    );
};

function IsIm() {
    return (
        <div className="min-h-screen">
            <Navigation />
            <Hero />
            <Standards />
            <EscalationMatrix />
            <SampleResponse />
            <IncidentTemplate />
            {/* <Downloads /> */}
            <Footer />
        </div>
    );
}

export default IsIm;