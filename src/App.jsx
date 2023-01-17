import { useState } from 'react'
import './App.scss'
import {Modal} from "./components/Modal"

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='contenedor'>
      <button onClick={() => setOpenModal(true)} className="btn-descargar">Modal</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}/>
    </div>
  )
}

export default App
