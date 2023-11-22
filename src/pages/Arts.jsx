import { Client } from '@notionhq/client';
import React, { useState, useEffect } from "react";
import ArtSection from '../components/ArtSection';


const Arts = ({ isLight, numItem }) => {
    

    return (

        <>
            <ArtSection isLight={isLight} numItem={numItem} />
        </>
    );
};

export default Arts;
