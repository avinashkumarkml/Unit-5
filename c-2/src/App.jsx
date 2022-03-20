import "./App.css";
import { Rentals } from "./components/Rentals/Rentals";
import { AddHouse } from "./components/AddHouse/AddHouse";

function App() {
  return (
    <div className="App">
      <button className="toggleForm">
       <AddHouse/>
      </button>
      
      <br/>
    </div>
  );
}

export default App;