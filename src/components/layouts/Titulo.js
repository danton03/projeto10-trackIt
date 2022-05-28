import styled from "styled-components";

const Titulo = styled.div`
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : "space-between") };
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 20px;

  h2{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    
    color: var(--cor-azul);
  }
`;

export {Titulo}