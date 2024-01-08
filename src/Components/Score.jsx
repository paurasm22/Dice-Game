
import styled from "styled-components"
import NumberSelector from "./NumberSelector";
import { useState } from "react";


function Score({score}) {


  return (
    <Scorecontainer>
    <h1>{score}</h1>
    <p>TOTAL SCORE</p>
  </Scorecontainer>
  
  )
}

export default Score

const Scorecontainer=styled.div`
max-width: 200px;
text-align: center;
h1{
  font-size: 50px;
}
p{
  font-size: 24px;
  font-weight: 900;
  /* line-height: 100px; */

}`;

