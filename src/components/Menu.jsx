import styled  from "styled-components";
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";


export default function Menu() {
  const navigate = useNavigate();
  console.log("renderizou o menu")
  const { porcentagem } = useContext(UserContext);

  return (
    <ContainerMenu>
      <BotaoPagina 
      type="button" color="#52B6FF" 
      onClick={() => navigate("/habitos")}
      >
        Hábitos
      </BotaoPagina>

      <ProgressBar 
      value={porcentagem}
      background
      backgroundPadding={6}
      styles={buildStyles({
        backgroundColor: "#52B6FF",
        pathColor: "#FFFFFF",
        trailColor: "transparent",
      })}
      >
        <BotaoPagina 
        type="button" 
        color="#FFFFFF" 
        style={{ marginTop: -77 }} 
        onClick={() => navigate("/hoje")} 
        >
          Hoje
        </BotaoPagina>
      </ProgressBar>

      <BotaoPagina type="button" color="#52B6FF" >Histórico</BotaoPagina>
    </ContainerMenu>
  );
}

const ContainerMenu = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 70px;
  background-color: #FFFFFF;
  box-sizing: border-box;
`;

const BotaoPagina = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  border: none;
  background-color: transparent;
  
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: ${(props) => (props.color)};

  &:hover{
    cursor: pointer;
  }
`;

const ProgressBar = styled(CircularProgressbarWithChildren)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 91px;
  height: 91px;
  margin-bottom: 40px;
`