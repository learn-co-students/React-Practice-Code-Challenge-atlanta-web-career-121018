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
    .then(sushiData => {
      const sushis = sushiData.map(sushi => ({
        ...sushi, eaten: false
      }))
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
      const newSushiData = this.state.sushis.map(sushiObj => {
        if (sushiObj.id === sushi.id) {
          return { ...sushiObj, eaten: true };
        } else {
          return sushiObj;
        }
      })
      const eatenSushi = newSushiData.filter(sushi => sushi.eaten === true)
      this.setState({
        sushiInMyBelly: eatenSushi,
        budget: this.state.budget - sushi.price,
        sushis: newSushiData
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