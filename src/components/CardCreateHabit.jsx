import BotaoDia from "./BotaoDia"
import { BotaoForm, CardCriarHabito } from "./layouts/CardCreateHabitStyles";
import { ThreeDots } from  'react-loader-spinner'
import axios from "axios";
import { useContext, useState } from "react";
import DaysContext from "../contexts/DaysContext";
import UserContext from "../contexts/UserContext";
import RefreshHabitsContext from "../contexts/RefreshHabitsContext";

export default function CardCreatHabit(props) {
  const { dias, setDias, nomeHabito, setNomeHabito } = useContext(DaysContext);
  const { userData, atualizaHabitosHoje } = useContext(UserContext);
  const { token } = userData;
  const { novoHabito, setNovoHabito } = useContext(RefreshHabitsContext);
  const {handleShowCard, showCard} = props;
  const semana = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [isDisabled, setIsDisabled] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if(dias.length===0){
      alert("Você deve selecionar pelo menos um dia.")
      return;
    }
    else{
      setIsDisabled(true);

      const dataHabit = {
        name: nomeHabito,
	      days: dias
      }

      const config = {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      };

      //Requisição para a API de login
      const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", dataHabit, config);
      promise.then(successRequest); //sucesso
      promise.catch(failInRequest); //falha

      function successRequest() {
        setIsDisabled(false);
        setDias([]);
        setNomeHabito('');        
        handleShowCard();
        setNovoHabito(!novoHabito)
        atualizaHabitosHoje();
      }

      function failInRequest() {
        alert("Ops, tivemos um erro interno ao tentar criar seu hábito. Tente novamente");
        setIsDisabled(false);
      }
    }
  }

  return(
    <CardCriarHabito showCard={showCard}>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="nome do hábito"
        value={nomeHabito}
        onChange={(e) => setNomeHabito(e.target.value)} 
        disabled={isDisabled}
        required />

        <div className="dias">
          {semana.map((dia,index) =>{
            return (
              <BotaoDia 
              key={index} 
              id={index} 
              disabled={isDisabled}
              >
                {dia} 
              </BotaoDia>
            )
            })
          }
        </div>

        <div className="botoes">
          <BotaoForm 
          tipo={2} 
          onClick={handleShowCard} 
          type={"button"}
          disabled={isDisabled}
          >
            cancelar
          </BotaoForm>

          <BotaoForm 
          tipo={1} 
          type={"submit"}
          disabled={isDisabled}
          >
            {isDisabled ? <ThreeDots color="#FFFFFF" width={43} height={11} /> : 'Salvar'}
          </BotaoForm>
        </div>
      </form>
    </CardCriarHabito>
  );
}


