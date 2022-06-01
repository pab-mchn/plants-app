import React from "react";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../context/DataContext";
import { useParams } from "react-router-dom";
import axios from "axios";

const imageStyle = {
  width: "240px",
  height: "240px",
};

function PlantsDetails() {
  const { id } = useParams();
  const { data } = useContext(dataContext);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios(`http://localhost:3000/plants/${id}`).then((res) =>
      setDetail(res.data)
    );
  }, []);
  console.log(detail);

  return (
    <div className='plantsCard' key={detail.id}>
      <img style={imageStyle} src={detail.image} alt='Monstera Picture' />
      <h5>{detail.name}</h5>
    </div>
  );
}

export default PlantsDetails;
