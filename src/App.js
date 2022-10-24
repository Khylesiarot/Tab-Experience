import React, { useState, useEffect } from "react";

const url = "https://course-api.com/react-tabs-project";
const loadState = true;

const App = () => {
  const [loading, setLoading] = useState(loadState);
  const [info, setInfo] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const newJobs = await reponse.json();
    setInfo(newJobs);
    setLoading(!loadState);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="loading">
        <h1>Loading....</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = info[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-infos">
        <div className="btn-container">
          {info.map((item, order) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(order)}
                className={`job-btn ${order === value && "active-btn"}`}>
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, order) => {
            return (
              <div key={order} className="job-desc">
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
