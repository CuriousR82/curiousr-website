const dotenv = require('dotenv');
const { Client } = require('@notionhq/client');
dotenv.config();

// const notion = new Client({ auth: process.env.REACT_APP_NOTION_API_KEY });
const databaseId = process.env.REACT_APP_PROJECTS_DATABASE_ID;
console.log(process.env.REACT_APP_NOTION_API_KEY);
console.log(databaseId);

// "node ./src/FetchNotion.js" to run!!!

const notion = new Client({ auth: process.env.REACT_APP_NOTION_API_KEY });

async function queryDatabase(databaseId) {
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            "sorts": [
                {
                    "property": 'Date',
                    "direction": 'descending',
                },
            ],
        });

        return response.results;

    } catch (error) {
        console.log(error.body);
    }
}

queryDatabase(databaseId)
    .then(result => {
        console.log(result);
    });

// const projectIds =  response.results.map((project) => (
//     project.id
// ))

    // (async () => {
//     try {
//         const response = await notion.databases.query({
//             database_id: databaseId,
//             "sorts": [
//                 {
//                     "property": 'Date',
//                     "direction": 'descending',
//                 },
//             ],
//         });

//         // const projectIds =  response.results.map((project) => (
//         //     project.id
//         // ))

//         return response.results;

//     } catch (error) {
//         console.log(error.body);
//     }
// })();