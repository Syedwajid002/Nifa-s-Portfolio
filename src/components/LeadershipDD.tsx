import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function LeadershipDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="nav-link flex items-center gap-1 focus:outline-none"
            >
                LeaderShip Tools
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute z-50 bg-white shadow-md rounded-md mt-2 w-56 border border-gray-200">
                    <NavLink
                        to="/coaching"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                        Coaching & Communication
                    </NavLink>
                    <NavLink
                        to="/ethics"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                        Ethics, Systems & Culture
                    </NavLink>
                    <NavLink
                        to="/TeamLeader"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                        Team Leadership & HR Tools
                    </NavLink>
                    <NavLink
                        to="/IsIm"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                        Customer Service & Incident Toolkit
                    </NavLink>
                    <NavLink
                        to="/kpi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                        KPI & Budget Tools
                    </NavLink>
                    <NavLink
                        to="/summary"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                        Summary
                    </NavLink>
                </div>
            )}
        </div>
    );
}
