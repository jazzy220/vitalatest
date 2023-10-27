import styled from "styled-components";
import { Outline} from "./styled";
import { Rulesbtn } from "./styled";
import dice_1 from "../Components/assets/dice_1.png";
import dice_2 from "../Components/assets/dice_2.png"
import dice_3 from "../Components/assets/dice_3.png"
import dice_4 from "../Components/assets/dice_4.png"
import dice_5 from "../Components/assets/dice_5.png"
import dice_6 from "../Components/assets/dice_6.png"
const RollDice=({currentDice,roleDice,setScore,setStatement,statement})=>{
   
   
    const Getdice=()=>{
       
        if(currentDice===1){
            return dice_1;
            
        }
        else  if(currentDice===2){
            return dice_2;
        }
        else  if(currentDice===3){
            return dice_3;
        }
        else  if(currentDice===4){
            return dice_4;

        }
         else if(currentDice===5){
            return dice_5;
        }
        else if(currentDice===6){
            return dice_6;
        }
      
    }


        const RestScore=()=>{
            setScore(0)
        }
            const toggle=()=>{
                setStatement((abc)=>!abc)
            }
    return(


        <>
        <Roll>
            <div>
              <img src={Getdice()} alt="dice pic" onClick={roleDice}></img>
              </div>
              <p>Click on Dice to roll</p>
              
             
              <div className="btn">
              <Outline onClick={RestScore}>Reset Score</Outline>
              <Rulesbtn onClick={toggle}>   {/*This is also a valid code
                                            <Onclick={()=>setStatement((prev)=>!prev)}>*/}
                {
                !statement?"Show Rules":"Hide Rules"

                }


              </Rulesbtn>
              </div>

        </Roll>
        </> 
    )
   
}
export default RollDice;

const Roll=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 150px;
gap: 36px;
p{
    font-style: normal;
    font-size: 24px;
    font-weight: 500;
    line-height: normal;
}
.btn{
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center ;
    align-items: center;
    
}
`