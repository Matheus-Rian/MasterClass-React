import React from 'react'
import If from './If'

//eslint-disable-next-line
export default props => {
    return (
        <div>
            <h2>O número é {props.numero}</h2>
            <If test={props.numero % 2 === 0}>
                <span>O número é Par</span> 
            </If>
            <If test={props.numero % 2 === 1}>
                <span>O número é impar</span>
            </If>

         
        </div>
    )
}