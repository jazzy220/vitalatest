import { useState } from "react";
import StartGame from "./Components/StartGame/StartGame"
import Navbar from "./Components/Navbar/Navbar";
const  App=()=>{
 const [isGameStarted,setIsGameStarted]=useState(false);
  const togglegame=()=>{
    setIsGameStarted((ABC)=> !ABC);
  }
    return(
        
      <>{isGameStarted?<Navbar/>:<StartGame  togglegame={togglegame}/>} </>
    )
}
export default App;