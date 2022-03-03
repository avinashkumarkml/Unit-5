
import './App.css';

function App() {
  const company = ["Android", "BlackBerry", "iPhone", "Windows Phone"]
  const manufacturer = ["Samsung", "HTC", "Micromax", "Apple"]
  return (

    <div>
      <h1>REACT MOBILE OS</h1>
      
      <ul>
        <h2>Mobile Opreting System</h2>
        {
          company.map((e)=>(
            <li>{e}</li>
          ))

        }
      </ul>
      
      <ul>
        <h2>Mobile Manufacturer</h2>
        {
          manufacturer.map((e)=>(
            <li>{e}</li>
          ))
          
        }
      </ul>
    </div>

  );
}


export default App;
