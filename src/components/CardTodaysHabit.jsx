import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import styled from "styled-components"
import UserContext from "../contexts/UserContext";

export default function CardTodaysHabit(props) {
  console.log("renderizou");
  const {habito, requestHabits} = props;
  const {id, name, done, currentSequence, highestSequence} = habito;
  const { userData, habitsChecked, setHabitsChecked } = useContext(UserContext);
  const { token } = userData;
  const [disabled, setDisabled] = useState(false);
  const isMarked = habitsChecked.some((item) => (item === id));
  const URL_CHECK = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
  const URL_UNCHECK= `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
  
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };

  setTimeout(() => {
    if (done && !isMarked) {
      setHabitsChecked([...habitsChecked, id]);
    }
  
    else if (!done && isMarked) {
      const novoArray = habitsChecked.filter(dia => dia !== id); 
      setHabitsChecked(novoArray);
    } 
  }, 30);


  function handleToggleCheck() {
    setDisabled(true);
    if(!done){
      //Requisição para a API de login
      const promise = axios.post(URL_CHECK, {}, config);
      promise.then(successRequest); //sucesso
      promise.catch(failInRequest); //falha

      function successRequest() {
        setDisabled(false);
        requestHabits();
      }
  
      function failInRequest() {
        setDisabled(false);
        alert("Ops, tivemos um erro interno ao tentar carregar seu hábito. Tente novamente mais tarde");
      }
    }
    else{
      //Requisição para a API de login
      const promise = axios.post(URL_UNCHECK, {}, config);
      promise.then(successRequest); //sucesso
      promise.catch(failInRequest); //falha

      function successRequest() {
        setDisabled(false);
        requestHabits();
      }
  
      function failInRequest() {
        setDisabled(false);
        alert("Ops, tivemos um erro interno ao tentar carregar seu hábito. Tente novamente mais tarde");
      }
    }
  }

  return(
    <CardHabito id={id}>
      <div>
        <h3>{name}</h3>

        <p>
          {`Sequência atual: `}
          <Sequencia color={ done ? "#8FC549" : "#666666"}>
            {currentSequence}
          </Sequencia>
        </p>

        <p>
          {`Seu recorde: `}
          <Sequencia color={(currentSequence === highestSequence && currentSequence > 0) ? "#8FC549" : "#666666"}>
            {highestSequence}
          </Sequencia>
        </p>
      </div>

      <BotaoCheck 
      type="button"
      onClick={handleToggleCheck} 
      background={done ? "#8FC549" : "#E7E7E7"}
      disabled={disabled}
      >
        <ion-icon name="checkmark-outline" size="large"></ion-icon>
      </BotaoCheck>
    </CardHabito>
  );
}

const CardHabito = styled.div`
  width: 100%;
  height: auto;
  max-width: 340px;
  min-height: 91px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;
  padding: 13px 13px 12px 15px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: var(--cor-branca);

  div{
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3{
      font-family: 'Lexend Deca';
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;
      width: 100%;
      height: auto;
      color: var(--cor-cinza-texto);
    }

    p{
      font-family: 'Lexend Deca';
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      width: 100%;
      height: auto;
      color: var(--cor-cinza-texto);
    }

    @media(max-width: 320px){
      gap: 4px;
    }
  }

  @media(max-width: 320px){
    gap: 25px;
  }
`;

const BotaoCheck = styled.button`
  width: 100%;
  height: 10vh;
  max-width: 69px;
  max-height: 69px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.background)};

  ion-icon{
    width: 35px;
    height: 28px;
    font-size: 128px;
    --ionicon-stroke-width: 64px;
    color: #FFFFFF;
  }

 &:hover{
    cursor: pointer;
  }
`;

const Sequencia = styled.span`
  font-family: 'Lexend Deca';
  color: ${(props) => (props.color)};
`
