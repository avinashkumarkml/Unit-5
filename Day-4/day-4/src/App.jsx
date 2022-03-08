
import './App.css';
import {useState} from "react"
import Grosery from "./components/grosery"


function App() {

  const [inputlist,setInputlist] = useState("")
  const [item, setItem] = useState([])
  
  

  const inputItem=(ele)=>{
      setInputlist(ele.target.value)
  }

  const AddItem=() =>{
      setItem((GroseryItem)=>{
        return [...GroseryItem, inputlist]
      })
      setInputlist("")
  }
  const DeleteItem=(id)=>{
        setItem((GroseryItem)=>{
          return GroseryItem.filter((cur,index)=>{
            return index!==id

          })
        })
  }



  


  return (
    <div className="App">
        <h1>Grosery List</h1>
        <div>
          <input type="text" placeholder="Enter your Grosery" value={inputlist} onChange={inputItem}/>

            <button onClick={AddItem}>Add Item</button>
        </div>
          <div>
            {item.map((list,index)=>{
              return(
                <h3>
                  <Grosery key={index} id={index} list={list} onSelect={DeleteItem}/>
                
                </h3>

              )
            })}
          </div>
    </div>

  );
}

export default App;
