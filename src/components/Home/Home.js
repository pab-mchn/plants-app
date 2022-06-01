import "./Home.css";
import AllPlantsCard from "../AllPlantsCard/AllPlantsCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className='banner'>
        <div className='container'>
          <h1>Search and Explore Beatifull Plants</h1>
          <p>The best place for yours green bodys</p>
          <Link to={"/explore"} className='btn btn-flat'>
            Get Started
          </Link>
        </div>
      </div>
      <AllPlantsCard />
    </>
  );
};

export default Home;
