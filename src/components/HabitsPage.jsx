import styled from "styled-components";
import Header from "./layouts/Header";

export default function HabitsPage() {
  return(
    <ContainerPage>
      <Header />
      <div className="titulo">
        <h2>Meus Hábitos</h2>
        <button type="button">+</button>
      </div>
    </ContainerPage>
  );
}

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 0 17px;
  margin-top: 70px;
  box-sizing: border-box;
  background-color: var(--cor-fundo-tela);

  .titulo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;

    h2{
      font-family: 'Lexend Deca';
      font-style: normal;
      font-weight: 400;
      font-size: 22.976px;
      line-height: 29px;
      
      color: var(--cor-azul);
    }

    button{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 35px;
      border: none;
      border-radius: 5px;
      background-color: var(--cor-azul-claro);
  
      font-weight: 400;
      font-size: 27px;
      line-height: 34px;
      text-align: center;
  
      color: #FFFFFF;
    }
  }

`
