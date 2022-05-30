import { ContainerPage } from "./layouts/HabitsPageStyles";
import { useContext } from "react";
import Menu from "./Menu";
import UserContext from "../contexts/UserContext";
import { useEffect } from "react";
import Header from "./layouts/Header";
import { SectionTodaysHabits } from "./SectionTodaysHabits";
import CardTodaysHabit from "./CardTodaysHabit";
import styled from "styled-components"
import { Titulo } from "./layouts/Titulo";
import HabitsContext from "../contexts/HabitsContext";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import 'dayjs/locale/pt-br';

export default function TodayPage() {
  //permite formatos diferentes do padrão da biblioteca
  dayjs.extend(advancedFormat);
  //Especifica a localidade para o Brasil
  dayjs.locale("pt-br");
  const date = dayjs().format('dddd, DD/MM'); //pega no formato: segunda-feira, 17/05
  //Deixa apenas a primeira letra maiúscula e remove o -feira da string
  const dataAtual = (date[0].toUpperCase() + date.slice(1)).replace("-feira",''); 
  
  const { habitosHoje, porcentagem, habitsChecked, setHabitsChecked, atualizaHabitosHoje } = useContext(UserContext);

  useEffect(() => {
    atualizaHabitosHoje();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  function renderizaCards(){
    return(
      habitosHoje.map((habito, index) => (
        <CardTodaysHabit key={index} habito={habito} requestHabits={atualizaHabitosHoje}/>
      ))
    );
  }

  return (
    <ContainerPage className="ContainerPage">
      <Header />
        <HabitsContext.Provider value={{habitsChecked, setHabitsChecked}}>
          <SectionTitulos>
            <Titulo justify={"left"}>
              <h2>{dataAtual}</h2>
            </Titulo>

            <ProgressoHabitos color={(porcentagem > 0) ? "#8FC549" : "#BABABA"}>
            {(porcentagem > 0) ? 
            (`${porcentagem}% dos hábitos concluídos`) : "Nenhum hábito concluído ainda"}
            </ProgressoHabitos>
          </SectionTitulos>

          <SectionTodaysHabits>
            {habitosHoje.length ? renderizaCards() : ""}
          </SectionTodaysHabits>

          <Menu />
        </HabitsContext.Provider>

    </ContainerPage>
  );
}

const SectionTitulos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`
const ProgressoHabitos = styled.p`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;

  color: ${(props) => (props.color)};
`



