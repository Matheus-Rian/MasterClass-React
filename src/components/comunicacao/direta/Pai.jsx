import React from 'react'
import Filho from'./Filho'
//eslint-disable-next-line
export default props => 
    <div>
        <Filho {...props}>Maria</Filho>
        <Filho sobrenome={props.sobrenome}>Matheus</Filho>
        <Filho sobrenome='Silva'>Mario</Filho>
    </div>