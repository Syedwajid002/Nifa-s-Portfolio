import React from "react";

export default function ExecutiveSummary({
    name = "Nifa Naushadbhai",
    role = "IT Supervisor Readiness Portfolio",
}) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 p-6 flex items-center justify-center">
            <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-10 border border-slate-200 print:shadow-none print:rounded-none print:p-4">
                {/* Header */}
                <header className="mb-8 border-b border-slate-200 pb-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                            Executive Summary
                        </h1>
                        <p className="text-sm md:text-base text-slate-600 mt-1">
                            {role} — By {name}
                        </p>
                    </div>
                    <button
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-white font-medium rounded-xl shadow hover:scale-105 hover:shadow-md transition-transform duration-200 focus:outline-none"
                    >
                        Print / Save as PDF
                    </button>
                </header>

                <main className="space-y-8 text-slate-800 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-primary-600 mb-2">
                            Original Vision and Goals
                        </h2>
                        <p>
                            My vision during my degree was to develop strong technical, analytical, and leadership skills to prepare for a future in IT supervision. I aimed to combine academic learning with practical applications, focusing on communication, planning, team management, and ethical decision-making. My goal was to graduate with a well-rounded skill set suitable for leadership roles in diverse workplace environments.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-primary-600 mb-2">
                            Key Skills Gained or Improved
                        </h2>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>
                                <strong>Technical Skills</strong> — Gained proficiency in programming, system design, and modern development tools.
                            </li>
                            <li>
                                <strong>Project Management</strong> — Learned to plan and execute projects using Gantt charts, manage timelines, and coordinate tasks.
                            </li>
                            <li>
                                <strong>Communication &amp; Leadership</strong> — Built strong interpersonal skills through group projects, presentations, and leadership roles.
                            </li>
                            <li>
                                <strong>Analytical &amp; Planning</strong> — Developed the ability to interpret data, track performance, and plan resources effectively.
                            </li>
                            <li>
                                <strong>Ethical Reasoning</strong> — Understood the importance of ethics and cultural adaptability in decision-making.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-primary-600 mb-2">
                            Biggest Success &amp; Biggest Challenge
                        </h2>
                        <div className="space-y-3">
                            <p>
                                <strong>Biggest Success:</strong> Applying theoretical concepts from coursework to practical scenarios, building confidence in both technical execution and leadership responsibilities.
                            </p>
                            <p>
                                <strong>Biggest Challenge:</strong> Balancing academic workload with skill development in emerging technologies while ensuring depth of understanding in core subjects.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-primary-600 mb-2">
                            How This Degree Prepared Me for Leadership
                        </h2>
                        <p>
                            My degree experience prepared me to think strategically, lead teams, manage resources, and communicate effectively. Through academic projects, internships, and leadership activities, I have developed the skills needed to thrive in IT supervisory roles while adapting to global workplace standards.
                        </p>
                    </section>
                </main>

                <footer className="mt-10 pt-4 border-t border-slate-200 text-sm text-slate-500">
                    <p>
                        Prepared as a final deliverable for the IT Supervisor Readiness (ISR) portfolio, highlighting growth during my academic journey.
                    </p>
                </footer>
            </div>
        </div>
    );
}
