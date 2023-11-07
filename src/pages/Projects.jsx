import { Client } from '@notionhq/client';
import React, { useState, useEffect} from "react";


const Projects = ({ isLight }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:4000/project-data')
            .then((response) => {
                // console.log("response")
                // console.log(response)
                response.json().then((dataFromServer) => {
                    // console.log("data")
                    // console.log(dataFromServer.results)
                    setData(dataFromServer.results);
                })
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

  return (
    <div>
        {/* <GetData /> */}
        {/* <NotionComponent/> */}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet excepturi
        dolore minima laborum necessitatibus modi velit eligendi placeat
        quisquam quibusdam nam vitae qui quis adipisci iure porro distinctio,
        incidunt perferendis iusto tempora similique ipsam nostrum commodi!
        Impedit hic soluta distinctio totam minima repellat aspernatur.
        Repellendus, autem minima nesciunt deleniti odio temporibus eligendi ut
        facere iste possimus accusantium quisquam aspernatur et quod maxime ea
        molestiae recusandae deserunt repudiandae quam est voluptate! Distinctio
        ut, blanditiis perferendis optio alias culpa ratione saepe? Repudiandae
        aut consequuntur corporis neque, explicabo voluptatibus odit sint eaque?
        Magnam dolore tempore animi at culpa necessitatibus amet eveniet?
        Voluptate, repudiandae?
      </div>
      {loading &&
      data.map((item) => {
        // console.log(item)
        return (<p key={item.id}>{item.id}</p>)
      })
    //   "loaded"
      }
      <br />
    </div>
  );
};

export default Projects;
