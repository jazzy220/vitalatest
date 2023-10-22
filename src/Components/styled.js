import styled from "styled-components"

export const Button=styled.button`
background-color: black;
    width: 220px;
    color: white;
    padding: 10px 18px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    font-size: 16px;

    &:hover{
        background-color: white;
        color: black;
        border:1px solid;
        border-radius: 5px;
        transition: 0.3s background ease-in;

    }
    

`
export const Outline=styled(Button)`
background-color: white;
color: black;
border: 1px solid black;
border-radius: 5px;
&:hover{
    background-color: black;
    border:1px solid;
    color: white;
    transition: 0.3s background ease-in;
}
`
export const Rulesbtn=styled(Button)`

background-color: black;
color: white;
border: 1px solid transparent;
border-radius: 5px;
&:hover{
    background-color: white;
    border:1px solid ;
    color: black;
    transition: 0.3s background ease-in;

}
`