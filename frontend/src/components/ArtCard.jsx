import React, { useState } from 'react'

const ArtCard = ({ data, artKey, isLight }) => {
    const projectTitle = data.properties.Name.title[0]?.plain_text || "Untitled"; 
    const description = data.properties.Description.rich_text[0]?.plain_text || "No description available";
    const portfolioUrl = data.properties.Portfolio.url || "";
    const imageUrl = data.cover.file?.url || data.cover.external?.url || "";
    const tags = data.properties.Tags.multi_select;

    let textColor, reverseColor, tagTextColor;
    textColor = isLight ? "text-[#2e313c]" : "text-[#fef8f1c7]";
    reverseColor = isLight ? "#2e313c" : "#fef8f1c7";
    tagTextColor = isLight ? "text-[#F8F5EF]" : "text-[#292929]";

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
                className={`md:w-80 lg:w-[22rem] mb-12 hover:shadow-[0_0px_25px_-5px_rgba(158,158,158,0.4)] transition border-2 rounded-lg ${hovered ? `border-[#E4A358]` : `border-[${reverseColor}]`}`}
            >
                <div className="flex flex-col h-full overflow-hidden ">
                    
                    <img className="rounded-t-md object-cover w-full" src={imageUrl} alt=""></img>
                    <div className="p-5 flex flex-col h-full justify-between">
                        
                        <div>
                            <h1 className={`rajdhani-semibold title-font text-xl font-medium mb-2 ${hovered ? `text-[#E4A358]` : textColor}`}>{projectTitle}</h1>
                            <p className={`rajdhani-medium leading-relaxed mb-4 text-sm sm:text-base ${textColor}`}>{description}</p>
                        </div>


                        <div className="flex items-center justify-between flex-wrap ">
                            <div className={"flex flex-wrap flex-row gap-1"}>
                                {tags.map((tag) => <p className={`rajdhani-semibold py-[2px] p-1.5 rounded text-xs ${tagTextColor} bg-[${reverseColor}]`}>{tag.name}</p>)}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ArtCard
