import { ContainerPage } from "./layouts/HabitsPageStyles";
import Menu from "./Menu";
import Header from "./Header";
import { Titulo } from "./layouts/Titulo";
import { Texto } from "./layouts/Texto";

export default function HistoryPage() {
  
  return (
    <ContainerPage className="ContainerPage">
      <Header />
      <Titulo justify={"left"}>
        <h2>Histórico</h2>
      </Titulo>
      <Texto>Em breve você poderá ver o histórico dos seus hábitos aqui!</Texto>
      <Menu />
    </ContainerPage>
  );
}

