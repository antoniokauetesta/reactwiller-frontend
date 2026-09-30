import { useState, useEffect } from 'react'
import './App.css'
import Usuarios from "./Usuarios.jsx"
import CriarUsuario from './CriarUsuario.jsx'

function App() {

  return (
  <>
    <h1>Usuários</h1>
      <CriarUsuario />
      <Usuarios />
  </>
  )
}

export default App
