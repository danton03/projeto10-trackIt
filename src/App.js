/* Importações de estilos CSS com globalStyles */
import GlobalStyle from './assets/styles/GlobalStyle';

/* Importação de funções das dependências */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import CreateAccount from './components/CreateAccount';
import HabitsPage from './components/HabitsPage';
import UserContext from "./contexts/UserContext";
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState(null);
  return (
      /* A primeira chave é da sintaxe do javascript e a segunda é pelo fato do 
      parâmetro passado no value ser um objeto, então estou desestruturando ele. */
      <UserContext.Provider value={{userData, setUserData}}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/cadastro' element={<CreateAccount />} />
            <Route path='/habitos' element={<HabitsPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;
