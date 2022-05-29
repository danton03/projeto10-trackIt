import styled from "styled-components";

const CardCriarHabito = styled.div`
  display: "flex";
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 340px;
  height: 180px;
  /* height: ${props => props.showCard ? "180px": "0"}; */
  margin-top: 20px;
  padding: 18px 18px 15px;
  box-sizing: border-box;

  background-color: #FFFFFF;
  border-radius: 5px;

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  
  input{
    width: 303px;
    height: 45px;
    padding-left: 10px;
    box-sizing: border-box;
    background: var(--cor-branca);
    border: 1px solid var(--cor-borda-input);
    border-radius: 5px;
    
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: var(--cinza-claro);
  }
  
  input:disabled{
    background-color: var(--cor-input-disabled);
    color: var(--cor-texto-disabled);
  }
 
  .botoes{
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    height: auto;
    margin-top: 30px;
    gap: 5px;
  }

  .dias{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 8px;
    gap: 4px;
  }
  
  @media(max-width: 340px){
    width: 100%;
    height: auto;
    
    input{
      width: 90%;
      height: 35px;
    }
  }
`; 

const BotaoForm = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 35px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.tipo === 1 ? "var(--cor-azul-claro)" : "transparent")};
  
  font-weight: 400;
  font-size: 15.976px;
  line-height: 20px;
  text-align: center;
  color: ${(props) => (props.tipo === 1 ? "var(--cor-branca)" : "var(--cor-azul-claro)") };

  &:hover{
    cursor: pointer;
  }

  &:disabled{
    filter: opacity(75%);
    cursor: not-allowed;
  }
`;

export{BotaoForm, CardCriarHabito}