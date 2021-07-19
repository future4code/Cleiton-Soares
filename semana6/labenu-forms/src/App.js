import React from "react";
import "./App.css";

import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Etapa4 from "./components/Etapa4";

import { GeneralContainer } from "./App.styled";

class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Etapa4 />;

      default:
        break;
    }
  };

  trocaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    return (
      <GeneralContainer>
        {this.renderizaEtapa()}
        {this.state.etapa < 4 && (
          <button onClick={this.trocaEtapa}>Próxima etapa</button>
        )}
      </GeneralContainer>
    );
  }
}

export default App;
