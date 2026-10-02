

function App() {
    

  return (
    <>
      <div className="title">
        <h1>Prima pagina in react</h1>
      </div>
      <form className="content">
        <label htmlFor="nome" className="label">Nome</label>
        <input type="text" id='nome' className="input"/>
        <button type="submit">Invia</button>
      </form>
    </>
  )
}

export default App
