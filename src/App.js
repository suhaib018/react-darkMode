import react ,{useContext}from "react";
import {ThemeContext} from "./contextApi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSun} from "@fortawesome/free-solid-svg-icons"
import "./index.css"

function App() {
  const {mode,setMode}= useContext(ThemeContext);
  const color=mode;

  console.log("color",color);
  return (

  <div style={{backgroundColor:color?"#fff":"#3b3838",minHeight:"555px"}}>
    <nav >
      <FontAwesomeIcon icon={faSun} onClick={() => setMode(!mode)} style={{cursor:"pointer"}}/>
    </nav>
      {
        mode?<h1>Light mode on</h1>:<h1 style={{color:"white"}}>Dark mode on</h1>
      }
  </div>
  );
}

export default App;
