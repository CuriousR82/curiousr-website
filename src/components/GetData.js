import React, { useState, useEffect } from 'react';
import '../FetchNotion'; // Import the Notion API script file

const NotionComponent = () => {

    const [notionData, setNotionData] = useState([]);
    const [objectId, setObjectId] = useState('');

    useEffect(() => {
        async function fetchData() {
            // try {
            //   const result = await queryDatabase(databaseId);
            //   console.log(result);
            // } catch (error) {
            //   console.error(error);
            // }
            try {
                const result = await queryDatabase(databaseId);
                setNotionData(result);

                // Extract the objectId from the first item in the result (assuming it's an array)
                if (result.length > 0) {
                    setObjectId(result[0].id);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchData(); // Call the function to fetch data when the component mounts
    }, []);

    return (
        // Your component JSX here
        <>
            <p>Object ID: {objectId}</p>
        </>
    );
};

export default NotionComponent;
