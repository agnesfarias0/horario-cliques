import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

class ClockClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      lastClickTime: null,
      clickTimes: [],
    };
  }

  handleClick() {
    const currentTime = new Date().toLocaleTimeString();
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1,
      lastClickTime: currentTime,
      clickTimes: [...prevState.clickTimes, currentTime],
    }));
  }

  render() {
    return (
      <div>
        <h1>Registro de Horário de Cliques</h1>
        <button onClick={() => this.handleClick()}>Clique aqui</button>
        <h3>Total de Cliques: {this.state.clicks}</h3>

        <ul>
          {this.state.clickTimes.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
      </div>
    );
  }
}

root.render(
  <ClockClass />
);