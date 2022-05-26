import styled from "styled-components";
import profileIMG from "../../assets/images/shinji.jpg"

export default function Header() {
  return(
    <Titulo>
        <h1>TrackIt</h1>
        <img src={profileIMG} alt="Perfil" />
    </Titulo>
  );
}

const Titulo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  box-sizing: border-box;
  
  background-color: var(--cor-azul);
  

  h1{
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 49px;
    
    color: var(--cor-branca);
  }
  
  img{
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
`