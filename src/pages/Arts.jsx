import { Client } from '@notionhq/client';
import React, { useState, useEffect } from "react";
import ArtSection from '../components/ArtSection';


const Arts = ({ isLight }) => {
    

    return (

        <section className='min-h-screen'>
            <ArtSection isLight={isLight} numItem={-1} />
        </section>
    );
};

export default Arts;
