import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  margin: 0 1rem;
  width: 100%;
  max-width: 300px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const ContainerTarefa = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  /* justify-items: center; */
  margin: 1rem 0;
  grid-template-columns: 90% 10%;
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
  }

  componentDidMount() {
    localStorage.length &&
      this.setState({ tarefas: JSON.parse(localStorage.getItem("tarefas")) });
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value }); 
  };

  criaTarefa = () => {
    if (this.state.inputValue !== "") {
      const novaTarefa = {
        id: Date.now(),
        texto: this.state.inputValue,
        completa: false,
      };
      const novoArrayTarefas = [novaTarefa, ...this.state.tarefas];
      this.setState({ tarefas: novoArrayTarefas, inputValue: "" });
    }
  };

  deletaTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.filter((tarefa) => {
      return id !== tarefa.id
    })
    this.setState({tarefas: novaListaTarefas})
  }

  selectTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa,
        };
        return novaTarefa;
      } else {
        return tarefa;
      }
    });

    this.setState({ tarefas: novaListaTarefas });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa, index) => {
            return (
              <ContainerTarefa>
                <Tarefa
                  key={index}
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
                <button onClick={() => {this.deletaTarefa(tarefa.id)}}>x</button>
              </ContainerTarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
