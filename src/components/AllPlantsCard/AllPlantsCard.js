import { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../context/DataContext";

const imageStyle = {
  width: "240px",
  height: "240px",
};
const AllPlantsCard = () => {
  const { data } = useContext(dataContext);

  return data.map((plants) => {
    return (
      <div className='plantsCard' key={plants.id}>
        <Link to={`/${plants.id}`}>
          <img style={imageStyle} src={plants.image} alt='deded' />
          <h5>{plants.name}</h5>
        </Link>
      </div>
    );
  });
};

export default AllPlantsCard;
