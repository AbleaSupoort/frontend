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
                    <CardContact />
                    <CardContact />
                    <CardContact />
                    <CardContact />
                    <CardContact />
                    <CardContact />
                </div>
            </ div>
        </Box>

    )
};

export default Contatos;