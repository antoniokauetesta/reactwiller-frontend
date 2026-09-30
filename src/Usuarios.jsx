import { useEffect, useState } from "react"

function Usuarios() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    async function buscarUsuarios() {
      try {
        const response = await fetch(
          "http://localhost:3000/usuarios"
        )

        const data = await response.json()

        setUsuarios(data)
      } catch (error) {
        console.error("Erro ao buscar usuários:", error)
      }
    }

    buscarUsuarios()
  }, [])

  return (
    <div>
      {usuarios.map((usuario) => (
        <div key={usuario.id}>
          <p>ID: {usuario.id} | <b>Nome:</b> {usuario.nome} | <b>Idade:</b> {usuario.idade}</p>
        </div>
      ))}
    </div>
  )
}

export default Usuarios