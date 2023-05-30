import React from 'react';
import { Button, Box, Paper, Grid, Typography } from '@material-ui/core';
import "./Home.css";
import { Link } from 'react-router-dom';
function Home() {
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
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}
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
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h5" component="h5" align="center" style={{ color: "white", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}> Essa visão entende que cada aluno tem suas particularidades e que elas devem ser consideradas como diversidade e não como problema. <br></br> E o que o Able faz para ajudar a te informar? </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    </Box>
                    <Link to='/contatos'>
                            <Button variant="outlined" className='buttonPost' style={{ backgroundColor: "#faa046", color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>Saiba Mais</Button>
                        </Link>
                </Grid>
                <Grid item xs={6} >
                    <img src='https://i.imgur.com/JWMUQKu.png' alt="logo" width="450px" height="300px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

            <Grid container direction="row-reverse" justifyContent="center" alignItems="center" className='bemVindo3' style={{ height: 300, textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5)" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" component="h3" align="center" style={{ color: "white", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>Ou se preferir...</Typography>
                        <Typography variant="h5" component="h5" align="center" style={{ color: "white", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>Veja os nossos temas!</Typography>
                    </Box>
                    <Box>
                        <Box marginRight={2}>
                        </Box>
                        <Box paddingBottom={5} display="flex" justifyContent="center">
                        <Link to='/temas'>
                            <Button variant="outlined" className='buttonPost' style={{ backgroundColor: "#faa046", color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>Ver Temas</Button>
                        </Link>
                    </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src='https://i.imgur.com/do9e8PJ.png' alt="logo" width="450px" height="300px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" className='bemVindo4' style={{ height: 300, backgroundColor: "#006266" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" component="h3" align="center" style={{ color: "white", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>Você também</Typography>
                        <Typography variant="h5" component="h5" align="center" style={{ color: "white", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>Pode criar suas postagens!</Typography>
                    </Box>
                    <Link to='/formulariopostagens'>
                            <Button variant="outlined" className='buttonPost' style={{ backgroundColor: "#faa046", color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>Criar Postagem</Button>
                        </Link>
                </Grid>
                <Grid item xs={6} >
                    <img src='https://i.imgur.com/do9e8PJ.png' alt="logo" width="450px" height="300px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;