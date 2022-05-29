import { Titulo } from "./layouts/Titulo";
import { useState } from "react";
import CardCreatHabit from "./CardCreateHabit";
import { BotaoCriar } from "./layouts/HabitsPageStyles";
import DaysContext from "../contexts/DaysContext";

export default function SectionCreateHabit(props) {

  const [cardIsVisible, setCardIsVisible] = useState(false);
  const [dias, setDias] = useState([]);
  const [nomeHabito, setNomeHabito] = useState('');

  function handleShowCard() {
    setCardIsVisible(!cardIsVisible);
  }

  return(
    <>
      <Titulo>
        <h2>Meus Hábitos</h2>
        <BotaoCriar type="button" onClick={handleShowCard}>+</BotaoCriar>
      </Titulo>
      <DaysContext.Provider value={{dias, setDias, nomeHabito, setNomeHabito}}>
        {cardIsVisible ? <CardCreatHabit handleShowCard={handleShowCard}/> : ''}
      </DaysContext.Provider>
    </>
  );
}