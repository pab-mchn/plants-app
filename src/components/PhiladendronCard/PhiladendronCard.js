import { useContext } from "react";
import { dataContext } from "../context/DataContext";

const imageStyle = {
  width: "240px",
  height: "240px",
};

const PhiladendronCard = () => {
  const { data } = useContext(dataContext);

  const philadendrons = data.filter((word) => word.id === 3 || word.id === 4);

  return philadendrons.map((philadendron) => {
    return (
      <div className='plantsCard' key={philadendron.id}>
        <img style={imageStyle} src={philadendron.image} alt='deded' />
        <h5>{philadendron.name}</h5>
      </div>
    );
  });
};

export default PhiladendronCard;
