import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

import { ContainerForm } from './layouts/ContainerForm';

export default function LoginPage() {
  return(
    <ContainerForm>
      <img src={logo} alt="logo" />
      <form>
        <input type="email" placeholder='email'/> 
        <input type="password" placeholder='senha' />
        <button type='submit'>Entrar</button>
        <Link to={"/cadastro"}>Não tem uma conta? Cadastre-se!</Link>
      </form>
    </ContainerForm>
  );
}

