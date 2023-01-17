import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Contador from './Contador'

function App() {


const aumentar = () =>{
alert("click")
numero++
alert(numero)
}


  return (
    <div>


        <Contador/>
        
       
    </div>
  )
}

export default App
