import { useContext } from "react";
import { dataContext } from "../context/DataContext";

const imageStyle = {
  width: "240px",
  height: "240px",
};
const MonsteraCard = () => {
  const { data } = useContext(dataContext);

  const monstera = data.filter((word) => word.id === 1 || word.id === 2);

  return monstera.map((plants) => {
    return (
      <div className='plantsCard' key={plants.id}>
        <img style={imageStyle} src={plants.image} alt='deded' />
        <h5>{plants.name}</h5>
      </div>
    );
  });
};

export default MonsteraCard;