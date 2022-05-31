import { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../context/DataContext";

const imageStyle = {
  width: "240px",
  height: "240px",
};
const MonsteraCard = () => {
  const { data } = useContext(dataContext);

  const monsteras = data.filter(
    (monstera) => monstera.id === 1 || monstera.id === 2
  );

  return monsteras.map((plants) => {
    return (
      <div className='plantsCard' key={plants.id}>
        <Link to={`/${plants.id}`}>
          <img style={imageStyle} src={plants.image} alt='Monstera Picture' />
          <h5>{plants.name}</h5>
        </Link>
      </div>
    );
  });
};

export default MonsteraCard;
