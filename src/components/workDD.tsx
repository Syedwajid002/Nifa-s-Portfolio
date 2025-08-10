import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function WorkSkillsDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="nav-link flex items-center gap-1 focus:outline-none"
            >
                Work & Skills
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

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute z-50 bg-white shadow-md rounded-md mt-2 w-48 border border-gray-200">
                    <NavLink
                        to="/projects"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/skills"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                        Skills
                    </NavLink>
                    <NavLink
                        to="/resume"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                        Resume
                    </NavLink>
                </div>
            )}
        </div>
    );
}
