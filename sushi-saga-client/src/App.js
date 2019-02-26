import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()

    this.state = {
      sushis: [],
      index: 0,
      sushiInMyBelly: [],
      budget: 100
    }
  } 

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      console.log(sushis)
      this.setState({
        sushis: sushis
      })
    })
  } 

  chooseFour = () => {
    return this.state.sushis.slice(this.state.index, this.state.index + 4)
  }

  nextFour = () => {
    if (this.state.index + 4 === 100) {
      this.setState({
        index: 0
      })
    } else {
      this.setState({
        index: this.state.index + 4
      })
    }
  } 

  eatSushi = (sushi) => {
    if (this.state.budget >= sushi.price) {
      this.setState({
        sushiInMyBelly: [...this.state.sushiInMyBelly, sushi],
        budget: this.state.budget - sushi.price
      })
    } else {
      alert("Sorry, no can do!")
    }

  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.chooseFour()}
          nextFour={this.nextFour}
          eatSushi={this.eatSushi}
          budget={this.state.budget} />
        <Table 
          budget={this.state.budget}
          sushiInMyBelly={this.state.sushiInMyBelly} />
      </div>
    );
  }
}

export default App;