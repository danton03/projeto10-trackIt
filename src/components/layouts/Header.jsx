import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Header() {
  //Pegando o state dos dados do usuário do contexto
  const { userData } = useContext(UserContext);

  return(
    <Titulo>
        <h1>TrackIt</h1>
        <img src={userData.img ? userData.img : ""} alt="Perfil" />
    </Titulo>
  );
}

const Titulo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  box-sizing: border-box;
  
  background-color: var(--cor-azul);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

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