import React from "react";

export default function CustomNavbar({ activeTab, setActiveTab }) {
    const navItems = [
        { key: "home", label: "Home" },
        { key: "about", label: "About Our Solution" },
        { key: "news", label: "News" },
        { key: "contact", label: "Contact Us" },
        { key: "documents", label: "CS491/2 Documents" },
    ];

    return (
        <nav className="w-full h-24 bg-white fixed top-0 left-0 shadow-sm z-50 flex items-center justify-between px-6">
            <div className="flex items-center">
                <div className="relative h-28 w-40">
                    <img
                        src={`${import.meta.env.BASE_URL}static/yodai-logo.png`}
                        alt="YOD-AI Logo"
                        className="absolute inset-0 w-full h-full object-contain"
                    />
                </div>
            </div>
            <ul className="flex gap-6">
                {navItems.map((item) => (
                    <li
                        key={item.key}
                        onClick={() => setActiveTab(item.key)}
                        className={`cursor-pointer text-lg font-bold transition-colors duration-200 hover:text-[#EDA19A] ${
                            activeTab === item.key ? "text-[#DB4437]" : "text-black"
                        }`}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
