import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
          Meet the dedicated individuals driving our mission forward.
          </p>
        </div>
        <div id="row" className="row">
  {/* Rendering the first three blocks */}
  {props.data && props.data.length >= 3 && props.data.slice(0, 3).map((d, i) => (
    <div key={`${d.name}-${i}`} className="col-lg-4 col-md-4 col-sm-6 team">
      <div className="thumbnail">
        <img src={d.img} alt="..." className="team-img" />
        <div className="caption">
          <h4>{d.name}</h4>
          <p>{d.job}</p>
        </div>
      </div>
    </div>
  ))}
  {/* Rendering the additional blocks or placeholders */}
  {Array.from({ length: 1 }).map((_, i) => (
    <div key={`placeholder-${i}`} className="col-lg-6 col-md-6 col-sm-6 team">
      <div className="thumbnail">
        <img src="/img/team/gauravp.jpg" alt="..." className="team-img" />
        <div className="caption">
          <h4>Gaurav Khandelwal</h4>
          <p></p>
        </div>
      </div>
    </div>
  ))}
   {Array.from({ length: 1 }).map((_, i) => (
    <div key={`placeholder-${i}`} className="col-lg-6 col-md-6 col-sm-6 team">
      <div className="thumbnail">
        <img src="/img/team/jagratip.jpg" alt="..." className="team-img" />
        <div className="caption">
          <h4>Jagrati Pareek</h4>
          <p></p>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};
