import { useState, useContext } from "react";
import { dataContext } from "../context/DataContext";
import { Link } from "react-router-dom";

import "./Checkbox.css";

//mapear categorias
//poner el contenido en una card
//asignar un link por cada categoria
//al apretar el boton mostrar el componente de la catgoria asignado
//se puede probar en app poniendo la ruta dela categoria con el id, poniendo en este componente que ese id sea dinamico segun la cateogria clickeada!

const Checkbox = () => {
  const { categories } = useContext(dataContext);

  return categories.map((categorie) => {
    return (
      <>
        <div className='cateries-container'>
          <Link to={`/categorie/${categorie.id}`}>
            <div className='categories-card' key={categorie.id}>
              <img
                src='https://images.pexels.com/photos/1599969/pexels-photo-1599969.jpeg'
                alt=''
              />
              <p className='categories-title'>{categorie.name}</p>
            </div>
          </Link>
        </div>
      </>
    );
  });
};

export default Checkbox;
