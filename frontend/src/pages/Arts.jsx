import { Client } from '@notionhq/client';
import React, { useState, useEffect } from "react";
import ArtSection from '../components/ArtSection';


const Arts = ({ isLight, artData }) => { // retrieves the whole array of data form App.jsx
    let textColor;
    textColor = isLight ? "text-[#2e313c]" : "text-[#fef8f1c7]";

    return (

        <section className='min-h-screen pt-32 pb-40 '>
            <div className=" container mx-auto flex flex-row justify-between items-center px-10 sm:px-14">
                <h1 className={`rajdhani-bold text-3xl font-semibold ${textColor}`}>Arts</h1>
            </div>
            <ArtSection isLight={isLight} numItem={-1} artData={artData} /> {/* sends the whole data to ArtSection */}
        </section>
    );
};

export default Arts;
