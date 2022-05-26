import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from  'react-loader-spinner'
import logo from '../assets/images/logo.svg';

import { ContainerForm } from './layouts/ContainerForm';
import axios from 'axios';

export default function LoginPage() {
  const navigate = useNavigate();

  const [stateForm, setStateForm] = useState({
    email: '',
    senha: '',
    disabled: false
  })

  function handleSubmit(event) {
    event.preventDefault();
    const dadosUsuario = {
      email: stateForm.email,
      password: stateForm.senha
    }

    console.log(dadosUsuario);

    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", dadosUsuario)
    .then((response) => {
      console.log("Deu bão");
      console.log(response);
      /* Remover essa liberação dos inputs depois */
      setStateForm((valorAnterior) => {
        return {
          ...valorAnterior, 
          disabled: false,
        }
      });
    })
    .catch((err) =>{
      console.log("Deu xabu");
      console.log(err);
      alert("Erro ao tentar realizar o cadastro.\nVerifique se preencheu os campos corretamente.");
      setStateForm((valorAnterior) => {
        return {
          ...valorAnterior, 
          disabled: false,
        }
      });
    })

    setStateForm((valorAnterior) => {
      return {
        ...valorAnterior, 
        disabled: true,
      }
    });
  }

  return(
    <ContainerForm>
      <img src={logo} alt="logo" />
      <form onSubmit={handleSubmit}>
        <input 
        type="email" 
        placeholder='email'
        value={stateForm.email}
        disabled={stateForm.disabled}
        onChange={(event) => setStateForm(
          (valorAnterior) => {
          return {...valorAnterior, email: event.target.value}})}
        required />

        <input 
        type="password" 
        placeholder='senha'
        value={stateForm.senha}
        disabled={stateForm.disabled}
        onChange={(event) => setStateForm(
          (valorAnterior) => {
          return {...valorAnterior, senha: event.target.value}})}
        required />

        <button 
        type='submit' 
        disabled={stateForm.disabled}
        >
          {stateForm.disabled ? <ThreeDots color="#FFFFFF" width={51} height={13} /> : 'Entrar'}
        </button>

        <button 
        className='mudarForm' 
        type="button" 
        disabled={stateForm.disabled}
        onClick={() => navigate("/cadastro")}
        >
          Não tem uma conta? Cadastre-se!
        </button>
      </form>

    </ContainerForm>
  );
}

