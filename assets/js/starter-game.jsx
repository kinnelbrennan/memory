import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root) {
  ReactDOM.render(<Starter />, root);
}

const letters = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F",
"G", "G", "H", "H"]

class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { left: false,
      curRev: [],
      lastInd: -1,
      guessCount: 0,
      score: 0,
      text: [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "]
    };
  }

  update(ind) {
    let curCount = this.state.guessCount;
    let tempArr = this.state.text;
    let revealed = this.state.curRev;
    tempArr[ind] = letters[ind];
    this.setState({guessCount: curCount + 1});
    this.setState({text: tempArr});
    if (revealed.length >= 1 && revealed[0] == letters[ind]
      && ind != this.state.lastInd) {
      this.setState({score: this.state.score + 25 - this.state.guessCount});
      this.setState({curRev: []});
      this.setState({lastInd: ind});
    }
    else if (revealed.length >= 1 && revealed[0] != letters[ind]) {
      setTimeout(() => {this.setState({text: temp2})},1000);
      tempArr[ind] = " ";
      tempArr[this.state.lastInd] = " "
      this.setState({curRev: []});
      this.setState({lastInd: ind});
    }
    else {
      this.setState({curRev: this.state.curRev + [letters[ind]]});
      this.setState({lastInd: ind});
    }
  }

  reset() {
    var textReset = [" "," "," "," "," "," "," "," "," "," "," "," "," ",
    " "," "," "]
    var j, x, i;
    this.setState({score: 0});
    this.setState({guessCount: 0});
    this.setState({text: textReset})
    this.setState({curRev: []})
    for (i = letters.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = letters[i];
      letters[i] = letters[j];
      letters[j] = x;
    }
  }

  render() {
    let button = <button class="button" onClick={() => this.update(0)}>
    {this.state.text[0]}</button>;
    let button2 = <button class="button" onClick={() => this.update(1)}>
      {this.state.text[1]}</button>;
    let button3 = <button class="button" onClick={() => this.update(2)}>
      {this.state.text[2]}</button>;
    let button4 = <button class="button" onClick={() => this.update(3)}>
      {this.state.text[3]}</button>;
    let button5 = <button class="button" onClick={() => this.update(4)}>
      {this.state.text[4]}</button>;
    let button6 = <button class="button" onClick={() => this.update(5)}>
      {this.state.text[5]}</button>;
    let button7 = <button class="button" onClick={() => this.update(6)}>
      {this.state.text[6]}</button>;
    let button8 = <button class="button" onClick={() => this.update(7)}>
      {this.state.text[7]}</button>;
    let button9 = <button class="button" onClick={() => this.update(8)}>
      {this.state.text[8]}</button>;
    let button10 = <button class="button" onClick={() => this.update(9)}>
      {this.state.text[9]}</button>;
    let button11 = <button class="button" onClick={() => this.update(10)}>
      {this.state.text[10]}</button>;
    let button12 = <button class="button" onClick={() => this.update(11)}>
      {this.state.text[11]}</button>;
    let button13 = <button class="button" onClick={() => this.update(12)}>
      {this.state.text[12]}</button>;
    let button14 = <button class="button" onClick={() => this.update(13)}>
      {this.state.text[13]}</button>;
    let button15 = <button class="button" onClick={() => this.update(14)}>
      {this.state.text[14]}</button>;
    let button16 = <button class="button" onClick={() => this.update(15)}>
      {this.state.text[15]}</button>;

    let reset = <button class="button reset" onClick={this.reset.bind(this)}>
        Reset Game</button>;

    if (this.state.left) {
      return <div className="row">
      </div>;
    }
    else {
      return <div class="container">
        <h1>Memorize It!</h1>
        <p>
          <div class="row">
            <div class="column column-15">Score: {this.state.score}</div>
            <div class="column column-80">Guess Count: {this.state.guessCount}
            </div>
          </div>
        </p>
        <div class="row">
          {reset}
        </div>
        <div class="row">
          {button}
          {button2}
          {button3}
          {button4}
        </div>
        <div class="row">
          {button5}
          {button6}
          {button7}
          {button8}
        </div>
        <div class="row">
          {button9}
          {button10}
          {button11}
          {button12}
        </div>
        <div class="row">
          {button13}
          {button14}
          {button15}
          {button16}
        </div>
      </div>;
    }
  }
}
