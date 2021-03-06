import React from 'react'
import petsApi from '../../../api/pets'

class Novo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nome: '',
      dono: '',
      tipo: '',
      observacoes: ''
    }

    this.gerenciarMudancas = this.gerenciarMudancas.bind(this)
    this.gerenciarEnvio = this.gerenciarEnvio.bind(this)
  }

  gerenciarMudancas(evento) {
    const chave = evento.target.name
    const valor = evento.target.value
    this.setState({ [chave]: valor })
  }

  gerenciarEnvio(evento) {
    evento.preventDefault()
    
    petsApi.adicionarPet(this.state)
    this.props.history.push('/pets')
  }

  render() {
    return (
      <div>
        <h1>Novo Pet</h1>

        <form onSubmit={this.gerenciarEnvio}>
          <div>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" value={this.state.nome} onChange={this.gerenciarMudancas} />
          </div>
          <div>
            <label htmlFor="dono">dono</label>
            <input type="text" name="dono" id="dono" value={this.state.dono} onChange={this.gerenciarMudancas} />
          </div>
          <div>
            <label htmlFor="tipo">tipo</label>
            <input type="text" name="tipo" id="tipo" value={this.state.tipo} onChange={this.gerenciarMudancas} />
          </div>
          <div>
            <label htmlFor="observacoes">observacoes</label>
            <input type="text" name="observacoes" id="observacoes" value={this.state.observacoes} onChange={this.gerenciarMudancas} />
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}

export default Novo