import React from 'react'

//eslint-disable-next-line
export default props => {
    return (
        <div>
          <button onClick={props.onInc}>+</button>
          <button onClick={props.onDec}>-</button>
        </div>
    )
}
