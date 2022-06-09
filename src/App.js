import DataProvider from "./components/context/DataContext";
import Categories from "./components/Categories/Categories";
import PlantsDetails from "./components/PlantsDetails/PlantsDetails";
import MonsteraCard from "./components/MonsteraCard/MonsteraCard";
import PhiladendronCard from "./components/PhiladendronCard/PhiladendronCard";
import AlocasiaCard from "./components/AlocasiaCard/AlocasiaCard";
import Home from "./components/Home/Home";
import ExplorePlants from "./components/ExplorePlants/ExplorePlants";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/explore' element={<ExplorePlants />} />
            <Route path='/:id' element={<PlantsDetails />} />
            <Route path='/categorie/1' element={<MonsteraCard />} />
            <Route path='/categorie/2' element={<PhiladendronCard />} />
            <Route path='/categorie/3' element={<AlocasiaCard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
