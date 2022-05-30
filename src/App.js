import DataProvider from "./components/context/DataContext";
import MonsteraCard from "./components/MonsteraCard/MonsteraCard";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <div className='App'>
        <h1>Hola</h1>
        <MonsteraCard />
      </div>
    </DataProvider>
  );
}

export default App;
