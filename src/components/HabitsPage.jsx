import { ContainerPage } from "./layouts/HabitsPageStyles";
import Header from "./layouts/Header";
import SectionCreateHabit from "./SectionCreateHabit";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { SectionShowHabits } from "./layouts/SectionShowHabits";

export default function HabitsPage() {
  console.log("renderizou a pagina");
  const { userData } = useContext(UserContext);
  const { token } = userData;
  const [habitos, setHabitos] = useState(null);

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
      console.log(habitos)
    }

    function failInRequest() {
      alert("Ops, tivemos um erro interno ao tentar listar seus hábitos.\n:(");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderizaHabitos() {
    if(habitos.length === 0){
      return <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
    }

    /* else{
      <ion-icon name="trash-outline"></ion-icon>
    } */
  }

  return (
    <ContainerPage>
      <Header />
      <SectionCreateHabit />
      <SectionShowHabits>
        {habitos ? renderizaHabitos() : 'Carregando...'}
      </SectionShowHabits>
    </ContainerPage>
  );
}
