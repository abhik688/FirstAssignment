import React, { useState } from "react";

//import Spacex from './Component/Spacex';
import FilterButton from "./Component/FilterButton";
import SpaceCard from "./Component/SpaceCard";
import Footer from "./Component/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [selectedYear, setSelectedYear] = useState("2014");
  const [successfulLaunch, setSuccessfulLaunch] = useState(true);
  const [successfulLanding, setSuccessfulLanding] = useState(true);

  return (
    <div className="container containerpart ">
      <h3 className="py-3">SpaceX Launch Programme</h3>
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
          <FilterButton
            setSelectedYear={setSelectedYear}
            setSuccessfulLaunch={setSuccessfulLaunch}
            setSuccessfulLanding={setSuccessfulLanding}
            selectedYear={selectedYear}
            successfulLaunch={successfulLaunch}
            successfulLanding={successfulLanding}
          />
        </div>
        <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12">
          <SpaceCard
            selectedYear={selectedYear}
            successfulLaunch={successfulLaunch}
            successfulLanding={successfulLanding}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
