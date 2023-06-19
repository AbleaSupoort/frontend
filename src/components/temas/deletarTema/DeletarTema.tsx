import React, { useEffect, useState } from 'react'
import { Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import './DeletarTema.css';
import {useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { toast } from 'react-toastify';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

function DeletarTema() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    //const [token, setToken] = useLocalStorage('token');
    const token = useSelector <UserState, UserState["tokens"]>((state) => state.tokens)
    const [tema, setTema] = useState<Tema>()

    useEffect(() => {
        if (token == "") {
          toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
            });
            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
          navigate('/temas')
            deleteId(`/temas/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success('Tema deletado com sucesso', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: "colored",
              progress: undefined,
              });
          }
        
          function nao() {
            navigate('/temas')
          }
          
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography gutterBottom>
                Deseja deletar o tema:
              </Typography>
              <Typography color="textSecondary">
                {tema?.descricao}
              </Typography>
              <Typography color="textSecondary">
                {tema?.titulo}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary" style={{background:'#044b4c', fontWeight:"bold", color:"white"}}>
                <DoneIcon/>
              </Button>
              </Box>
              <Box mx={2}>
              <Button  onClick={nao} variant="contained" size='large' color="secondary" style={{background:"#F7A63B", fontWeight:"bold", color:"white"}}>
                <ClearIcon/>
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;