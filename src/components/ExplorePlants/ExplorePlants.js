import Categories from "../Categories/Categories";
import AllPlantsCard from "../AllPlantsCard/AllPlantsCard";

const ExplorePlants = () => {
  return (
    <>
      <div className='categories-container'>
        <Categories />
      </div>
      <h1 className='exploreTittle'>Explore all our Plants</h1>
      <AllPlantsCard />
    </>
  );
};

export default ExplorePlants;
