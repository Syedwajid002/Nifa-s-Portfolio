// src/pages/CoachingToolkit.js
import React from "react";

export default function CoachingToolkit() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-200 font-sans">
            {/* Hero Section */}
            <header className="w-full py-16 text-center bg-blue-600/80 shadow-md rounded-b-3xl">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow">
                    Coaching &amp; Communication Toolkit
                </h1>
                <p className="text-lg md:text-xl text-blue-100 opacity-90 mx-auto max-w-xl">
                    These are the tools and strategies I personally use to help teams communicate better, coach individuals, and foster a strong sense of collaboration.
                </p>
            </header>

            {/* Main Content */}
            <main className="max-w-3xl mx-auto py-12 px-4 grid gap-8">
                <section className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">My Approach to Coaching & Communication</h2>
                    <p className="text-blue-800 mb-4">
                        To me, coaching means empowering others to grow and succeed—whether we're setting personal goals or working together as a team. I focus on asking thoughtful questions, listening carefully, and helping people discover their own strengths.<br /><br />
                        Communication is absolutely central. My goal is to share information clearly, create trust, and inspire action. I’ve found that honest conversations and supportive feedback help everyone feel valued and motivated.
                    </p>
                </section>

                <section className="bg-blue-50 border-l-8 border-blue-600 rounded-2xl shadow-md p-8">
                    <h2 className="text-xl font-semibold text-blue-700 mb-3">How I Coach and Communicate</h2>
                    <ul className="list-disc pl-6 space-y-2 text-blue-800">
                        <li><span className="font-bold">Active Listening:</span> I make it a point to really hear what others are saying, so they know their perspectives matter.</li>
                        <li><span className="font-bold">Constructive Feedback:</span> I try to share feedback that encourages growth and builds confidence—even when tackling challenges.</li>
                        <li><span className="font-bold">Powerful Questions:</span> I use open-ended questions to spark fresh ideas and help people reflect on their progress.</li>
                        <li><span className="font-bold">Goal Setting & Accountability:</span> I work with others to set clear goals and follow up regularly to keep momentum strong.</li>
                        <li><span className="font-bold">Facilitating Collaboration:</span> My approach is to create space for everyone’s ideas and celebrate our shared victories.</li>
                    </ul>
                </section>

                <section className="bg-white rounded-xl shadow p-8">
                    <h2 className="text-xl font-semibold text-blue-700 mb-3">Why This Matters to Me</h2>
                    <ul className="list-disc pl-6 space-y-2 text-blue-800">
                        <li><span className="font-bold">Accelerating Growth:</span> I’ve seen firsthand that people thrive when they feel heard and supported.</li>
                        <li><span className="font-bold">Inspiring Ownership:</span> Clear communication helps everyone step up and take initiative.</li>
                        <li><span className="font-bold">Building Trust:</span> Authentic coaching conversations create strong, open relationships.</li>
                        <li><span className="font-bold">Driving Results:</span> I believe high-performing teams are fueled by real connection and purposeful communication.</li>
                    </ul>
                </section>

                <section className="bg-blue-50 rounded-xl shadow p-8">
                    <h2 className="text-xl font-semibold text-blue-700 mb-3">My Practical Tips</h2>
                    <ul className="list-disc pl-6 space-y-2 text-blue-800">
                        <li>Every session begins with a clear purpose and a commitment to listening first.</li>
                        <li>I keep language simple and direct, so everyone is on the same page.</li>
                        <li>Curiosity is key—I encourage plenty of “what” and “how” questions.</li>
                        <li>I make it a point to celebrate wins, big or small, and connect actions to bigger goals.</li>
                        <li>I view mistakes as learning opportunities, not failures—and help others do the same.</li>
                    </ul>
                </section>

                <section className="bg-white rounded-xl shadow p-8">
                    <h2 className="text-xl font-semibold text-blue-700 mb-3">Impact in My Work</h2>
                    <p className="text-blue-800">
                        Whether I’m mentoring, leading workshops, or running projects, strong coaching and communication have helped me build creative, connected teams. These are the skills I rely on to help people—and organizations—move forward with purpose and clarity.
                    </p>
                </section>
            </main>
        </div>
    );
}
