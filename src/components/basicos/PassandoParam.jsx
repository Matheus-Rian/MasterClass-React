import React from 'react'


// eslint-disable-next-line
export default props =>{
    //props.titulo = 'outro titulo'
    //props é apenas leitura, por isso, não posso mudar o valor dele. 
    return (
        <>
        <h3>{props.titulo}</h3>
        <p>{props.subtitulo}</p>
        <p>{2+3}</p>  {/*quando algo é colocado dentro de {} o código é javascript */}
    </>
    )
}
