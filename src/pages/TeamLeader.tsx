import React from "react";

function TeamLeadershipHRSection() {
  const raciData = [
    {
      task: "System Patching",
      responsible: "IT Technician",
      accountable: "IT Supervisor",
      consulted: "Network Engineer",
      informed: "HR Manager",
    },
    {
      task: "New Employee Onboarding",
      responsible: "HR Assistant",
      accountable: "HR Manager",
      consulted: "IT Supervisor",
      informed: "Department Head",
    },
    {
      task: "Security Audit",
      responsible: "Security Analyst",
      accountable: "CISO",
      consulted: "IT Supervisor",
      informed: "Executive Team",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container px-4 md:px-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Team Leadership & HR Tools
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            This section showcases my skills reflecting leadership, HR collaboration, and administrative readiness as an IT Supervisor.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">

          <div className="mb-12 p-6 border border-blue-200 rounded-2xl shadow-sm bg-white">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h3l1 2h4l1-2h3a2 2 0 012 2v12a2 2 0 01-2 2z" />
              </svg>
              3-Day Onboarding Plan
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-700 font-bold rounded-full">1</div>
                <p className="text-gray-800">
                  <span className="font-semibold text-blue-700">Day 1:</span> Welcome orientation, office tour, system login setup, and company policies overview.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-700 font-bold rounded-full">2</div>
                <p className="text-gray-800">
                  <span className="font-semibold text-blue-700">Day 2:</span> Meet the team, shadowing, configure access to Jira, Helpdesk, and email.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-700 font-bold rounded-full">3</div>
                <p className="text-gray-800">
                  <span className="font-semibold text-blue-700">Day 3:</span> Assign basic tasks, introduce service KPIs, ticket handling workflows, and performance goals.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="/3-Day-Onboarding.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Complete Process
              </a>
            </div>
          </div>

          {/* Other Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="mb-12 p-6 border border-blue-200 rounded-2xl shadow-sm bg-white">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">RACI Chart</h3>
              <p className="text-gray-600 mb-4">
                A clear breakdown of roles and responsibilities for common IT support and project tasks using the RACI model.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left border-collapse border border-blue-300">
                  <thead className="bg-blue-100 text-blue-800">
                    <tr>
                      <th className="px-4 py-2 border border-blue-300">Task</th>
                      <th className="px-4 py-2 border border-blue-300">Responsible (R)</th>
                      <th className="px-4 py-2 border border-blue-300">Accountable (A)</th>
                      <th className="px-4 py-2 border border-blue-300">Consulted (C)</th>
                      <th className="px-4 py-2 border border-blue-300">Informed (I)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {raciData.map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white" : "bg-blue-50"}
                      >
                        <td className="px-4 py-2 border border-blue-200">{row.task}</td>
                        <td className="px-4 py-2 border border-blue-200">{row.responsible}</td>
                        <td className="px-4 py-2 border border-blue-200">{row.accountable}</td>
                        <td className="px-4 py-2 border border-blue-200">{row.consulted}</td>
                        <td className="px-4 py-2 border border-blue-200">{row.informed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <a
                href="/RACI Data.pdf"
                download
                className="mt-6 inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Download RACI PDF
              </a>
            </div>

            <div className="p-6 rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 shadow-sm hover:shadow-md transition duration-300 items-center">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">PTO Request & Approval Tracker</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border border-blue-200 rounded-md">
                  <thead className="bg-blue-100 text-blue-800">
                    <tr>
                      <th className="px-4 py-2">Employee Name</th>
                      <th className="px-4 py-2">Requested Time Off</th>
                      <th className="px-4 py-2">Date Range</th>
                      <th className="px-4 py-2">Approval Status</th>
                      <th className="px-4 py-2">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white text-gray-700">
                    <tr className="border-t">
                      <td className="px-4 py-2">Jane Smith</td>
                      <td className="px-4 py-2">Vacation</td>
                      <td className="px-4 py-2">Aug 5 – Aug 10</td>
                      <td className="px-4 py-2 text-green-600 font-semibold">Approved</td>
                      <td className="px-4 py-2">Family trip</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2">Mark Johnson</td>
                      <td className="px-4 py-2">Sick Leave</td>
                      <td className="px-4 py-2">Jul 18 – Jul 20</td>
                      <td className="px-4 py-2 text-yellow-600 font-semibold">Pending</td>
                      <td className="px-4 py-2">Flu recovery</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2">Emily Zhang</td>
                      <td className="px-4 py-2">Personal Day</td>
                      <td className="px-4 py-2">Jul 25</td>
                      <td className="px-4 py-2 text-red-600 font-semibold">Declined</td>
                      <td className="px-4 py-2">Short notice</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2">Rock Smith</td>
                      <td className="px-4 py-2">Vacation</td>
                      <td className="px-4 py-2">Aug 5 – Aug 10</td>
                      <td className="px-4 py-2 text-green-600 font-semibold">Approved</td>
                      <td className="px-4 py-2">Family trip</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2">Juli Zhang</td>
                      <td className="px-4 py-2">Personal Day</td>
                      <td className="px-4 py-2">Jul 25</td>
                      <td className="px-4 py-2 text-red-600 font-semibold">Declined</td>
                      <td className="px-4 py-2">Short notice</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2">Mark Zuck</td>
                      <td className="px-4 py-2">Sick Leave</td>
                      <td className="px-4 py-2">Jul 18 – Jul 20</td>
                      <td className="px-4 py-2 text-yellow-600 font-semibold">Pending</td>
                      <td className="px-4 py-2">Flu recovery</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                href="/PTO.docx"
                download
                className="mt-6 inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Download PTO sheet
              </a>
            </div>

            {/* HR Warning Memo */}
            <div className="p-6 rounded-2xl border border-red-100 bg-gradient-to-br from-white to-red-50 shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-red-800 mb-4">HR Warning Memo Template</h3>

              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <label className="block font-medium text-gray-800">Date</label>
                  <p className="bg-white border border-gray-200 p-2 rounded-md mt-1">July 20, 2025</p>
                </div>

                <div>
                  <label className="block font-medium text-gray-800">Employee Name</label>
                  <p className="bg-white border border-gray-200 p-2 rounded-md mt-1">John Doe</p>
                </div>

                <div>
                  <label className="block font-medium text-gray-800">Violation Description</label>
                  <p className="bg-white border border-gray-200 p-2 rounded-md mt-1">
                    Repeated tardiness and failure to meet scheduled deadlines.
                  </p>
                </div>

                <div>
                  <label className="block font-medium text-gray-800">Supervisor’s Statement</label>
                  <p className="bg-white border border-gray-200 p-2 rounded-md mt-1">
                    This memo serves as a formal warning. The employee has been previously counseled verbally regarding punctuality and task accountability.
                  </p>
                </div>

                <div>
                  <label className="block font-medium text-gray-800">Improvement Expectations & Timeline</label>
                  <p className="bg-white border border-gray-200 p-2 rounded-md mt-1">
                    Immediate and consistent adherence to work schedule and completion of tasks within deadlines. Progress will be reviewed after 30 days.
                  </p>
                </div>
              </div>

              <a
                href="/HR Warning.pdf"
                download
                className="mt-6 inline-block px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Download PDF
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default TeamLeadershipHRSection;
