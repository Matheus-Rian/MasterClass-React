import React from 'react'
import './Card.css'

//eslint-disable-next-line
export default props => 
    <div className='Card' style={
        {borderColor: props.color || '#5A6A62' }
    }>
        <div className="Content">
            {props.children}
        </div>

        <div className="Footer" style={
            {backgroundColor: props.color || '#5A6A62' }
        }>
            {props.titulo}
        </div>
    </div>