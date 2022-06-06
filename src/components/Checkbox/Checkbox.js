import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import { Link } from "react-router-dom";

import "./Checkbox.css";

const Checkbox = () => {
  const { categories } = useContext(dataContext);

  return categories.map((categorie) => {
    return (
      <>
        <div className='cateries-container'>
          <Link to={`/categorie/${categorie.id}`}>
            <div className='categories-card' key={categorie.id}>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRClt0JQhAmWFLJMs6L_J07yVOaN8IJHtagbg&usqp=CAU'
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
