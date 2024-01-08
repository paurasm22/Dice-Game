import styled from 'styled-components';
import './App.css';
import Startgame from './Components/Startgame';
import { useState } from 'react';
import Gameplay from './Components/Gameplay';

function App() {
const [gamestarted,setGamestarted]=useState(false);
const tooglegameplay=()=>{
  setGamestarted((prev)=>!prev);
}

// watch from 40 minutes


  return (
    <>
    {gamestarted ? <Gameplay/> :  <Startgame toogle={tooglegameplay}/>}
    
   
    </>
  );
}

export default App;




const Button = styled.button`
color: white;
background-color:black;
padding:5px;
font-weight:700;
font-style:poppins`;