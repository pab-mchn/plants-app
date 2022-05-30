import DataProvider from "./components/context/DataContext";
import Checkbox from "./components/Checkbox/Checkbox";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <div className='App'>
        <h1>Hola</h1>
        <Checkbox />
      </div>
    </DataProvider>
  );
}

export default App;
