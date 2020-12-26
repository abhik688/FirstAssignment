import React, { useEffect, useState } from "react";
// import moment from "moment";
import "./Card.css";
import axios from "axios";

const Spacex = (props) => {
  const [selectedYearData, setSelectedYearData] = useState([]);

  const [notFound, toggleNotFound] = useState(false);

  useEffect(() => {
    try {
      getMissionData({
        launch_success: props.successfulLaunch,
        land_success: props.successfulLanding,
        launch_year: props.selectedYear,
      });
    } catch (error) {
      console.error(error);
      toggleNotFound(true);
    }
  }, [props.selectedYear, props.successfulLanding, props.successfulLaunch]);

  const getMissionData = async (params) => {
    const homeDoc = await axios.get(
      `https://api.spacexdata.com/v3/launches?limit=100&${serialize(params)}`
    );
    console.log(homeDoc,'homeDoc')
    setSelectedYearData(homeDoc.data);
  };

  const serialize = (obj) => {
    const str = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        if (typeof obj[p] === "boolean" || obj[p] === 0 || obj[p]) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
      }
    }
    return str.join("&");
  };

  return (
    <div className="App">
     <div className="row">
      {selectedYearData.map((data) => (
        <div className="col-xl-3 col-lg-4 mb-3 col-md-6 col-sm-12">
        <div className="card-deck"> 
          <div className="card">
            <img
              className="card-img-top"
              src={data.links && data.links.mission_patch}
              alt="Card cap"
            />
            <div className="card-body">
              <h6 className="card-title">{data.mission_name}</h6>
              <p className="card-text">
                {" "}
                <strong>Mission Ids.</strong> <span>list Mission Ids</span>{" "}
              </p>
              <p>
                <strong>Launch Year:</strong>
                <span>
                  {new Date(data.launch_date_unix * 1000).getFullYear()}
                </span>{" "}
              </p>
              <p>
                <strong>Successful Launch:</strong>
                <span>{data.launch_year}</span>
              </p>
              <p>
                <strong>Successful Landing:</strong> <span>Yes</span>{" "}
              </p>
            </div>
          </div>
          </div>  
        </div>
      ))}
    </div>
    </div>
  );
};

export default Spacex;
