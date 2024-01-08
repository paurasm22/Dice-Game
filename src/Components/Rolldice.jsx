import { useState } from "react"
import styled from "styled-components"


function Rolldice({currentDice,rolldice,generaterandomnumber}) {



// console.log(currentDice)
  return (<DiceContainer>
    <div className="dice">
    {/* ./images/dices_1.png */}
      <img onClick={rolldice}
      src={`./images/dice_${currentDice}.png`}
       alt="dice 1 " />
      
    </div>
    <p>CLICK ON DICE TO ROLL</p>
    
    </DiceContainer>
  )
}

export default Rolldice

const DiceContainer=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

p{
  font-size: 24px;
}
.dice{
  cursor: pointer;
}
`