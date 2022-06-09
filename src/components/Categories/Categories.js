import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import AllPlantsCard from "../AllPlantsCard/AllPlantsCard";
import "./Categories.css";

const Categories = () => {
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
              <a className='categories-title'>{categorie.name}</a>
            </div>
          </Link>
        </div>
      </>
    );
  });
};

export default Categories;
