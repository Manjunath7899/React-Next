"use client";
import React from "react";

interface ClientExperieanceAndEducationView {
  experienceData: any[];
  educationData: any[];
}

const ClientExperieanceAndEducationView: React.FC<
  ClientExperieanceAndEducationView
> = ({ experienceData, educationData }) => {
  return (
    <div>
      <h1>ClientExperieanceAndEducationView</h1>
    </div>
  );
};

export default ClientExperieanceAndEducationView;
