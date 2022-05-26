/* Importações de estilos CSS com globalStyles */
import GlobalStyle from './assets/styles/GlobalStyle';

/* Importação de funções das dependências */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import CreateAccount from './components/CreateAccount';
/* import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; */

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/cadastro' element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
