import styled from "styled-components"
const NumberSelect=({number,setNumber,error,setError})=>{
    const arrayNumber=[1,2,3,4,5,6]
    const selectNumberError=(value)=>{
        setError("");
        setNumber(value)
    }
  
    console.log(number)
    return(
        <NumberSelectContainer>
            <p  className="error">{error}</p>
            <div className="flex">
            {arrayNumber.map((value,i)=>(
                         <Box key={i} 
                         isselected={(value===number)}
                         onClick={()=>selectNumberError(value)}>{value}</Box>))}
                         
        </div>
        <p>Select Number</p>
          </NumberSelectContainer>
    )
}
export default NumberSelect;



const NumberSelectContainer=styled.div`
display: flex;
max-width: 1280px;
flex-direction: column;
align-items: end;
justify-content: space-between;
.flex{
    display: flex;
    gap: 24px;
}
p{
   font-size: 24px;
   font-weight: 700;
   font-style: normal;
   justify-content: right;

}

.error{
color: red;
}
`
const Box=styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    cursor: pointer;
    display: grid;
    place-items: center;
    font-size: 34px;
    font-weight: 700;
    line-height: 34px;
    transition: 0.4s background ease-in;
    background-color: ${(props)=>(props.isselected?"black":"white")};
    color: ${(props)=>(!props.isselected?"black":"white")};

    &:hover{
        background-color: lightblue;
        transition: 0.3s background ease-in;
        transition: all;
    }

`
