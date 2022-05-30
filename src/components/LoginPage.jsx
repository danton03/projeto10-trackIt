import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from  'react-loader-spinner'
import { useContext } from "react";
import axios from 'axios';

import logo from '../assets/images/logo.svg';

import { ContainerForm } from './layouts/ContainerForm';

import UserContext from ".././contexts/UserContext";


export default function LoginPage() {
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  //Estado que controla os inputs e botões do formulário
  const [stateForm, setStateForm] = useState({
    email: '',
    senha: '',
    disabled: false
  })

  //Função acionada ao clicar no botão de cadastrar
  function handleSubmit(event) {
    event.preventDefault(); //previne o reload da página

    //Dados que serão enviados para a API
    const dadosUsuario = {
      email: stateForm.email,
      password: stateForm.senha
    }

    //Bloqueia a edição do form enquanto a requisição é feita
    setStateForm((valorAnterior) => {
      return {
        ...valorAnterior, 
        disabled: true,
      }
    });

    //Requisição para a API de login
    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", dadosUsuario);
    promise.then(successRequest); //sucesso
    promise.catch(failInRequest); //falha
    
    function successRequest(response) {
      const userToken = response.data.token;
      const imgUrl = response.data.image; 
      setUserData({img: imgUrl, token: userToken});
      navigate("/hoje");
    }

    function failInRequest() {
      alert("Erro ao tentar logar.\nVerifique se preencheu os campos corretamente.");
      setStateForm((valorAnterior) => {
        return {
          ...valorAnterior, 
          disabled: false,
        }
      });
    }
    
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

