import React from 'react';
import './Contatos.css';
import CardContact from '../../components/estaticos/cardContact/CardContact';
import Divider from '@mui/material/Divider';
import { Box, Grid, Typography } from '@mui/material';

function Contatos() {
    return (
        <Box >

            <div className='main'>

                <Grid className='historia'>
                    <Grid xs={3}>
                        <Typography  variant="h2" component="h2" style={{ color: "white", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" , marginBottom:"20px"}}>NOSSA HISTÓRIA</Typography>
                    </Grid>
                    <Grid xs={8}> 
                        <Typography className='p' variant='body2' style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
                        Able é uma plataforma de rede social focada em educação inclusiva, que tem como missão conectar pessoas com necessidades inclusivas a oportunidades de aprendizagem e desenvolvimento. Acreditamos que todos são capazes de aprender e ensinar, independentemente das suas limitações ou diferenças. Por isso, oferecemos uma plataforma intuitiva e acessível, que permite aos usuários interagir com conteúdos educacionais adaptados às suas necessidades, compartilhar experiências e conhecimentos, e fazer parte de uma comunidade engajada e solidária. Able é mais do que uma rede social, é um espaço de inclusão e transformação.
                        </Typography>
                    </Grid>
                </Grid>
                <Divider/>
                <Grid className='proposito'>
                    <Grid xs={8}>
                        <Typography className='p' variant='body2' style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}} >O Able é uma ferramenta essencial para quem busca ampliar seus conhecimentos sobre inclusão social e escolar. Com informações técnicas embasadas no conhecimento científico e materiais práticos para auxiliar no dia a dia, o Able se torna uma referência para familiares, profissionais de pessoas com atraso nos marcadores do desenvolvimento e profissionais da Educação. Não perca a oportunidade de se atualizar e contribuir para uma educação mais inclusiva e acessível para todos. Vamos juntos nessa jornada!</Typography>
                    </Grid>

                    <Grid xs={3}>
                        <Typography  variant="h2" component="h2" style={{ color: "white", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" , marginBottom:"20px"}}>NOSSO PROPÓSITO</Typography>
                    </Grid>
                </Grid>

                <Divider />
                <Grid className='cards'>
                    <CardContact
                        imagem='https://i.imgur.com/lqb9Avx.jpg'
                        nome='Amanda'
                        pitch='
                        Sou Amanda e tenho 18 anos,

Sempre fui fascinada com tecnologia e com a possibilidade de ajudar as pessoas através dela,

Sou uma Desenvolvedora de Software Fullstack, orientada a resultados e comprometida em fornecer valor através de excelentes habilidades de comunicação e trabalho em equipe. Possuo conhecimentos em Java, MySQL, JavaScript, React, NodeJS, Git, e outras tecnologias relevantes.

Atualmente me sinto pronta para continuar evoluindo e aprendendo coisas novas'
                        linkedin='https://www.linkedin.com/in/amanda--costa/'
                        github='https://github.com/amandaribeiro0'
                    />
                    <CardContact
                        imagem='https://i.imgur.com/6qxLhZ0.jpg'
                        nome='Brenda'
                        pitch='Olá! Me chamo Brenda. Tenho 26 anos. Sou formada em Enfermagem pela USP e tenho uma especialização pelo Hospital das Clínicas. Desde que me conheço por gente, sempre gostei muito de tecnologia, e, após grande incentivo de um familiar, optei por fazer a transição de carreira para essa área. Sou uma pessoa que tem paixão em aprender coisas novas. Desafios me motivam e sei que estou pronta para enfrentar mais esse. Quero contribuir com meu empenho, dedicação e conhecimentos a fim de agregar valor na criação de soluções que melhorem a vida das pessoas.'
                        github='https://github.com/breramos'
                        linkedin='http://linkedin.com/in/brenda-ramos-bezerra/'
                    />
                    <CardContact
                        imagem='https://i.imgur.com/BM2JKGX.png'
                        nome='Carolina'
                        pitch='Eu sou a Carolina e tenho 36 anos. Como uma boa millennial, me envolvo ativamente com a tecnologia, adaptando-me às mudanças. 
                        Decidi embarcar no bootcamp com o intuito de aprimorar serviços e processos internos das empresas na área de operações. Agora, inicio minha faculdade em Análise e Desenvolvimento de Sistemas, com o propósito de expandir ainda mais meu conhecimento e alcançar novos objetivos com a minha transição para a área de tech.'
                        github='https://github.com/CarolFAraujo'
                        linkedin='https://www.linkedin.com/in/carolinafaraujo/'
                    />

                </Grid>
                <Grid className='cards'>
                    <CardContact
                        imagem='https://i.imgur.com/206bJCK.jpg'
                        nome='Jamile'
                        pitch='Sou Jamile tenho 18 anos, sou uma Desenvolvedora Fullstack Junior. Durante minha trajetória com o mundo tech tive a oportunidade de aprofundar meus conhecimentos em programação, Java, java script, banco de dados, hardware e redes de computadores através do bootcamp Generation e curso técnico de informática integrado ao ensino médio. Em conjunto a estes, também aprendi sobre softskills essenciais para um profissional apto ao mercado de trabalho. Sou uma profissional comunicativa e pró-ativa, e que acredita que a tecnologia é capaz de transformar vidas.'
                        github='https://github.com/fariasjamile'
                        linkedin=''
                    />
                    <CardContact
                        imagem='https://i.imgur.com/fCgovgR.jpg'
                        nome='Lais'
                        pitch='Meu nome é Laís, tenho 29 anos e possuo fluência avançada em espanhol. Atualmente, estou cursando Sistemas de Informação e possuo formação em Gestão Ambiental. Tenho uma paixão por tecnologia e decidi fazer uma transição de carreira para seguir meu sonho nessa área. Estou determinada a construir uma carreira emocionante e desafiadora no setor de tecnologia, onde posso utilizar minhas habilidades para criar soluções inovadoras e impactantes.'
                        github='https://github.com/laisfaustino'
                        linkedin=''
                    />
                    <CardContact
                        imagem='https://i.imgur.com/EW3cTx1.png'
                        nome='Thiago'
                        pitch='Meu nome é Thiago, tenho 21 anos, atualmente cursando Analise e desenvolvimento de sistemas, tenho interesse em diversas áreas da computação, desde criança tenho contato com computadores e venho aprendendo sobre desde então, no caminho desenvolvi softskills importantes para a vivencia na empresa e cliente final, metodologias ágeis e uma comunicação agradável para um trabalho em equipe, hoje sinto que sou capaz de aplicar o que aprendi e estou disposto a me desenvolver ainda mais como profissional e principalmente como aluno.'
                        github='https://github.com/Thiagoatl'
                        linkedin='https://www.linkedin.com/in/thiagoatl/'
                    />

                </Grid>

                {/* <div className='cards '>
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
                </div> */}
            </ div>
        </Box>

    )
};

export default Contatos;