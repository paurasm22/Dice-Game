
import styled from "styled-components"

function Startgame({toogle}) {
  return (
    <>
    <Container>
      <div className="">
      <img src='./images/logo.png' alt="LOGO" />

      </div>
     
      <div className="content">
        <h1>DICE GAME</h1>
        <Pbutton onClick={toogle} >START GAME</Pbutton>
      </div>
    </Container>
    </>
  )
}

export default Startgame
const Container = styled.div`
  max-width: 1180px;
  height: calc(100vh);
  align-items: center;

  display: flex;
  margin: 0 auto;

.content{
  h1{
    font-size: 98px;
    white-space: nowrap;
  }
}
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