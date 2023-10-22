import styled from "styled-components";

const TotalScore=({score})=>{



    return(
        <Score>
        <h1>{score}</h1>
        <p>Total Score</p>
        </Score>
    )

}
export default TotalScore;

const Score=styled.div`
max-width: 300px;
text-align: center;

h1{
font-size: 100px;
padding-top:200px ;
font-weight: 500px;
line-height: 100px;

}
P{
    font-size: 24px;
    font-weight: 500px;
    line-height: 36px;
}
`