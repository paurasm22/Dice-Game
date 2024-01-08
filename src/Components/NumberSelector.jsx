import { useState } from "react"
import styled from "styled-components"



const NumberSelector = ({
  selectednumber,setSelectednumber,error}) => {
  const dienumbers=[1,2,3,4,5,6]
 
// console.log(selectednumber)


  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
      {dienumbers.map((num,i)=><Box key={i} onClick={()=>setSelectednumber(num)}
      isSelected={num===selectednumber}
      >{num}</Box>)}

      </div>
      <p>SELECTED NUMBER</p>
     

        
    </NumberSelectorContainer>
    
  )
}

export default NumberSelector

const Box=styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
font-weight: 900;
font-size: 40px;
background-color: ${(props) => (props.isSelected ? "black" : "white")};
color: ${(props) => (!props.isSelected ? "black" : "white")}
`
const NumberSelectorContainer=styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
  display: flex;
  gap: 24px;
  align-items: end;
}
p{
  font-size: 24px;
  font-weight: 900px;
  text-align:center;

}
.error{
  color: red;
  font-weight: 900;
}
`;