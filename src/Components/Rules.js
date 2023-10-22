import styled from "styled-components";

const Rules=()=>{
  return(
        <Rules1>
            <p>How to play dice game</p>
            <div className="listItem">
            <ul>
                <li>
                Select any number
                </li>
                <li>
                Click on dice image
                </li>
                <li>
                after click on  dice  if selected number is equal to dice number you will get same point as dice
                </li>
                <li>
                if you get wrong guess then  2 point will be dedcuted 
                </li>
            </ul>
            </div>
        </Rules1>
    )
}
export default Rules;


const Rules1=styled.div`
background-color: aqua;
display: flex;
flex-direction: column;
align-items: left;
padding: 10px;
width: 700px;
height: 208px;
ul{
    
    font-weight:500;
    all: unset;
    font: 15px;
    list-style: none;
}
p{
    align-items: center;
}

`