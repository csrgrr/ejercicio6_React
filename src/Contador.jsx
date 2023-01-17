import { useState } from 'react'


const Contador = () => {
    const [contador, setContador] = useState(0)

    const aumentar = () => {
        setContador(contador+1)
    }
    const reducir = () => {
        setContador(contador-1)
    }
    const reset = () => {
        setContador(contador-contador)
    }



    return (
        <>
        <h3>{contador}</h3>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={reducir}>Disminuir</button>
        <button onClick={reset}>Reset</button>
        </>
    )



  }

  
export default Contador
