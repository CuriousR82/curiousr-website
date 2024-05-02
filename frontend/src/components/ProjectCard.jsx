import React, { useState} from 'react'
import strToLogo from './logoUtils';
import { ReactComponent as GithubLogo } from '../logos/github.svg'
import { ReactComponent as LinkLogo } from '../logos/link.svg'

const ProjectCard = ({ data, projectKey, isLight }) => {
    const projectTitle = data.properties.Name.title[0]?.plain_text || "Untitled";
    const description = data.properties.Description.rich_text[0]?.plain_text || "No description available";
    const githubUrl = data.properties.Github.url || "";
    const linkUrl = data.properties.Link.url || data.properties.Github.url || "";
    const imageUrl = data.cover.file?.url || data.cover.external.url || "";
    const tags = data.properties.Tags.multi_select;

    let textColor, reverseColor;
    textColor = isLight ? "text-[#2e313c]" : "text-[#fef8f1c7]";
    reverseColor = isLight ? "#2e313c" : "#fef8f1c7";

    function toLogo(str) {
        return strToLogo(str, isLight); 
    }

    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
        setHovered(true)
    };
    const handleMouseLeave = () => {
        setHovered(false)
    };

    return (
        <>
            <div 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                className={`md:w-80 lg:w-[22rem] mb-12 hover:shadow-[0_0px_25px_-5px_rgba(158,158,158,0.4)] transition border-2 rounded-lg ${hovered ? `border-[#2BA60C]` : `border-[${reverseColor}]`}`}
            >
                <div className="flex flex-col h-full overflow-hidden ">
                    <img className="rounded-t-md object-cover w-full" src={imageUrl} alt=""></img>
                    <div className="p-5 flex flex-col h-full justify-between">
                        <div>
                            <h1 className={`rajdhani-semibold title-font text-xl font-medium mb-2 ${hovered ? `text-[#2BA60C]` : textColor}`}>{projectTitle}</h1>
                            <p className={`rajdhani-medium leading-relaxed mb-4 text-sm sm:text-base ${textColor}`}>{description}</p>
                        </div>
                        <div className="flex items-center justify-between flex-wrap ">
                            <div className={"flex flex-wrap flex-row gap-1 items-center"}>
                                {tags.map((tag) => <p key={tag.id} className={`py-px rounded text-sm text-white`}>{toLogo(tag.name)}</p>)}
                                {/* {console.log("tag rendering")} */}
                            </div>

                            <div className='flex flex-row items-center'>
                                <span className={`text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 border-r-2 border-[${reverseColor}]`}>

                                    <a className={""} href={`${githubUrl}`} target='_blank'>
                                        <GithubLogo className={`w-[22px] h-[22px] ${textColor} hover:text-[#2BA60C] transition`} />
                                    </a>
                                </span>
                                <span className={`${textColor} inline-flex items-center leading-none text-sm`}>
                                    <a href={`${linkUrl}`} target='_blank'>
                                        <LinkLogo className={`w-[20px] h-[20px] ${textColor} hover:text-[#2BA60C] transition`} />
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
