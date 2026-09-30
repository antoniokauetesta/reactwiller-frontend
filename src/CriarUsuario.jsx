import { useState } from "react"

function CriarUsuario() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  async function CriarUsuario(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/usar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            nome: nome,
            idade: Number(idade)
          })
        }
      );

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  return (
    <form onSubmit={CriarUsuario}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />

      <input
        type="number"
        placeholder="Idade"
        value={idade}
        onChange={(event) => setIdade(event.target.value)}
      />

      <button type="submit">
        Cadastrar
      </button>
    </form>
  )
}
export default CriarUsuario