import { Client } from '@notionhq/client';
import React, { useState, useEffect } from "react";
import ArtSection from '../components/ArtSection';


const Arts = ({ isLight, artData }) => { // retrieves the whole array of data form App.jsx

    return (

        <section className='min-h-screen'>
            <ArtSection isLight={isLight} numItem={-1} artData={artData} /> {/* sends the whole data to ArtSection */ }
        </section>
    );
};

export default Arts;
