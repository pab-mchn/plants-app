import { useState } from "react";
import MonsteraCard from "../MonsteraCard/MonsteraCard";
import PhiladendronCard from "../PhiladendronCard/PhiladendronCard";
import AllPlantsCard from "../AllPlantsCard/AllPlantsCard";
import "./Checkbox.css";
//mapear categorias
//poner el contenido en una card
//asignar un boton por cada categoria
//al apretar el boton mostrar el componente de la catgoria asignado
const Checkbox = () => {
  const [checkedMonsteras, setCheckedMonsteras] = useState(false);
  const [checkedPhiladendrons, setCheckedPhiladendrons] = useState(false);
  return (
    <>
      <form>
        <input
          type='checkbox'
          name='Monsteras'
          checked={checkedMonsteras}
          onChange={(e) => setCheckedMonsteras(e.target.checked)}
        />
        <label htmlFor='characters'>Monsteras</label>

        <input
          type='checkbox'
          name='Philadendrons'
          checked={checkedPhiladendrons}
          onChange={(e) => setCheckedPhiladendrons(e.target.checked)}
        />
        <label htmlFor='locations'>Philadendrons</label>
      </form>
      {checkedMonsteras === true || checkedPhiladendrons === true ? (
        ""
      ) : (
        <AllPlantsCard />
      )}
      {checkedMonsteras ? <MonsteraCard /> : ""}
      {checkedPhiladendrons ? <PhiladendronCard /> : ""}
    </>
  );
};

export default Checkbox;
