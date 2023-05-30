import React from "react";
import { Box, Typography, Grid, Button } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css'

function Footer () {

    return (
        <div className="footer">
            <Grid container direction="row">
                <Grid item xs={12}>
                    <Box style={{ backgroundColor: "#044b4c", height: "85px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" gutterBottom style={{ color: "white", fontWeight:"400" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box>
                        <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 40, color: "white"  }} />
                            </a>
                            <a href="https://github.com/AbleaSupoort" target="_blank">
                                <GitHubIcon style={{ fontSize: 40, color: "white"  }} />
                            </a>
                            <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                <FacebookIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#044b4c", height: "30px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" , fontSize:"15px", fontWeight:"200" }} >© 2023 Copyright Grupo 06</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>




        </div>
    )
};

export default Footer;