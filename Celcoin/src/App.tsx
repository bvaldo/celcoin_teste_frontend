import { useState } from 'react'
import logo from './logo.svg'
import {CardPatients} from './components/common/CardPatients'
import { Container } from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

 

  return (
    <>
      <div className="App">
        <p>Hello!</p>       
      </div>
      <CardPatients  
          imgSrc='' 
          name='Renata Augusto Ferreira' 
          labelTestPerformed='TESTE REALIZADO'
          testPerformed= 'TDAH CAB ADHD' 
          labelDate='REALIZADO EM:'
          date= '20/10/2023' 
      />
    </>
  )
}

export default App
