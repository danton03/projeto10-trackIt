import { Titulo } from "./layouts/Titulo";
import { useState } from "react";
import CardCreatHabit from "./CardCreateHabit";
import { BotaoCriar } from "./layouts/HabitsPageStyles";

export default function SectionCreateHabit() {
  const [cardIsVisible, setCardIsVisible] = useState(false);

  function handleShowCard() {
    setCardIsVisible(!cardIsVisible);
  }

  return(
    <>
      <Titulo>
        <h2>Meus Hábitos</h2>
        <BotaoCriar type="button" onClick={handleShowCard}>+</BotaoCriar>
      </Titulo>
      
      {cardIsVisible ? <CardCreatHabit handleShowCard={handleShowCard}/> : ''}
    </>
  );
}