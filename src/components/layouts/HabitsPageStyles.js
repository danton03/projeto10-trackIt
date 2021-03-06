import styled from "styled-components";

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 88vh;
  padding: 0 17px;
  margin-top: 70px;
  box-sizing: border-box;
  background-color: #E5E5E5;
`;

const BotaoCriar = styled.button`
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

  &:hover{
    cursor: pointer;
  }
`

export{BotaoCriar, ContainerPage}