/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import { Squash as Hamburger } from 'hamburger-react'
import "../App.css"

const Header = ({ toggleMode, isLight }) => {
    const [mode, setMode] = useState('light');
    const [isOpen, setOpen] = useState(false)

    let burgerColor;
    let textColor;

    if (isLight) {
        burgerColor = "bg-[#2e313c]";
        textColor = "text-[#2e313c]";
    } else {
        burgerColor = "bg-[#fef8f1c7]";
        textColor = "text-[#fef8f1c7]";
    }

    return (
        <>
            {/* PC header (md ~) */}
            <header className={`invisible md:visible header-class text-gray-600 body-font ${isLight ? "lightMode" : "darkMode"} z-20`}>
                {/* pc header (md ~) */}
                <div className=" container mx-auto flex flex-wrap px-12 py-4 flex-row items-center">
                    <a className={`flex title-font font-semibold items-center ${textColor} md:mb-0`}>
                        <span className="text-2xl text-[#5c7ad6]">CuriousR</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                        <NavLink to="/" className={` mr-5 ${textColor} hover:text-[#5c7ad6] mr-5`}>
                            HOME
                        </NavLink>
                        <NavLink to="/projects" className={` mr-5 ${textColor} hover:text-[#5c7ad6]`}>
                            PROJECTS
                        </NavLink>
                        <NavLink to="/art" className={` mr-5 ${textColor} hover:text-[#5c7ad6]`}>
                            ART
                        </NavLink>
                        {/* <a className="mr-5 hover:text-gray-900">Second Link</a>
                    <a className="mr-5 hover:text-gray-900">Third Link</a>
                    <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
                    </nav>

                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-600">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-600">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-600">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 mr-5 text-gray-600">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>

                    <button onClick={toggleMode} className="flex items-center">
                        <DarkModeToggle
                            mode={mode}
                            size="sm"
                            inactiveTrackColor="#e2e8f0"
                            inactiveTrackColorOnHover="#f8fafc"
                            inactiveTrackColorOnActive="#cbd5e1"
                            activeTrackColor="#334155"
                            activeTrackColorOnHover="#1e293b"
                            activeTrackColorOnActive="#0f172a"
                            inactiveThumbColor="#1e293b"
                            activeThumbColor="#e2e8f0"
                            onChange={(mode) => {
                                setMode(mode);
                            }}
                        />
                    </button>
                </div>


            </header>

            {/* mobile header (~ md) */}
            <header className={`visible md:invisible header-class text-gray-600 body-font ${isLight ? "lightMode" : "darkMode"} z-20`}>
                <div className="transition container mx-auto flex flex-col px-12 py-4 gap-3 items-start">
                    <div className="flex flex-row justify-between w-full">
                        <a className={`flex title-font font-semibold items-center ${textColor} mb-0`}>
                            <span className="text-2xl text-[#5c7ad6]">CuriousR</span>
                        </a>

                        <Hamburger toggled={isOpen} toggle={setOpen} color={isLight ? "#2e313c" : "#fef8f1c7"} />
                    </div>

                    {isOpen &&
                        <>
                            <nav className="fade-on-load flex flex-wrap items-center text-base justify-center gap-4">
                                <NavLink to="/" className={`${textColor} hover:text-[#5c7ad6]`}>
                                    HOME
                                </NavLink>
                                <NavLink to="/projects" className={`${textColor} hover:text-[#5c7ad6]`}>
                                    PROJECTS
                                </NavLink>
                                <NavLink to="/art" className={`${textColor} hover:text-[#5c7ad6]`}>
                                    ART
                                </NavLink>
                            </nav>

                            <div className="fade-on-load flex flex-row w-full justify-between items-center">
                                <div className="flex flex-row gap-3 items-center">
                                    <a className="text-gray-600">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-600">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-600">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                    <a className=" text-gray-600">
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                        </svg>
                                    </a>
                                </div>

                                <button onClick={toggleMode} className="flex items-center">
                                    <DarkModeToggle
                                        mode={mode}
                                        size="sm"
                                        inactiveTrackColor="#e2e8f0"
                                        inactiveTrackColorOnHover="#f8fafc"
                                        inactiveTrackColorOnActive="#cbd5e1"
                                        activeTrackColor="#334155"
                                        activeTrackColorOnHover="#1e293b"
                                        activeTrackColorOnActive="#0f172a"
                                        inactiveThumbColor="#1e293b"
                                        activeThumbColor="#e2e8f0"
                                        onChange={(mode) => {
                                            setMode(mode);
                                        }}
                                    />
                                </button>
                            </div>
                        </>
                    }
                </div>
            </header>
        </>
    )
}

export default Header
