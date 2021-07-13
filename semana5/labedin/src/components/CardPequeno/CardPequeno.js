import React from 'react';
import Littlecardcontainer from './stl-CardPequeno.js'

function CardPequeno(props) {
  return (
    <Littlecardcontainer>
      <img src={props.imagem} alt={props.titulo}/>
      <div>
        <p><strong>{props.titulo} </strong>{props.texto}</p>
      </div>
    </Littlecardcontainer>
  )
}

export default CardPequeno;