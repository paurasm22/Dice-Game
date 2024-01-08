import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import Score from "./Score"
import Rolldice from "./Rolldice"
import { useState } from "react"
import Rules from "./Rules"

function Gameplay() {

  const[score,setScore]=useState(0);

  const[selectednumber,setSelectednumber]=useState();

  const[currentDice,setCurrentdice]=useState(1);

  const [error,setError]=useState("")

  const[showrules,setRules]=useState(false);


  const generaterandomnumber=(min, max)=> {
    return ( Math.floor(Math.random() * (max - min) + min));
  }
  const rolldice=()=>{
    if (!selectednumber){
      setError(" YOU HAVE NOT SELECTED A NUMBER");
      return;
    }
    setError("") ;

    const randomnumber=generaterandomnumber(1,7);
    setCurrentdice((prev)=>randomnumber)

    {if (selectednumber=== randomnumber){
      setScore((prevScore)=>prevScore +5)
    }
  else{
    setScore(prevScore=>prevScore -5)
  }}
  setSelectednumber(undefined)
  }

  const resetscore=()=>{
    return(
      setScore(0)
    )
  }

  // console.log(selectednumber)
  // console.log(currentDice)



 

  return (
    <>
    <Maintcontainer>
      
      <Score score={score} ></Score>
     <NumberSelector selectednumber={selectednumber} setSelectednumber={setSelectednumber} error={error} ></NumberSelector>

    </Maintcontainer>
    <Rolldice currentDice={currentDice} generaterandomnumber={generaterandomnumber} rolldice={rolldice}/>
    <Btndiv className="btns">
  <Pbutton onClick={resetscore}>RESET</Pbutton>
  <Pbutton onClick={() => setRules((prev) => !prev)}>
    {showrules ? "Hide" : "Show"} Rules
  </Pbutton>
</Btndiv>
{showrules && <Rules></Rules>}

   
    
    </>
    
    

  )
}

export default Gameplay

const Maintcontainer=styled.div`
display:flex;
justify-content:space-between;
align-items:end;
margin: 0 40px 0 40px;
padding-top: 40px;
`

const Pbutton=styled.button`
  background-color: black;
  color: white;
  padding: 5px;
  font-family: 'Times New Roman', Times, serif;
  width: 220px;
  height: 44px;
  border-radius: 5px;
  padding: 10px 18px 10px 18px;
  font-size: 16px;
  cursor: pointer;

  &:hover{
    border:4px solid white ;
  }
`
const Btndiv=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

`



