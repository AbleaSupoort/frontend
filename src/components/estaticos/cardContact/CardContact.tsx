import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CardContact.css'
import { Link } from 'react-router-dom';

export default function CardContact(props: any) {
  return (
    <Card className='cardContact' variant="outlined" sx={{ maxWidth: 220, minHeight:400 }}>
      <CardMedia
        sx={{ minHeight: 150 }} 
        image={props.imagem}
        title={props.nome}
      />
      <CardContent  sx={{ minHeight: 250 }} >
        <Typography  className='titleContact' gutterBottom variant="h4" component="h4">
          {props.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.pitch}
        </Typography>
      </CardContent>
      <CardActions>
        
      <Link target='_blank' to={props.linkedin}>
        <Button size="small">LinkedIn</Button>
        </Link>
        <Link target='_blank' to={props.github}>
        <Button size="small">Github</Button>
        </Link>
        
      </CardActions>
    </Card>
  );
}