import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';
import './Chatbot.css'
import { ThemeProvider } from 'styled-components';

function MycChatbot() {

  const theme = {
    background: '#f5f8fb',
    headerBgColor: '#fea03b',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#fea03b',
    botFontColor: '#fff',
    userBubbleColor: '#044b4c',
    userFontColor: 'white',
    alignItems: "center",
    fontFamily: 'Helvetica Neue',
  };

  const steps = [

    {
      id: "Greet",
      message: "Olá, sou Lorena assistente do Able! Bem vindo!",
      trigger: "Done",
    },

    {
      id: "Done",
      message: "Por favor, insira seu nome:",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Olá {previousValue}, selecione sua dúvida",
      trigger: "issues",
    },

    {
      id: "issues",
      options: [
        { value: "oqAble", label: "O que é o Able?", trigger: "oqAble" },
        { value: "criadores", label: "Quem são os criadores do Able?", trigger: "criadores" },
        { value: "postagens", label: "Quero ver as postagens do Able!", trigger: "postagens" },
      ]
    },
    {
      id: "postagens",
      component: (
        <div>
          <h6>Clique no botão abaixo</h6>
          <Link to='/postagens'>
            <Button variant="outlined" className='buttonPost' style={{ backgroundColor: "#faa046", color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>Ver Postagens</Button>
          </Link>
        </div>

      ),
      trigger: "newQuestion",
    },
    {
      id: "oqAble",
      message:
        "É uma rede social com o objetivo de levar informação sobre a educação inclusiva",
      trigger: "newQuestion",
    },

    {
      id: "criadores",
      message:
        "O Able foi criado por: Amanda Ribeiro, Brenda Ramos, Carolina Araujo, Jamile Farias, Lais Faustino e Thiago Trevisani",
      trigger: "newQuestion",
    },
    {
      id: "newQuestion",
      message: "Gostaria de fazer outra pergunta?",
      trigger: "resp"

    },
    {
      id: "resp",
      options: [
        { value: "sim", label: "Sim", trigger: "issues" },
        { value: "nao", label: "Não", trigger: "end-message" }
      ]
    },
    {
      id: 'end-message',
      message: 'Obrigada!Para mais informações entre em contato:projetointegrador gp6@gmail.com ❤',
      end: true,
    },

  ];

  
  return (
    
      <ThemeProvider theme={theme}>
        <ChatBot  steps={steps}  
        botAvatar='https://i.imgur.com/ySHKsTp.png' 
        headerTitle='Lorena'
        width='350px'
        recognitionLang='pt'
        className='chat'
        botDelay='700'
        placeholder='Escreva aqui...'
        />
      </ThemeProvider>
  

  )
}

export default MycChatbot;