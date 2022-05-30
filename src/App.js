/* Importações de estilos CSS com globalStyles */
import GlobalStyle from './assets/styles/GlobalStyle';

/* Importação de funções das dependências */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import CreateAccount from './components/CreateAccount';
import HabitsPage from './components/HabitsPage';
import UserContext from "./contexts/UserContext";
import { useEffect, useState } from 'react';
import TodayPage from './components/TodayPage';
import axios from 'axios';
import HistoryPage from './components/HistoryPage';


function App() {
  const [userData, setUserData] = useState(null);
  const [habitosHoje, setHabitosHoje] = useState([]);
  const [porcentagem, setPorcentagem] = useState(0);
  const [habitsChecked, setHabitsChecked] = useState([]);

  function atualizaHabitosHoje(params) {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const { token } = userData;
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    };
    
    //Requisição para a API de login
    const promise = axios.get(URL, config);
    promise.then(successRequest); //sucesso
    promise.catch(failInRequest); //falha

    function successRequest(response) {
      setHabitosHoje(response.data)
    }

    function failInRequest() {
      alert("Ops, tivemos um erro interno ao tentar carregar seus hábitos de hoje. Tente novamente");
    }
  }

  useEffect(() =>
  {
    if (habitsChecked.length && habitosHoje.length) {
      const resultado = Math.round((habitsChecked.length/habitosHoje.length)*100)
      setPorcentagem(resultado);
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [habitsChecked.length, habitosHoje.length]
  );

  return (
      /* A primeira chave é da sintaxe do javascript e a segunda é pelo fato do 
      parâmetro passado no value ser um objeto, então estou desestruturando ele. */
      <UserContext.Provider 
      value={{
        userData, setUserData, 
        habitosHoje, setHabitosHoje, 
        porcentagem, setPorcentagem, 
        habitsChecked, setHabitsChecked,
        atualizaHabitosHoje
        }}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<LoginPage />} />
              <Route path='/cadastro' element={<CreateAccount />} />
              <Route path='/hoje' element={<TodayPage />} />
              <Route path='/habitos' element={<HabitsPage />} />
              <Route path='/historico' element={<HistoryPage />} />
            </Routes>
          </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;
