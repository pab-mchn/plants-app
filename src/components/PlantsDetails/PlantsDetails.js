import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PlantsDetails.css";

function PlantsDetails() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios(`https://randomapiplants.herokuapp.com/plants/${id}`).then((res) =>
      setDetail(res.data)
    );
  }, []);
  console.log(detail);

  return (
    <div class='containerHome' key={detail.id}>
      <div class='card'>
        <div class='card__header'>
          <img src={detail.image} alt='Monstera Picture' />
        </div>
        <div class='card__body'>
          <h3>{detail.name}</h3>
          <p>
            <span>Lighting:</span> {detail.lighting}
          </p>
          <p>
            <span>Watering:</span> {detail.watering}
          </p>
          <p>
            <span>Temperature:</span> {detail.temperature}
          </p>
          <p>
            <span>Humidity:</span> {detail.humidity}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlantsDetails;
