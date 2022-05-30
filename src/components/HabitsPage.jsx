import { ContainerPage } from "./layouts/HabitsPageStyles";
import Header from "./layouts/Header";
import SectionCreateHabit from "./SectionCreateHabit";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { SectionShowHabits } from "./layouts/SectionShowHabits";
import CardHabit from "./CardHabit";
import RefreshHabitsContext from "../contexts/RefreshHabitsContext";
import Menu from "./Menu";

export default function HabitsPage(props) {
  console.log("renderizou a pagina");
  /* const {atualizaHabitosHoje} = props; */
  const { userData, updateToday, setUpdateToday } = useContext(UserContext);
  const { token } = userData;
  const [habitos, setHabitos] = useState(null);
  const [novoHabito, setNovoHabito] = useState(false);

  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };


  useEffect(() => {
    //Requisição para a API de login
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
    promise.then(successRequest); //sucesso
    promise.catch(failInRequest); //falha

    function successRequest(response) {
      setHabitos(response.data);
      setUpdateToday(!updateToday);
    }

    function failInRequest() {
      alert("Ops, tivemos um erro interno ao tentar listar seus hábitos.\n:(");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [novoHabito]);

  function renderizaHabitos() {
    if(!habitos.length){
      return <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
    }

    else{
      return(
        habitos.map((habit, index) => (
          <CardHabit key={index} habito={habit}/>
        ))
      );
    }
  }

  return (
    <ContainerPage className="containerPage">
      <Header />

      <RefreshHabitsContext.Provider value={{novoHabito, setNovoHabito}}>

        <SectionCreateHabit />
        <SectionShowHabits>
          {habitos ? renderizaHabitos() : 'Carregando...'}
        </SectionShowHabits>
        <Menu />
      </RefreshHabitsContext.Provider>

    </ContainerPage>
  );
}
