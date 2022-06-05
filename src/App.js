import DataProvider from "./components/context/DataContext";
import Checkbox from "./components/Checkbox/Checkbox";
import PlantsDetails from "./components/PlantsDetails/PlantsDetails";
import MonsteraCard from "./components/MonsteraCard/MonsteraCard";
import PhiladendronCard from "./components/PhiladendronCard/PhiladendronCard";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/explore' element={<Checkbox />} />
            <Route path='/:id' element={<PlantsDetails />} />
            <Route path='/1' element={<MonsteraCard />} />
            <Route path='/2' element={<PhiladendronCard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
