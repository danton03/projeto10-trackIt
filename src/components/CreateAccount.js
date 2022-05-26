import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

import { ContainerForm } from './layouts/ContainerForm';

export default function CreateAccount() {
  return(
    <ContainerForm>
      <img src={logo} alt="logo" />
      <form>
        <input type="email" placeholder='email'/> 
        <input type="password" placeholder='senha' />
        <input type="text" placeholder='nome'/> 
        <input type="url" placeholder='foto' />
        <button type='submit'>Cadastrar</button>
        <Link to={"/"}>Já tem uma conta? Faça login!</Link>
      </form>
    </ContainerForm>
  );
}