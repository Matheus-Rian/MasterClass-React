import React, { useState} from 'react'

//eslint-disable-next-line
export default props => {
    const [numeros, setNumeros] = useState(Array(props.qtdeNumero).fill(0))
    function gerarNumerosNaoContido(array) {
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min)) + 1
        return array.includes(novoNumero)
            ? gerarNumerosNaoContido(array) : novoNumero
    }

    function handleGenerator ()  {
        const novoArray = Array(props.qtdeNumero)
            .fill(0)
            .reduce((a, e) => {
                const novoNumero = gerarNumerosNaoContido(a)
                console.log(a, e, novoNumero)
                return [...a, novoNumero]
            }, [])
            .sort((a,b) => a - b)
        setNumeros(novoArray)
    }

    return (
        <div>
            <h3>Gerar números da Mega Sena</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={handleGenerator}>Clique aqui</button>
        </div>
    )
}