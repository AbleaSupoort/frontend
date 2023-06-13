import React, { useEffect } from 'react';
import { Button, Box, Paper, Grid, Typography } from '@material-ui/core';
import "./Home.css";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/token/Reducer';
import { toast } from 'react-toastify';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {

    let navigate = useNavigate();
    // const [token, setToken] = useLocalStorage('token');

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )
    useEffect(() => {
        if (token == "") {
            // alert("Você precisa estar logado")
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "colored",
                progress: undefined
            })
            navigate("/login")

        }
    }, [token])
    return (
        <>
<Grid container direction="row" justifyContent="center" alignItems="center" className='bemVindo'>
    <Grid md={6} className='TelaGrande' alignItems="center">
                    <Box paddingX={3} >
                        <Typography
                            variant="h4"
                            gutterBottom
                            component="h4"
                            align="center"
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
                            }}
                        >
                            Bem vindo(a)!
                        </Typography>
                        <Typography variant="h6"
                        className='LetraTG'
                            gutterBottom component="h6"
                            align="center"
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
                            }}
                        >O objetivo da educação inclusiva não é tornar todas as crianças iguais, e sim respeitar e valorizar as diferenças.
                        </Typography>
                    </Box>
                    <Box paddingX={3}>
                        <Link to='/postagens'>
                            <Button variant="outlined" className='buttonPost' style={{ backgroundColor: "#faa046", color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" className='bemVindo2'>
    <Grid item xs={12} md={6} className='TelaGrande' alignItems="center">
        <Box paddingX={3} >
            <Typography variant="h5" component="h5" align="center" style={{ color: "white", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", marginBottom: "20px" }}> Essa visão entende que cada aluno tem suas particularidades e que elas devem ser consideradas como diversidade e não como problema. <br></br> E o que o Able faz para ajudar a te informar? </Typography>
            <Link to='/contatos'>
                <Button variant="outlined" className='buttonPost' style={{ backgroundColor: "#faa046", color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>Saiba Mais</Button>
            </Link>
        </Box>
    </Grid>
    <Grid item xs={12} md={6} style={{ display: "flex", justifyContent: "center" }}>
        <Box>
            <img src='https://i.imgur.com/JWMUQKu.png' alt="logo" width="450px" height="300px" />
        </Box>
    </Grid>
</Grid>

<Grid container direction="row" justifyContent="center" alignItems="center" className='bemVindo5'>
<Typography variant="h3" component="h3" align="center" style={{ color: "white", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", marginTop: "50px" }} >Depoimentos</Typography>
</Grid>
<Grid container direction="row" justifyContent="center" alignItems="center" className='bemVindo3'>
    <Grid item xs={12} md={6} className='TelaGrande' alignItems="center">
        <Box className='flex-equipe' marginLeft={1} style={{ marginBottom: "20px" }}>
            <Typography variant='body1' align='center' className='nome' >Pedro</Typography>
            <img src={'https://i.imgur.com/j2woJnN.png'} alt="" className='foto-equipe' />

            <Typography variant='subtitle2' align='center' className='descricao-equipe'>Aluno</Typography>
            <Typography variant='body2' className='descricao-equipe'>
                O Able é uma ótima iniciativa para promover um senso de pertencimento e diversidade nas escolas. Ele me permitiu interagir com colegas que têm habilidades e origens diferentes e, através dessa troca, conseguimos aprender muito uns com os outros. O Able também ajuda os professores a estarem mais conscientes das dinâmicas e das nossas necessidades sociais enquanto alunos, além de permitir que eles criem ambientes de aprendizagem mais inclusivos. Eu acredito que o Able pode fazer uma diferença positiva na vida de muitos estudantes e educadores, assim como fez na minha.
            </Typography>
        </Box>
    </Grid>
    <Grid item xs={12} md={6} className='TelaGrande' alignItems="center">
        <Box className='flex-equipe' marginRight={1} style={{ marginBottom: "20px" }}>
            <Typography variant='body1' align='center' className='nome'>Roberto</Typography>
            <img src={'https://i.imgur.com/j2woJnN.png'} alt="" className='foto-equipe' />
            <Typography variant='subtitle2' align='center' className='descricao-equipe paddingTop5'>Professor</Typography>
            <Typography variant='body2' className='descricao-equipe'>
                Eu uso o Able na minha sala de aula e estou muito satisfeito com os resultados. O Able me ajuda a conhecer melhor os meus alunos e a planejar atividades que atendam às suas necessidades e interesses. O Able também facilita a comunicação e a colaboração entre os alunos, que se tornam mais solidários e respeitosos uns com os outros. O Able é uma ferramenta valiosa para a educação inclusiva e para o desenvolvimento social dos estudantes
            </Typography>
        </Box>
    </Grid>
</Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" className='bemVindo4'>
                <Grid className='TelaGrande' alignItems="center">
                    <Box paddingX={3} >
                        <Typography variant="h3" component="h3" align="center" style={{ color: "white", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", marginTop:"100px" }}>Empresas parceiras</Typography>
                    </Box>
                    <Box display='flex'>
                        <img src={'https://i.imgur.com/ZQYANi9.png'} alt="" className='foto-empresas' />
                        <img src={'https://i.imgur.com/VAdv7u3.png'} alt="" className='foto-empresas' />
                    </Box>

                </Grid>
            </Grid>
        </>
    );
}

export default Home;