import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import AllPlantsCard from "../AllPlantsCard/AllPlantsCard";
import "./Categories.css";

const Categories = () => {
  const { categories } = useContext(dataContext);

  return categories.map((categorie) => {
    return (
      <Link to={`/categorie/${categorie.id}`} className='categories-card' key={categorie.id}>
        {categorie.name}
      </Link>
    );
  });
};

export default Categories;
