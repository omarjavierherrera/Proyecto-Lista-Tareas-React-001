import { useState } from 'react';
import './App.css';
import TareaFormulario from './componentes/TareaFormulario';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='aplicacion-tareas'>
      <h1>Lista de tareas</h1>
    </div>
    <div className='tarea-lista-principal'>
      <h2>Mis tareas</h2>
    <ListaDeTareas/>
    </div>
      
    </>
  )
}

export default App
