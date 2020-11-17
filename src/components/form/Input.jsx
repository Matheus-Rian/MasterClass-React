import React, { useState } from 'react'

//eslint-disable-next-line
export default () => {
    let [nome, setNome] = useState('Pedro')
    return (
        <>
            <h3>Olá, {nome}</h3>
            <input type='text' value={nome} 
                onChange={e => setNome(e.target.value)}/>
        </>
    )
}