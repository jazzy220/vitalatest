import NumberSelect from "../NumberSelect";
import RollDice from "../RollDice";
import TotalScore from "../TotalScore";
import { useState } from "react";
import styles from "./Navbar.module.css"
import Rules from "../Rules"
const Navbar=()=>{

    const [score,setScore]=useState(0);
    const [number,setNumber]=useState();
    const[currentDice,setCurrentDice]=useState(1);
    const [error,setError]=useState("");
    const [statement,setStatement]=useState(false)
    const [btn1,setBtn1]=useState(false);

   
   

    const generateRandomNumber=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min)
    }
    const roleDice=()=>{
        if(!number){
            setError("please Select A number")
            return;
        }
        const randomNumber=generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber);
            if(number===randomNumber){
               setScore((prev)=> prev + randomNumber)
            }
           else{
               setScore((prev) => prev - 2)
            
            }
            setNumber(undefined)
    }
 
  
    

    return(
        <>
        <main className={`${styles.nav_container}`}>
                <TotalScore score={score}/>
            <div className={`${styles.top_section}`}>
                <NumberSelect setError={setError} number={number} setNumber={setNumber} error={error}/>
           </div>


        </main>

        <div>
            <RollDice btn1={btn1} setBtn1={setBtn1} setScore={setScore} statement={statement} setStatement={setStatement} currentDice={currentDice} roleDice={roleDice}/>
            
        </div>

        <div className={`${styles.rules}`}>
        {statement&&<Rules/>}
        </div>
        </>
    )
}
export default Navbar;

