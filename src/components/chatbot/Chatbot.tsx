import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

function MycChatbot() {

  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#fea03b',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#fea03b',
    botFontColor: '#fff',
    userBubbleColor: '#044b4c',
    userFontColor: 'white',
    alignItems:"center"
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
      ]
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
      message: 'Obrigada!Para mais informações entre em contato:projetointe gradorgp6@gmail.com ❤',
      end: true,
    },

  ];
  return (
    
    <ThemeProvider theme={theme}>
    <ChatBot steps={steps} />
  </ThemeProvider>
  )
}

export default MycChatbot;