import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import AllPlantsCard from "../AllPlantsCard/AllPlantsCard";
import "./Categories.css";

const Categories = () => {
  const { categories } = useContext(dataContext);

  return categories.map((categorie) => {
    return (
      <div className='cateries-container'>
        <div className='categories-card' key={categorie.id}>
          <Link to={`/categorie/${categorie.id}`}>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRClt0JQhAmWFLJMs6L_J07yVOaN8IJHtagbg&usqp=CAU'
              alt=''
            />
            {categorie.name}
          </Link>
        </div>
      </div>
    );
  });
};

export default Categories;
