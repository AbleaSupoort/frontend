import React from 'react';
import './CardContact.css'
import { Link } from 'react-router-dom';


export default function CardContact(props: any) {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="banner-image"><img  className="banner-image" src={props.imagem}/></div>
          <h1> {props.nome}</h1>
          <p className='p' style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 1)"}} >{props.pitch}</p>
        </div>
        <div className="button-wrapper">
          <Link to={props.linkedin} target='_blank'> 
          <button className="btn outline">LINKEDIN</button>
          </Link>
          
          <Link to={props.github} target='_blank'>
          <button className="btn fill">GITHUB</button>
          </Link>
          
        </div>
      </div>
   </>
  )
}