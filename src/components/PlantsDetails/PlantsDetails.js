import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const imageStyle = {
  width: "240px",
  height: "240px",
};

function PlantsDetails() {
  const { id } = useParams();
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
      <p>{detail.name}</p>
      <p>Lighting : {detail.lighting}</p>
      <p>Irragation: {detail.irrigation}</p>
      <p>Temperature: {detail.temperature}</p>
      <p>Humidity: {detail.humidity}</p>
    </div>
  );
}

export default PlantsDetails;
