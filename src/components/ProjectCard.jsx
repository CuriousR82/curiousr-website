import React from 'react'
import strToLogo from './logoUtils';

const ProjectCard = ({ data, projectKey, isLight }) => {
    const projectTitle = data.properties.Name.title[0].plain_text;
    const description = data.properties.Description.rich_text[0].plain_text;
    const githubUrl = data.properties.Github.url;
    const imageUrl = data.cover.file?.url || data.cover.external.url;

    let burgerColor;
    let textColor;
    let shadowColor;

    if (isLight) {
        burgerColor = "bg-[#2e313c]";
        textColor = "text-[#2e313c]";
        shadowColor = "shadow-[0_4px_6px_-1px_rgb(92,122,214)]";
    } else {
        burgerColor = "bg-[#fef8f1c7]";
        textColor = "text-[#fef8f1c7]";
    }

    function toLogo(str) {
        return strToLogo(str, isLight); 
    }

    const tags = data.properties.Tags.multi_select;
    // console.log(tags)

    // svg icon link https://flowbite.com/icons/

    return (
        <>
            <div className={`md:w-80 lg:w-[22rem] mb-12 shadow-[0_0px_25px_-5px_rgba(158,158,158,0.4)] hover:shadow-[0_0px_25px_-5px_rgba(92,122,214,1.0)] transition border border-gray-200 border-opacity-60 rounded-lg`}>
                <div className="flex flex-col h-full overflow-hidden ">
                    {/* <img className=" rounded-t-md lg:h-48  w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"></img> */}
                    <img className="rounded-t-md object-cover w-full" src={imageUrl} alt=""></img>
                    <div className="p-5 flex flex-col h-full justify-between">

                        <div>
                            <h1 className={`title-font text-lg font-medium ${textColor} mb-2`}>{projectTitle}</h1>
                            <p className="leading-relaxed mb-4 text-sm text-[#808080]">{description}</p>
                        </div>

                        <div className="flex items-center justify-between flex-wrap ">
                            <div className={"flex flex-wrap flex-row gap-1 items-center"}>
                                {tags.map((tag) => <p key={tag.id} className={`py-px rounded text-sm text-white`}>{toLogo(tag.name)}</p>)}
                                {/* {console.log("tag rendering")} */}
                            </div>

                            <div className='flex flex-row items-center'>
                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 border-r-2 border-gray-200">

                                    <a className={""} href={`${githubUrl}`} target='_blank'>
                                        <svg class={`w-[22px] h-[22px] ${textColor} hover:text-[#5c7ad6] transition`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <a href={`${githubUrl}`} target='_blank'>
                                        <svg class={`w-[20px] h-[20px] ${textColor} hover:text-[#5c7ad6] transition`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                        </svg>
                                    </a>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProjectCard
