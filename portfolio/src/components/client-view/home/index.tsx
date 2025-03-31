"use client";
import React from "react";

interface ClientHomeViewProps {
  data: any[];
}

const ClientHomeView: React.FC<ClientHomeViewProps> = ({ data }) => {
  return (
    <div>
      <h1>ClientHomeView</h1>
    </div>
  );
};

export default ClientHomeView;
