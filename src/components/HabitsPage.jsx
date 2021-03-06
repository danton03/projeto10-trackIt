import { ContainerPage } from "./layouts/HabitsPageStyles";
import Header from "./Header";
import SectionCreateHabit from "./SectionCreateHabit";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { SectionShowHabits } from "./layouts/SectionShowHabits";
import CardHabit from "./CardHabit";
import RefreshHabitsContext from "../contexts/RefreshHabitsContext";
import Menu from "./Menu";
import { Texto } from "./layouts/Texto";

export default function HabitsPage() {
  const { userData } = useContext(UserContext);
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
    }

    function failInRequest() {
      alert("Ops, tivemos um erro interno ao tentar listar seus hábitos.\n:(");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [novoHabito]);

  function renderizaHabitos() {
    if(!habitos.length){
      return <Texto>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Texto>
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
