import styled from "styled-components";
import { useState } from "react";

export default function BotaoDia(props) {
  const {children, id, dias, setDias, disabled} = props;
  const [clicado, setClicado] = useState(false);
  const [cor, setCor] = useState({
    texto: "#DBDBDB", 
    fundo: "#FFFFFF", 
    borda: "#DBDBDB"
  })

  function handleClick(e) {
    e.preventDefault();
    
    if(!clicado){
      if(dias.length < 1){
        setDias([id]);
      }
      else{
        setDias([...dias, id]);
      }

      const estilo = {
        texto: "#FFFFFF", 
        fundo: "#CFCFCF", 
        borda: "#CFCFCF"
      }
      setCor(estilo);
    }

    else{
      const novoArray = dias.filter(dia => dia !== id); 
      setDias(novoArray);
      const estilo = {
        texto: "#DBDBDB", 
        fundo: "#FFFFFF", 
        borda: "#DBDBDB"
      }
      setCor(estilo);
    }
    setClicado(!clicado);
  }

  return(
    <BtnDia 
    id={id} 
    onClick={handleClick} 
    cor={cor}
    disabled={disabled}
    >
      {children}
    </BtnDia>
  );
}

const BtnDia = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid;
  border-radius: 5px;

  color: ${(props) => (props.cor.texto)};
  background-color: ${(props) => props.cor.fundo};
  border-color: ${(props) => props.cor.borda};

  &:hover{
    cursor: pointer;
  }
`;