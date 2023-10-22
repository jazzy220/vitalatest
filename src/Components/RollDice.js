import styled from "styled-components";
import { Outline} from "./styled";
import { Rulesbtn } from "./styled";
const RollDice=({currentDice,roleDice,setScore,setStatement,statement})=>{



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
              <img src={`/dice_${currentDice}.png`} alt="dice pic" onClick={roleDice}></img>
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
    
}
`