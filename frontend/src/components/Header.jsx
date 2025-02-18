/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import { Squash as Hamburger } from 'hamburger-react'
import { ReactComponent as LinkedinLogo } from '../logos/linkedin.svg'
import { ReactComponent as ResumeLogo } from '../logos/resume.svg'
import { ReactComponent as GithubLogo } from '../logos/github.svg'
import { ReactComponent as EmailLogo } from '../logos/mail.svg'
import { ReactComponent as MoonLogo } from '../logos/moon.svg'
import { ReactComponent as SunLogo } from '../logos/sun.svg'
import "../App.css"

const Header = ({ toggleMode, isLight, personalData }) => {
    const [mode, setMode] = useState('light');
    const [isOpen, setOpen] = useState(false)

    let textColor;
    textColor = isLight ? "text-[#2e313c]" : "text-[#fef8f1c7]";

    // const resumePdf = personalData[0].properties.Resume.files[0]?.file.url || "";
    const githubUrl = personalData[0].properties.Github.url || "";
    const linkedinUrl = personalData[0].properties.Linkedin.url || "";
    const email = personalData[0].properties.Email.email || "";

    const navigate = useNavigate();
    const toSection = (str) => {
        if (window.location.pathname == '/') {
            // If at the root, scroll to the section
            const element = document.getElementById(str);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(str);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 0);
        }
    };


    return (
        <>
            {/* PC header (md ~) */}
            <header className={`invisible md:visible header-class text-gray-600 body-font ${isLight ? "lightMode" : "darkMode"} z-50`}>
                {/* pc header (md ~) */}
                <div className=" container mx-auto flex flex-wrap px-10 sm:px-14 py-4 flex-row items-center">
                    <a className={`flex title-font font-semibold items-center ${textColor} md:mb-0`}>
                        <span className={`rajdhani-bold text-2xl ${textColor}`}>CuriousR</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">

                        <button onClick={() => toSection("home-section")} className={`rajdhani-semibold mr-5 ${textColor} hover:text-[#6186E5] `}>
                            HOME
                        </button>
                        <button onClick={() => toSection("experience-section")} className={`rajdhani-semibold mr-5 ${textColor} hover:text-[#E45858] `}>
                            EXPERIENCES
                        </button>

                        <button onClick={() => toSection("project-section")} className={`rajdhani-semibold mr-5 ${textColor} hover:text-[#2BA60C]`}>
                            PROJECTS
                        </button>
                        <button onClick={() => toSection("art-section")} className={`rajdhani-semibold mr-5 ${textColor} hover:text-[#E4A358]`}>
                            ART
                        </button>
                    </nav>

                    <span className="flex flex-row gap-3 items-end ">
                        {/* <a href={resumePdf} target='_blank'>
                            <ResumeLogo className={`w-[14px] ${textColor} hover:text-[#6186E5]`} />
                        </a> */}
                        <a href={githubUrl} target='_blank'>
                            <GithubLogo className={`w-[18px] ${textColor} hover:text-[#2BA60C]`} />
                        </a>
                        {/*}
                            <a href={linkedinUrl} target='_blank'>
                                <LinkedinLogo className={`w-[18px] ${textColor} hover:text-[#E45858]`} />
                            </a>
                        */}
                        <a href={`mailto:${email}`} target='_blank'>
                            <EmailLogo className={`w-[18px] ${textColor} hover:text-[#E4A358]`} />
                        </a>
                        <button onClick={toggleMode} className="flex items-center pl-3 border-l border-gray-400">
                            {isLight ? 
                            <MoonLogo className={`w-[14px] ${textColor} hover:opacity-50 mr-1`} /> :
                            <SunLogo className={`w-[18px] ${textColor} hover:opacity-50`} />}
                        </button>
                    </span>
                </div>

            </header>

            {/* mobile header (~ md) */}
            <header className={`visible md:invisible header-class text-gray-600 body-font ${isOpen ? "shadow-[0_0px_25px_-5px_rgba(158,158,158,0.4)]" : ""} 
                                ${isLight ? "lightMode" : "darkMode"} z-50`}>
                <div className="transition container mx-auto flex flex-col px-10 sm:px-14 py-2 gap-3 items-start">
                    <div className="flex flex-row justify-between w-full">
                        <a className={`flex title-font font-semibold items-center ${textColor} mb-0`}>
                            <span className={`rajdhani-bold text-2xl ${textColor}`}>CuriousR</span>
                        </a>

                        <Hamburger toggled={isOpen} toggle={setOpen} color={isLight ? "#2e313c" : "#fef8f1c7"} />
                    </div>

                    {isOpen &&
                        <>
                            <nav className="fade-on-load flex flex-wrap items-center text-base justify-center gap-1">
                                <button onClick={() => toSection("home-section")} className={`rajdhani-semibold mr-5 ${textColor} hover:text-[#6186E5] `}>
                                    HOME
                                </button>
                                <button onClick={() => toSection("experience-section")} className={`rajdhani-semibold mr-5 ${textColor} hover:text-[#E45858] `}>
                                    EXPERIENCES
                                </button>

                                <button onClick={() => toSection("project-section")} className={`rajdhani-semibold mr-5 ${textColor} hover:text-[#2BA60C]`}>
                                    PROJECTS
                                </button>
                                <button onClick={() => toSection("art-section")} className={`rajdhani-semibold mr-5 ${textColor} hover:text-[#E4A358]`}>
                                    ART
                                </button>
                            </nav>

                            <div className="fade-on-load flex flex-row w-full  pb-3 items-center">
                                <span className="flex flex-row gap-3 items-end ">
                                    {/* <a href={resumePdf} target='_blank'>
                                        <ResumeLogo className={`w-[14px] ${textColor} hover:text-[#6186E5]`} />
                                    </a> */}
                                    <a href={githubUrl} target='_blank'>
                                        <GithubLogo className={`w-[18px] ${textColor} hover:text-[#2BA60C]`} />
                                    </a>
                                    {/*
                                        <a href={linkedinUrl} target='_blank'>
                                            <LinkedinLogo className={`w-[18px] ${textColor} hover:text-[#E45858]`} />
                                        </a>
                                    */}
                                    <a href={`mailto:${email}`} target='_blank'>
                                        <EmailLogo className={`w-[18px] ${textColor} hover:text-[#E4A358]`} />
                                    </a>
                                    <button onClick={toggleMode} className="flex items-center pl-3 border-l border-gray-400">
                                        {isLight ? 
                                        <MoonLogo className={`w-[14px] ${textColor} hover:opacity-50 mr-1`} /> :
                                        <SunLogo className={`w-[18px] ${textColor} hover:opacity-50`} />}
                                    </button>
                                </span>
                            </div>
                        </>
                    }
                </div>
            </header>
        </>
    )
}

export default Header
