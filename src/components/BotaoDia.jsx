import styled from "styled-components";
import { useContext, useState } from "react";
import DaysContext from "../contexts/DaysContext";

export default function BotaoDia(props) {
  const {children, id, disabled} = props;
  const { dias, setDias } = useContext(DaysContext);
  const [clicado, setClicado] = useState(false);
  const [controle, setControle] = useState(true);

  const estiloClicado = {
    texto: "#FFFFFF", 
    fundo: "#CFCFCF", 
    borda: "#CFCFCF"
  }

  const estiloPadrao = {
    texto: "#DBDBDB", 
    fundo: "#FFFFFF", 
    borda: "#DBDBDB"
  }

  const [cor, setCor] = useState({
    texto: "#DBDBDB", 
    fundo: "#FFFFFF", 
    borda: "#DBDBDB"
  })

  const diaJaSelecionado = dias.find(dia => dia===id);

  if(diaJaSelecionado !== undefined && controle){
    setControle(false);
    setCor(estiloClicado);
    setClicado(!clicado);
  }
  else if(diaJaSelecionado === undefined && controle){
    setControle(false);
    setCor(estiloPadrao);
    if(clicado === true){
      setClicado(!clicado);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    
    if(!clicado){
      if(dias === undefined){
        setDias([id]);
      }
      else{
        setDias([...dias, id]);
      }
    }

    else{
      const novoArray = dias.filter(dia => dia !== id); 
      setDias(novoArray);
    }
    setControle(true);
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

  font-weight: 400;
  font-size: 20px;
  line-height: 25px;

  color: ${(props) => (props.cor.texto)};
  background-color: ${(props) => props.cor.fundo};
  border-color: ${(props) => props.cor.borda};

  &:hover{
    cursor: pointer;
  }
`;