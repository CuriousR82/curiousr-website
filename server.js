const express = require('express');
const { Client } = require('@notionhq/client');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors')

const notion = new Client({
  auth: process.env.REACT_APP_NOTION_API_KEY,
});

app.use(cors())

// Projects
app.get('/project-data', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
  try {
    const response = await notion.databases.query({
      database_id: process.env.REACT_APP_PROJECTS_DATABASE_ID,
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Arts
app.get('/art-data', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
  try {
    const response = await notion.databases.query({
      database_id: process.env.REACT_APP_ARTS_DATABASE_ID,
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
