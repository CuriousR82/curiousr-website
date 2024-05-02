import React, { useState } from 'react'

const ExperienceCard = ({ isLight, exp }) => {
    const companyName = exp.properties.Company.rich_text[0]?.plain_text || "Untitled";
    const positionName = exp.properties.Title.title[0]?.plain_text || "No title";
    const location = exp.properties.Location.rich_text[0]?.plain_text || "No location";
    const description = exp.properties.Description.rich_text[0]?.plain_text || "No description available";
    const imageUrl = exp.cover.file?.url || exp.cover.external?.url || "";
    const skills = exp.properties.Skills.multi_select || [];
    const startDate = exp.properties.Date.date.start || "Incoming";
    const endDate = exp.properties.Date.date.end || "Present";

    function formatDate(start, end) {
        const [startYear, startMonth] = start.split('-');
        const [endYear, endMonth] = end.split('-');
        const months = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];

        let formattedStart = `${months[Number(startMonth) - 1]} ${startYear}`;
        let formattedEnd = `${months[Number(endMonth) - 1]} ${endYear}`;

        if (endDate == "Present") { formattedEnd = "Present"; }

        return `${formattedStart} - ${formattedEnd}`;
    }

    let formattedDate = (startDate == endDate ? "Incoming" : formatDate(startDate, endDate));
    // if (startDate == endDate) { formattedDate = "Incoming"; }
    // else { formattedDate = formatDate(startDate, endDate); }


    let textColor, buttonColor, reverseColor, tagTextColor;
    textColor = isLight ? "text-[#2e313c]" : "text-[#fef8f1c7]";
    buttonColor = isLight ? "border-[#2e313c]" : "border-[#fef8f1c7]";
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
                className="flex relative pt-4 pb-16 sm:items-center md:w-2/3 "
            >
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className={`h-full w-px bg-[#808080] pointer-events-none z-10 opacity-50`}></div>
                </div>

                <div className='flex flex-row items-start'>
                    <div className={`flex-shrink-0 w-4 h-4 rounded-full mt-8 sm:mt-7 inline-flex items-center justify-center ${hovered ? `bg-[#E45858]` :  `bg-[${reverseColor}]`} relative left-1 z-40 title-font font-medium text-sm`}></div>

                    <div className="flex-grow px-6 flex sm:items-start flex-col sm:flex-row">
                        <img className={`rounded-md object-cover w-16 h-16 border-2 ${hovered ? `border-[#E45858]` :  `${buttonColor}`}`} src={imageUrl} alt=""></img>
                        <div className="flex-grow sm:pl-5 mt-4 sm:mt-0">
                            <p className={`rajdhani-medium leading-relaxed text-sm ${textColor} opacity-60`}>{formattedDate}</p>
                            <h2 className={`rajdhani-semibold title-font ${hovered ? `text-[#E45858]` : textColor} mb-1 text-2xl`}>{companyName}</h2>
                            <h3 className={`rajdhani-semibold title-font ${textColor} mb-1 text-lg`}>{positionName}</h3>
                            <p className={`rajdhani-medium italic leading-relaxed text-sm ${textColor} mb-2 opacity-60`}>{location}</p>
                            <p className={`rajdhani-medium leading-relaxed text-base ${textColor} mb-3`}>{description}</p>
                            <div className={"flex flex-wrap flex-row gap-1"}>
                                {skills.map((skill) => <p className={`rajdhani-semibold py-[2px] p-1.5 rounded text-xs ${tagTextColor} bg-[${reverseColor}]`}>{skill.name}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExperienceCard
