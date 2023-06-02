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
                <Grid alignItems="center" item xs={7}>
                    <Box paddingX={20} >
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
                    <Box paddingBottom={5} display="flex" justifyContent="center">
                        <Link to='/postagens'>
                            <Button variant="outlined" className='buttonPost' style={{ backgroundColor: "#faa046", color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" className='bemVindo2' style={{ height: 320 }}>
                <Grid  id='teste'alignItems="center" item xs={6}>
                    
                    <Box paddingX={20} >
                        <Typography variant="h5" component="h5" align="center" style={{ color: "white", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" , marginBottom:"20px"}}> Essa visão entende que cada aluno tem suas particularidades e que elas devem ser consideradas como diversidade e não como problema. <br></br> E o que o Able faz para ajudar a te informar? </Typography>
                    </Box>
                    <Link to='/contatos'>
                        <Button variant="outlined" className='buttonPost' style={{ backgroundColor: "#faa046", color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>Saiba Mais</Button>
                    </Link>
                </Grid>
                <Grid id='teste1' item xs={6} >
                    <img src='https://i.imgur.com/JWMUQKu.png' alt="logo" width="450px" height="300px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

            <Grid container direction="row-reverse" justifyContent="center" alignItems="center" className='bemVindo3' style={{ height: 300, textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5)" }}>
                <Grid alignItems="center" item xs={10} >
                <Typography variant="h3" component="h3" align="center" style={{ color: "white", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }} >Depoimentos</Typography>
                    <Box display='flex' padding={5}>
                   
                        <Box className='flex-equipe' marginRight={10}>
                            <Typography variant='body1' align='center' className='nome'>Aluno 1</Typography>
                            <img src={'https://i.imgur.com/j2woJnN.png'} alt="" className='foto-equipe' />
                            <Typography variant='subtitle2' align='center' className='descricao-equipe paddingTop5'>Aluno | Aluno</Typography>
                            <Typography variant='subtitle2' align='center' className='descricao-equipe'>Aluno | Aluno</Typography>
                            <Typography variant='body2' className='descricao-equipe paddingTop5 paddingY'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste similique omnis deleniti nobis numquam ut eaque, magnam, voluptatum, alias officiis quibusdam explicabo nostrum soluta optio. Accusamus eius omnis voluptas. Iusto!
                            </Typography>

                        </Box>
                        <Box className='flex-equipe' marginLeft={10}>
                            <Typography variant='body1' align='center' className='nome'>Aluno 2</Typography>
                            <img src={'https://i.imgur.com/j2woJnN.png'} alt="" className='foto-equipe' />
                            <Typography variant='subtitle2' align='center' className='descricao-equipe paddingTop5'>Aluno | Aluno</Typography>
                            <Typography variant='subtitle2' align='center' className='descricao-equipe'>Aluno | Aluno</Typography>
                            <Typography variant='body2' className='descricao-equipe paddingTop5 paddingY'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quae, ea, nobis placeat ducimus veritatis perferendis ullam culpa nihil rem adipisci sint eaque quia consequatur excepturi ex doloribus nostrum dolores!
                            </Typography>

                        </Box>

                    </Box>

                </Grid>

                
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" className='bemVindo4' style={{ height: 380, backgroundColor: "#006266" }}>
                            <Box marginTop={65}>
                            </Box>
                <Grid alignItems="center" item xs={12}>
                    <Box paddingX={20} >
                        <Typography variant="h3" component="h3" align="center" style={{ color: "white", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>Empresas parceiras</Typography>
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