import React from "react";
import TimeLineImage from "./../../public/TimeLine.jpg"; // adjust path if needed

const NifaTimelineSection = () => {
    return (
        <section className="bg-gray-50 py-12 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Image */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src={TimeLineImage}
                        alt="Portfolio Development Timeline Gantt Visualization"
                        className="w-full object-contain"
                    />
                </div>

                {/* Content */}
                <div className="mt-8 bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Portfolio Development Progress Overview
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        The Gantt visualization above illustrates the systematic approach
                        taken in completing each stage of Nifa’s portfolio development.
                        Beginning with the <strong>Executive Proposal</strong> in early May,
                        the project progressed through structured phases, ensuring timely
                        completion and quality output at each step.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>
                            <strong>May – Early June:</strong> Initiated with the Executive
                            Proposal, followed by the development of the Coaching &
                            Communication section, setting the foundation for leadership-focused
                            tools.
                        </li>
                        <li>
                            <strong>Mid-June:</strong> Designed and implemented the Customer
                            Service & Escalation Toolkit, enhancing problem-solving and client
                            engagement capabilities.
                        </li>
                        <li>
                            <strong>Late June:</strong> Delivered the KPI Dashboard & Mini
                            Budget for performance tracking and resource management, ensuring
                            measurable outcomes.
                        </li>
                        <li>
                            <strong>Early July:</strong> Created comprehensive Team Leadership &
                            HR templates, fostering organizational structure and effective team
                            management.
                        </li>
                        <li>
                            <strong>Mid-July:</strong> Finalized the Ethics & Cultural
                            Adaptation Plan, aligning with global workplace values and diversity
                            principles.
                        </li>
                        <li>
                            <strong>August:</strong> Concluded with the integration of the Final
                            Website Design and the Video Presentation, delivering a polished and
                            professional portfolio.
                        </li>
                    </ul>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        <strong>Outcome:</strong> All tasks reached 100% completion on
                        schedule, reflecting strong time management, strategic planning, and
                        execution skills. This timeline demonstrates Nifa’s commitment to
                        quality, precision, and professionalism in portfolio development.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NifaTimelineSection;
