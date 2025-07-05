import React from "react";
import { motion } from "framer-motion";

const downloadFile = (filename: string, content: string, type: string) => {
    const blob = new Blob([content], { type });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


interface KPIItem {
    name: string;
    unit: string;
    weekly: number[];
    goal: string;
}

interface BudgetItem {
    category: string;
    item: string;
    cost: string;
    purpose: string;
}

const kpiData: KPIItem[] = [
    {
        name: "Avg. Ticket Resolution Time",
        unit: "Hours",
        weekly: [3.5, 3.2, 2.8, 2.5],
        goal: "↓ under 3h",
    },
    {
        name: "Customer Satisfaction Score",
        unit: "%",
        weekly: [90, 92, 95, 93],
        goal: "↑ 90%+",
    },
    {
        name: "System Uptime",
        unit: "%",
        weekly: [99.5, 99.7, 99.9, 99.8],
        goal: "↑ 99.5%+",
    },
];

const budgetData: BudgetItem[] = [
    {
        category: "Software",
        item: "Zoom Pro License",
        cost: "$15/month",
        purpose: "Team virtual meetings",
    },
    {
        category: "Training",
        item: "LinkedIn Learning Subscription",
        cost: "$25/month",
        purpose: "Team skill enhancement",
    },
    {
        category: "Hardware",
        item: "Helpdesk Chairs",
        cost: "$100 each",
        purpose: "Comfortable seating for IT staff",
    },
];

const KPIBudgetTools: React.FC = () => {
    return (
        <section className="bg-white text-gray-800 p-6 sm:p-10 rounded-2xl shadow-lg border border-blue-100 max-w-6xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-blue-700 mb-8 border-b pb-2"
            >
                KPI & Budget Tools
            </motion.h1>

            {/* KPI Dashboard */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">KPI Dashboard</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left border border-gray-200">
                        <thead className="bg-blue-100 text-blue-700">
                            <tr>
                                <th className="p-3">KPI Name</th>
                                <th className="p-3">Unit</th>
                                <th className="p-3">Week 1</th>
                                <th className="p-3">Week 2</th>
                                <th className="p-3">Week 3</th>
                                <th className="p-3">Week 4</th>
                                <th className="p-3">Goal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {kpiData.map((kpi, index) => (
                                <tr key={index} className="border-t hover:bg-blue-50">
                                    <td className="p-3 font-medium">{kpi.name}</td>
                                    <td className="p-3">{kpi.unit}</td>
                                    {kpi.weekly.map((val, i) => (
                                        <td key={i} className="p-3">
                                            {val}
                                        </td>
                                    ))}
                                    <td className="p-3 font-semibold text-blue-600">{kpi.goal}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button
                    onClick={() => {
                        const csv = kpiData
                            .map((kpi) =>
                                [kpi.name, kpi.unit, ...kpi.weekly, kpi.goal].join(",")
                            )
                            .join("\n");
                        const header = "KPI Name,Unit,Week 1,Week 2,Week 3,Week 4,Goal\n";
                        downloadFile("kpi-dashboard.csv", header + csv, "text/csv");
                    }}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Download KPI Dashboard
                </button>
            </motion.div>


            {/* Budget Plan */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-12"
            >
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Mini Budget Plan</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left border border-gray-200">
                        <thead className="bg-blue-100 text-blue-700">
                            <tr>
                                <th className="p-3">Category</th>
                                <th className="p-3">Item</th>
                                <th className="p-3">Cost</th>
                                <th className="p-3">Purpose</th>
                            </tr>
                        </thead>
                        <tbody>
                            {budgetData.map((item, index) => (
                                <tr key={index} className="border-t hover:bg-blue-50">
                                    <td className="p-3">{item.category}</td>
                                    <td className="p-3 font-medium">{item.item}</td>
                                    <td className="p-3">{item.cost}</td>
                                    <td className="p-3">{item.purpose}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button
                    onClick={() => {
                        const csv = budgetData
                            .map((item) =>
                                [item.category, item.item, item.cost, item.purpose].join(",")
                            )
                            .join("\n");
                        const header = "Category,Item,Cost,Purpose\n";
                        downloadFile("mini-budget-plan.csv", header + csv, "text/csv");
                    }}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Download Budget Plan
                </button>
            </motion.div>


            {/* Summary Report */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-blue-50 p-6 rounded-xl border border-blue-200"
            >
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Monthly Supervisor Summary Report</h2>
                <p className="mb-4">
                    Over the past month, our team has shown consistent improvement in key performance areas. The average ticket resolution time dropped steadily from 3.5 hours to 2.5 hours, reflecting enhanced efficiency. Customer satisfaction remained above 90%, showing strong service quality. System uptime also exceeded 99.5%, meeting our infrastructure reliability targets.
                </p>
                <p className="mb-4">
                    Our mini budget was strategically allocated to essential resources. Investment in Zoom Pro and LinkedIn Learning supported communication and training, while ergonomic helpdesk chairs improved staff comfort and productivity. Each expense was justified to support better performance.
                </p>
                <p>
                    For the upcoming month, we aim to reduce ticket resolution time further and conduct internal workshops to boost first-contact resolution. Additional training investments and proactive infrastructure checks will support these goals.
                </p>
                <button
                    onClick={() => {
                        const summaryText = `Monthly Supervisor Summary Report

Over the past month, our team has shown consistent improvement in key performance areas. The average ticket resolution time dropped steadily from 3.5 hours to 2.5 hours, reflecting enhanced efficiency. Customer satisfaction remained above 90%, showing strong service quality. System uptime also exceeded 99.5%, meeting our infrastructure reliability targets.

Our mini budget was strategically allocated to essential resources. Investment in Zoom Pro and LinkedIn Learning supported communication and training, while ergonomic helpdesk chairs improved staff comfort and productivity. Each expense was justified to support better performance.

For the upcoming month, we aim to reduce ticket resolution time further and conduct internal workshops to boost first-contact resolution. Additional training investments and proactive infrastructure checks will support these goals.
`;
                        downloadFile("monthly-summary.txt", summaryText, "text/plain");
                    }}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Download Summary Report
                </button>
            </motion.div>

        </section>
    );
};

export default KPIBudgetTools;
