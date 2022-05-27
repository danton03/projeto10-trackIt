import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

import { ContainerForm } from './layouts/ContainerForm';
import { ThreeDots } from  'react-loader-spinner'
import axios from 'axios';

export default function CreateAccount() {
  const navigate = useNavigate();

  const [stateForm, setStateForm] = useState({
    email: '',
    senha: '',
    nome: '',
    foto: '',
    disabled: false
  })

  function handleSubmit(event) {
    event.preventDefault();
    const dadosCadastro = {
      email: stateForm.email,
      name: stateForm.nome,
	    image: stateForm.foto,
      password: stateForm.senha
    }
    console.log(dadosCadastro);

    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", dadosCadastro)
    .then((response) => {
      console.log("Deu bão");
      console.log(response);
      navigate("/");
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

        <input 
        type="text" 
        placeholder='nome'
        value={stateForm.nome}
        disabled={stateForm.disabled}
        onChange={(event) => setStateForm(
          (valorAnterior) => {
          return {...valorAnterior, nome: event.target.value}})}
        required />

        <input 
        type="url" 
        placeholder='foto'
        value={stateForm.foto}
        disabled={stateForm.disabled}
        onChange={(event) => setStateForm(
          (valorAnterior) => {
          return {...valorAnterior, foto: event.target.value}})}
        required />

        <button 
        type='submit' 
        disabled={stateForm.disabled}
        >
          {stateForm.disabled ? <ThreeDots color="#FFFFFF" width={51} height={13} /> : 'Cadastrar'}
        </button>

        <button 
        className='mudarForm' 
        type="button" 
        disabled={stateForm.disabled}
        onClick={() => navigate("/")}
        >
          Já tem uma conta? Faça login!
        </button>
      </form>
    </ContainerForm>
  );
}