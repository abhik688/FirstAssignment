import "./Filter.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Filter = (props) => {
  const years = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];

  const onSuccessfulLaunch = (param) => {
    props.setSuccessfulLaunch(param);
  };

  const onSuccessfulLanding = (param) => {
    props.setSuccessfulLanding(param);
  };

  return (
    <div className="filter card">
      <h4>Filter</h4>
      <h5>Launch Year</h5>
      <div className="">
        <Router>
          <Link to={{ pathname: "/" }}>
            {years.map((year) => (
              <button
                onClick={() => props.setSelectedYear(year)}
                className={props.selectedYear === year ? "btn_hover col-5 mx-1" : "btn col-5 mx-1"}
              >
                {year}
              </button>
            ))}
          </Link>
        </Router>
      </div>
      <h5>Successful Launch</h5>
      <div>
        <button
          onClick={() => onSuccessfulLaunch(true)}
          className={props.successfulLaunch === true ? "btn info btn_hover col-5 mx-1" : "btn info col-5 mx-1"}
        >
          True
        </button>
        <button
          onClick={() => onSuccessfulLaunch(false)}
          className={props.successfulLaunch === true ? "btn info btn_hover col-5 mx-1" : "btn info col-5 mx-1"}
        >
          False
        </button>
      </div>
      <h5>Successful Landing</h5>
      <div>
        <button
          onClick={() => onSuccessfulLanding(true)}
          className="btn btn_hover col-5 mx-1"
        >
          True
        </button>
        <button
          onClick={() => onSuccessfulLanding(false)}
          className="btn btn_hover col-5 mx-1"
        >
          False
        </button>
      </div>
    </div>
  );
};

export default Filter;
