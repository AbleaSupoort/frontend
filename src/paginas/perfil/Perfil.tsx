import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import User from '../../models/User';
import { buscaId } from '../../services/Service';
import { addToken } from '../../store/token/Actions';
import { UserState } from '../../store/token/Reducer';
import './Perfil.css';
import { toast } from 'react-toastify';
import { Typography } from '@material-ui/core';

function Perfil() {

    let history = useNavigate()

    const dispatch = useDispatch()
    
    // Pega o ID guardado no Store
    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    // Pega o Token guardado no Store
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,    // Faz uma conversão de String para Number
        nome: '',
        usuario: '',
        foto:'',
        senha: '',
    })

    useEffect(() => {
        if (token === "") {
            toast.error('Usuário não autenticado!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
              });
            history("/login")
        }
    }, [token])

    // Método para pegar os dados de um Usuário especifico pelo ID
    async function findById(id: string) {
        try {
            await buscaId(`/usuarios/${id}`, setUser, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.response?.status === 403) {
                dispatch(addToken(''))
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    

    function goLogout() {
        dispatch(addToken(''))
        // alert("Usuário deslogado")
        toast.info('Usuario deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored",
            progress: undefined
        })
        history('/login')
    }

    return (

        
        <Box className='card-principal'>
            <Box className='card-container-imagem'>
                <img className='card-imagem'
                    src={user.foto}
                    alt={user.nome} />
            </Box>

            <Box className='card-container-info'>
                <Box>
                    <Typography variant='h3' className='h1'>{user.nome}</Typography>
                    <Typography className='h3'>{user.usuario}</Typography>
                    {/* <h1>{user.nome}</h1>
                    <h3>{user.usuario}</h3>
                    <hr /> */}
                </Box>

                <Box>
                <Button onClick={goLogout} variant="contained" disableElevation style={{ color: "white", fontWeight: "bolder", background:"#fea03b" }}>Logout</Button>
                </Box>

            </Box>
        </Box>
    )
}

export default Perfil
