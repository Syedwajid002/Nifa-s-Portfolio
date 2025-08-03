// src/pages/EthicsSystemsCulture.js
import React from "react";
import Limage from "../data/CasualLoop.png";

export default function EthicsSystemsCulture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-800 text-white font-sans">
      <header className="pt-16 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-sm">
          Ethics, Systems &amp; Culture
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Authentic leadership in IT means leading ethically, thinking in
          systems, and thriving in diverse cultures.
        </p>
      </header>
      <main className="max-w-3xl mx-auto py-10 px-4 space-y-12">
        {/* 1. Ethical Dilemma Response */}
        <section className="bg-white bg-opacity-5 rounded-xl p-7 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            1. Ethical Dilemma Response
          </h2>
          <p className="mb-3">
            <strong>Scenario:</strong> <br />
            <span className="block mt-1">
              <b>Confidential Breach Report Ignored</b>
            </span>
            Jay, an IT Supervisor at a U.S.-based SaaS firm, is approached by
            Priya, a junior developer, who reports a suspected security breach
            in their application’s admin dashboard. Jay’s department is under
            heavy pressure to deliver a new feature. His own manager hints to
            “not make waves”—downplaying the report to meet the release
            deadline.
          </p>
          <ul className="pl-5 list-disc mb-2">
            <li>
              <b>Issue:</b> Subordinate’s security concern is being minimized
              for productivity gains.
            </li>
            <li>
              <b>Decision:</b> Jay chooses to escalate the incident to the
              compliance team, pausing feature deployment until the issue is
              properly investigated.
            </li>
            <li>
              <b>Ethical Principle:</b>{" "}
              <span className="italic">Accountability and Integrity:</span>{" "}
              Protecting customer data is non-negotiable even when deadlines are
              tight.
            </li>
            <li>
              <b>Leadership Justification:</b> By supporting Priya and following
              the escalation process, Jay reinforces a culture where team
              members feel safe reporting issues—essential for both ethical
              leadership and cyber resilience.
            </li>
          </ul>
          <p className="italic opacity-90 mt-3">
            “As a leader, I would rather face delay than risk the legitimacy and
            trust of my organization.”
          </p>
          <a
            href="/EDR.pdf"
            download
            className="mt-6 inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Download PDF
          </a>
        </section>

        {/* 2. Causal Loop Diagram (Systems Map) */}
        <section className="bg-white bg-opacity-5 rounded-xl p-7 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            2. Causal Loop Diagram
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-center p-2">
            {/* Replace below img src with your own diagram image! */}
            <img
              src={Limage}
              alt="Causal Loop Diagram:xx Team Communication Loop"
              className="w-96 max-w-md rounded-lg border border-white/20 shadow mb-3"
            />
            <div>
              <p className="mb-1">
                <b>Diagram Focus:</b> Supervisor Communication &rarr; Team
                Morale &rarr; Output Quality &rarr; Feedback Loop
              </p>
              <ul className="list-disc pl-5 opacity-90 text-sm">
                <li>↑ Supervisor communication boosts team morale</li>
                <li>↑ High morale improves performance and collaboration</li>
                <li>↑ Better results encourage more open communication</li>
                <li>
                  ↻ Positive feedback loop supports culture of continuous
                  improvement
                </li>
              </ul>
            </div>
          </div>
          <a
            href="./../../public/loop.png"
            download
            className="mt-6 inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Download PDF
          </a>
        </section>

        {/* 3. Personal Code of Ethics */}
        <section className="bg-white bg-opacity-5 rounded-xl p-7 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            3. Personal Code of Ethics
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <b>Transparency:</b> I openly share changes, successes, and
              challenges—so my team understands both the “why” and the “what.”
            </li>
            <li>
              <b>Respect:</b> Every voice matters; all team members are
              encouraged to share ideas and concerns regardless of position.
            </li>
            <li>
              <b>Accountability:</b> I take ownership of both wins and mistakes,
              using setbacks as learning opportunities for all.
            </li>
            <li>
              <b>Data Privacy:</b> I rigorously enforce security protocols and
              ethical standards when handling customer information.
            </li>
            <li>
              <b>Non-Discrimination:</b> I treat all individuals fairly,
              actively fostering an environment free from bias based on gender,
              ethnicity, or background.
            </li>
          </ul>
          <a
            href="/PCE.pdf"
            download
            className="mt-6 inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Download PDF
          </a>
        </section>

        {/* 4. U.S. Cultural Adaptation Reflection */}
        <section className="bg-white bg-opacity-5 rounded-xl p-7 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            4. U.S. Cultural Adaptation Reflection
          </h2>
          <p>
            In the U.S., IT supervision is often marked by flat hierarchies,
            rapid feedback, and agile team structures—contrasting with the more
            formal and hierarchical approach I experienced at home. Constructive
            criticism is common and direct, and leaders are expected to
            facilitate autonomy and foster inclusion.
          </p>
          <ul className="list-disc pl-5 mt-4 text-sm opacity-90">
            <li>
              <b>Differences:</b> Decision-making is more decentralized; team
              members are expected to challenge ideas constructively, and
              results matter more than rank.
            </li>
            <li>
              <b>Adaptations:</b> I proactively solicit input, give and welcome
              feedback, and work to empower diverse team members to lead
              initiatives.
            </li>
            <li>
              <b>Success in U.S. Environment:</b> Embracing transparency and
              collaborative problem-solving will help me earn trust and inspire
              high performance while bridging any cultural divide.
            </li>
          </ul>
          <a
            href="/USCAR.pdf"
            download
            className="mt-6 inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Download PDF
          </a>
        </section>
      </main>
    </div>
  );
}
