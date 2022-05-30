import { useContext } from "react";
import RefreshHabitsContext from "../contexts/RefreshHabitsContext";
import styled from "styled-components"; 
import axios from "axios";
import UserContext from "../contexts/UserContext";

export default function CardHabit(props) {
  const { novoHabito, setNovoHabito } = useContext(RefreshHabitsContext);
  const { userData, atualizaHabitosHoje } = useContext(UserContext);
  const { token } = userData;
  const {habito} = props;
  const {id, name, days} = habito;
  const ID_DO_HABITO = id;
  const semana = ["D", "S", "T", "Q", "Q", "S", "S"];

  function handleConfirmation(){
    const confirmation = window.confirm("Deseja mesmo excluir esse hábito?");
    if(confirmation){
      const config = {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      };

      //Requisição para a API de login
      const promise = axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${ID_DO_HABITO}`,
        config
      );
      promise.then(successRequest); //sucesso
      promise.catch(failInRequest); //falha

      function successRequest() {
        setNovoHabito(!novoHabito);
        atualizaHabitosHoje();
      }

      function failInRequest() {
        alert("Ops, tivemos um erro interno ao tentar carregar novamente os seus hábitos.\n:(");
      }
    }
  }

  function renderizaDias() {
    return (
      semana.map((dia, index) => (
        /* D 0 */
        /* Verifica se o dia do array recebido pela API é igual 
           ao index do dia do elemento sendo renderizado */
        //Em caso positivo gera um componente com estilo de selecionado
        days.some((idDia) => (idDia === (index))) ? 
        (<Dia selecionado={true} key={index}> {dia} </Dia>) :
        (<Dia selecionado={false} key={index}> {dia} </Dia>)
      ))
    );
  }

  return(
    <CardHabito>
      <p>{name}</p>
      <ion-icon name="trash-outline" onClick={handleConfirmation}></ion-icon>
      <Dias>
        {renderizaDias()}
      </Dias>
    </CardHabito>
  );
}

const CardHabito = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 340px;
  min-height: 91px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 13px 10px 15px 15px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: var(--cor-branca);

  p{
    margin-top: 0;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    width: 90%;
    height: auto;
    color: var(--cor-cinza-texto);
  }

  ion-icon{
    position: absolute;
    width: 13px;
    height: 15px;
    top: 11px;
    right: 10px;
  }

  ion-icon:hover{
    cursor: pointer;
  }
`

const Dias = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 8px;
  gap: 4px;
`

const Dia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid;
  border-radius: 5px;

  font-family: 'Lexend Deca';
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;

  color: ${(props) => (props.selecionado ? "#FFFFFF": "#DBDBDB")};
  background-color: ${(props) => (props.selecionado ? "#CFCFCF": "#FFFFFF")};
  border-color: ${(props) => (props.selecionado ? "#CFCFCF": "#DBDBDB")};
`