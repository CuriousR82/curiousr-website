import React from 'react'
import { ReactComponent as LinkedinLogo } from '../logos/linkedin.svg'
import { ReactComponent as ResumeLogo } from '../logos/resume.svg'
import { ReactComponent as GithubLogo } from '../logos/github.svg'
import { ReactComponent as EmailLogo } from '../logos/mail.svg'

const Info = ({ isLight, personalData }) => {
    const titleText = personalData[0].properties.Title.title[0].plain_text;
    const desc1 = personalData[0].properties.Description1.rich_text[0].plain_text;
    const desc2 = personalData[0].properties.Description2.rich_text[0].plain_text;
    const githubUrl = personalData[0].properties.Github.url;
    const linkedinUrl = personalData[0].properties.Linkedin.url;
    const resumePdf = personalData[0].properties.Resume.files[0].file.url;
    const email = personalData[0].properties.Email.email;
    const imageUrl = personalData[0].cover.file?.url || personalData[0].cover.external.url;

    let burgerColor;
    let textColor;

    if (isLight) {
        burgerColor = "bg-[#2e313c]";
        textColor = "text-[#2e313c]";
    } else {
        burgerColor = "bg-[#fef8f1c7]";
        textColor = "text-[#fef8f1c7]";
    }

    // nice point colour : bg-[#5c7ad6] button colour

    return (
        <>  
        <div className='flex flex-row py-18 px-10 justify-between items-center sm:px-14 mb-0 md:mb-12'>

            <div id='info-section' className="flex flex-col items-start text-left ">
                <h1 className={`title-font text-5xl mb-4 font-semibold ${textColor}`}>{titleText}
                </h1>
                <p className="mb-8 leading-relaxed text-[#808080] text-base ">{desc1}<br></br>
                    {desc2}</p>
                <div className="flex justify-start items-end gap-3">
                    <button className="items-center text-white bg-[#5c7ad6] flex border-0 h-8 px-3 focus:outline-none hover:bg-[#808080] rounded text-lg">
                        <a href={resumePdf} target='_blank'>
                            <div className='flex flex-row gap-2 text-base items-center'>
                                <ResumeLogo className='w-3' />
                                Resume
                            </div>
                        </a>
                    </button>
                    <div className={`flex flex-row gap-2.5 items-end mb-1`}>
                        <a href={githubUrl} target='_blank'>
                            <GithubLogo className={`w-[20px] ${textColor} hover:text-[#5c7ad6]`} />
                        </a>
                        <a href={linkedinUrl} target='_blank'>
                            <LinkedinLogo className={`w-[20px] ${textColor} hover:text-[#5c7ad6]`} />
                        </a>
                        <a href={`mailto:${email}`} target='_blank'>
                            <EmailLogo className={`w-[20px] ${textColor} hover:text-[#5c7ad6]`} />
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
