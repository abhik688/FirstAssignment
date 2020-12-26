import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Data = (props)=>{
    const [prismicData, setPrismicData] = useState({ homeDoc: null });
    const [notFound, toggleNotFound] = useState(false);

    useEffect(() => {
        const fetchPrismicData = async () => {
          try {
            const homeDoc = await axios.get('https://api.spacexdata.com/v3/launches?limit=100')
            .then((responce)=>{
             console.log('axios',responce);
            });
            if (homeDoc) {
              setPrismicData({homeDoc});
            } else {
              console.warn('Data not found');
              toggleNotFound(true);
            }
          } catch (error) {
            console.error(error); 
            toggleNotFound(true);
          }
        }
        fetchPrismicData();
      }, []);

    return(
        <div>

        </div>
    );
}

export default Data;
