import styled from 'styled-components';

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    gap: 6px;
  }

  input, button{
    width: 303px;
    height: 45px;
  }

  input{
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
  
  button{
    border: none;
    border-radius: 5px;
    background-color: var(--cor-azul-claro);
    
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: var(--cor-branca);
  }

  button:hover{
    cursor: pointer;
  }
  
  a{
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    margin-top: 25px;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    
    color: var(--cor-azul-claro);
  }
  

  a:visited{
    color: var(--cor-azul-claro);
  }
  
  @media(max-width: 303px){
    input, button{
      width: 90%;
      height: 35px;
    }
  }
`

export {ContainerForm};
