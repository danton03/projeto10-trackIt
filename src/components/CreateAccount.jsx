import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

import { ContainerForm } from './layouts/ContainerForm';
import { ThreeDots } from  'react-loader-spinner'
import axios from 'axios';

export default function CreateAccount() {
  const navigate = useNavigate();

  //Estado que controla os inputs e botões do formulário
  const [stateForm, setStateForm] = useState({
    email: '',
    senha: '',
    nome: '',
    foto: '',
    disabled: false
  })

  //Função acionada ao clicar no botão de cadastrar
  function handleSubmit(event) {
    event.preventDefault(); //previne o reload da página
    const urlValida = validaImagem();
    console.log("urlValida");
    console.log(urlValida);
    if(urlValida){
      //Dados que serão enviados para a API
      const dadosCadastro = {
        email: stateForm.email,
        name: stateForm.nome,
        image: stateForm.foto,
        password: stateForm.senha
      }

      //Bloqueia a edição do form enquanto a requisição é feita
      setStateForm((valorAnterior) => {
        return {
          ...valorAnterior, 
          disabled: true,
        }
      });

      //Requisição para a API de cadastro de usuários
      const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", dadosCadastro);
      promise.then(() => { navigate("/") }); //sucesso
      promise.catch(failInRequest); //falha

      function failInRequest(resposta) {
        if(resposta.response.status === 409){
          alert(`Erro ao tentar realizar o cadastro.\n${resposta.response.data.message}`);
        }
        else{
          alert("Erro ao tentar realizar o cadastro.\nVerifique se o seu e-mail é válido ou se sua senha tem pelo menos 6 caracteres.");
        }
        setStateForm((valorAnterior) => {
          return {
            ...valorAnterior, 
            disabled: false,
          }
        });
      }
    }
    else{
      alert("Por favor, insira uma url válida para a imagem.\nExtensões aceitas: .jpeg, .jpg e .png");
    }
  }

  function validaImagem(url) {
    const re1 = /https?:([/|.|\w|\s|-])*\.(?:jpg|jpeg|png)/g;
    const re2 = /http?:([/|.|\w|\s|-])*\.(?:jpg|jpeg|png)/g;
    let resultado = false;
    if(re1 || re2){
      resultado = true;
    }
    return resultado;
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