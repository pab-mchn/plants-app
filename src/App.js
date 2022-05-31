import DataProvider from "./components/context/DataContext";
import Checkbox from "./components/Checkbox/Checkbox";
import PlantsDetails from "./components/PlantsDetails/PlantsDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Checkbox />} />
            <Route path='/:id' element={<PlantsDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
