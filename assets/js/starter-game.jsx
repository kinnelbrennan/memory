import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root) {
  ReactDOM.render(<Starter />, root);
}

class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { left: false,
      matched: [],
      curRev: [],
      guessCount: 0,
      score: 0
    };
  }

  swap(_ev) {
    let state1 = _.assign({}, this.state, { left: !this.state.left });
    this.setState(state1);
  }

  hax(_ev) {
    alert("hax!");
  }

  update() {
    var curCount = this.state.guessCount
    this.setState({guessCount: curCount + 1})
  }

  reset() {
    this.setState({score: 0})
    this.setState({guessCount: 0})
  }

  render() {
    let button = <a class="button" onClick={this.update.bind(this)}></a>;

    let reset = <a class="button reset" onClick={this.reset.bind(this)}>
        Reset Game</a>;

    if (this.state.left) {
      return <div className="row">
      </div>;
    }
    else {
      return <div class="container">
        <h1>Memorize It!</h1>
        <p>
          <div class="row">
            <div class="column">Score: {this.state.score}</div>
            <div class="column">Guess Count: {this.state.guessCount}</div>
          </div>
        </p>
        <div class="row">
          {reset}
        </div>
        <div class="row">
          {button}
          {button}
          {button}
          {button}
        </div>
        <div class="row">
          {button}
          {button}
          {button}
          {button}
        </div>
        <div class="row">
          {button}
          {button}
          {button}
          {button}
        </div>
        <div class="row">
          {button}
          {button}
          {button}
          {button}
        </div>
      </div>;
    }
  }
}
