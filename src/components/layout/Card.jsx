import React from 'react'
import './Card.css'

//eslint-disable-next-line
export default props => 
    <div className='Card'>
        <div className="Conteudo">
            {props.children}
        </div>
        <div className="Footer">
            {props.titulo}
        </div>
    </div>