import React from "react";
import "./InternshipEntry.css";

const InternshipEntry = ({ companyName, role, duration, description, skillsLearned }) => {
  const descriptionPoints = description.split("\n");

  return (
    <div className="internshipEntry">
      <div className="entryTitle">Company Name: {companyName}</div>
      <div className="entryInfo"><strong>Role:</strong> {role}</div>
      <div className="entryInfo"><strong>Duration:</strong> {duration}</div>
      <div className="entryInfo descriptionInfo">
        <strong>Description:</strong>
        <ul className="descriptionList">
          {descriptionPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="entryInfo"><strong>Skills Learned:</strong> {skillsLearned}</div>
    </div>
  );
};

export default InternshipEntry;
