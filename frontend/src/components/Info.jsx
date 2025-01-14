import React from 'react'
import { ReactComponent as LinkedinLogo } from '../logos/linkedin.svg'
import { ReactComponent as ResumeLogo } from '../logos/resume.svg'
import { ReactComponent as GithubLogo } from '../logos/github.svg'
import { ReactComponent as EmailLogo } from '../logos/mail.svg'

const Info = ({ isLight, personalData }) => {
    const titleText = personalData[0].properties.Title.title[0]?.plain_text || "Untitled";
    const desc1 = personalData[0].properties.Description1.rich_text[0]?.plain_text || "No description available";
    const desc2 = personalData[0].properties.Description2.rich_text[0]?.plain_text || "No description available";
    const githubUrl = personalData[0].properties.Github.url || "";
    const linkedinUrl = personalData[0].properties.Linkedin.url || "";
    // const resumePdf = personalData[0].properties.Resume.files[0]?.file.url || "";
    const email = personalData[0].properties.Email.email || "";
    const imageUrl = personalData[0].cover.file?.url || personalData[0].cover.external.url || "";

    let textColor, reverseColor, tagTextColor, bgColor;
    textColor = isLight ? "text-[#2e313c]" : "text-[#fef8f1c7]";
    bgColor = isLight ? "bg-[#2e313c]" : "bg-[#fef8f1c7]";
    reverseColor = isLight ? "#2e313c" : "#fef8f1c7";
    tagTextColor = isLight ? "text-[#F8F5EF]" : "text-[#292929]";

    // nice point colour : bg-[#5c7ad6] button colour

    return (
        <>  
        <div className='flex flex-row py-12 px-10 justify-between items-center sm:px-14 mb-0 md:mb-12'>

            <div id='info-section' className="flex flex-col items-start text-left ">
                <h1 className={`rajdhani-semibold title-font text-5xl sm:text-8xl mb-4 font-semibold ${textColor}`}>{titleText}
                </h1>
                <p className={`rajdhani-medium mb-8 leading-relaxed ${textColor} text-lg`}>{desc1}<br></br>
                    {desc2}</p>
                <div className="flex justify-start items-end gap-3">
                    {/* <button className={`items-center ${tagTextColor} ${bgColor} flex h-8 px-3 focus:outline-none hover:bg-[#6186E5] rounded text-lg`}>
                        <a href={resumePdf} target='_blank'>
                            <div className='rajdhani-semibold flex flex-row gap-2 text-base items-center'>
                                <ResumeLogo className='w-3' />
                                Resume
                            </div>
                        </a>
                    </button> */}
                    <div className={`flex flex-row gap-2.5 items-end mb-1`}>
                        <a href={githubUrl} target='_blank'>
                            <GithubLogo className={`w-[20px] ${textColor} hover:text-[#2BA60C]`} />
                        </a>
                        <a href={linkedinUrl} target='_blank'>
                            <LinkedinLogo className={`w-[20px] ${textColor} hover:text-[#E45858]`} />
                        </a>
                        <a href={`mailto:${email}`} target='_blank'>
                            <EmailLogo className={`w-[20px] ${textColor} hover:text-[#E4A358]`} />
                        </a>
                    </div>

                </div>
            </div>
            <div className="invisible w-[0px] md:visible md:w-1/3"><img src={imageUrl} alt='CuriousR Logo'></img></div>
        </div>
        </>
    )
}

export default Info
