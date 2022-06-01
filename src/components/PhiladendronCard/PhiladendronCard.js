import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import { Link } from "react-router-dom";

const imageStyle = {
  width: "240px",
  height: "240px",
};

const PhiladendronCard = () => {
  const { philadendronCategory } = useContext(dataContext);

  return philadendronCategory.map((philadendron) => {
    return (
      <div className='plantsCard' key={philadendron.id}>
        <Link to={`/${philadendron.id}`}>
          <img style={imageStyle} src={philadendron.image} alt='deded' />
          <h5>{philadendron.name}</h5>
        </Link>
      </div>
    );
  });
};

export default PhiladendronCard;
