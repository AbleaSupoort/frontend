import React from 'react';
import './Contatos.css';
import CardContact from '../../components/estaticos/cardContact/CardContact';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';

function Contatos() {
    return (
        <Box >

            <div className='main'>

                <div className='paragrafo'>
                    <h1 style={{ padding: '5px' }} >Nossa história</h1>
                    <>
                    A ABLE é marcada por um compromisso contínuo com educação inclusiva. Acreditamos firmemente que todos os indivíduos têm o direito fundamental de acesso a uma educação de qualidade, independentemente de suas diferenças e habilidades. Ao longo dos últimos meses, temos trabalhado para construir um ambiente educacional inclusivo, acolhedor e equitativo, onde cada Usuário tenha a oportunidade de aprender e desenvolver todo o seu potencial.
                    </>
                </div>

                <Divider />
                <div className='paragrafo'>
                    <>
                        A educação inclusiva é uma abordagem que busca garantir que todas as pessoas, independentemente de suas diferenças e necessidades, tenham acesso a uma educação de qualidade. Nosso objetivo é trazer conhecimento para uma sociedade diversa, promovendo a empatia, a tolerância e a valorização das diferenças.
                    </>
                    <h1 style={{ padding: '5px' }}>Nosso propósito</h1>
                </div>

                <Divider />
                <div className='cards'>
                    <CardContact
                        imagem='https://i.imgur.com/lqb9Avx.jpg'
                        nome='Amanda'
                        pitch='
                        Sempre fui fascinada com tecnologia e com a possibilidade de ajudar as pessoas através dela,
                        Sou uma Desenvolvedora de Software Fullstack, orientada a resultados e comprometida em fornecer valor através de excelentes habilidades de comunicação e trabalho em equipe.
                         Possuo conhecimentos em Java, MySQL, JavaScript, React, NodeJS, Git, e outras tecnologias relevantes.'
                        linkedin='https://www.linkedin.com/in/amanda--costa/'
                        github='https://github.com/amandaribeiro0'
                   />
                    <CardContact
                        imagem=''
                        nome='Brenda'
                        pitch=''
                        github='https://github.com/breramos'
                    />
                    <CardContact
                        imagem=''
                        nome='Carolina'
                        pitch=''
                        github='https://github.com/CarolFAraujo'
                        linkedin=''
                    />
                    <CardContact 
                        imagem=''
                        nome='Jamile'
                        pitch=''
                        github='https://github.com/fariasjamile'
                        linkedin=''
                    />
                    <CardContact
                        imagem=''
                        nome='Lais'
                        pitch=''
                        github='https://github.com/laisfaustino'
                        linkedin=''
                    />
                    <CardContact 
                        imagem=''
                        nome='Thiago'
                        pitch=''
                        github='https://github.com/Thiagoatl'
                        linkedin=''
                    />
                </div>
            </ div>
        </Box>

    )
};

export default Contatos;