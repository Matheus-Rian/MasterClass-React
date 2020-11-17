import React from 'react'

//eslint-disable-next-line
export default props => {
    return (
        <div>
            <h2>O número é {props.numero}</h2>
            {props.numero % 2 === 0 ?
                <span>O número é Par</span> :
                <span>O número é impar</span>
            }
        </div>
    )
}