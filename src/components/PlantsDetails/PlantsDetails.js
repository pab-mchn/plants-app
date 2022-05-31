import React from "react";
import { useParams } from "react-router-dom";

function PlantsDetails() {
  const { id, name } = useParams();

  return <div>{id}</div>;
}

export default PlantsDetails;
