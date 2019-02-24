import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import WalletForm from './components/WalletForm'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()

    this.state = {
      sushis: null,
      moneyLeft: 70,
    }
  }

  componentDidMount() {
    fetch(API).then(res => res.json()).then(sushis => {
      this.setState({
        sushis: sushis
      })
    })
  }

  showMoreSushi = () => {
    let newSushis = this.state.sushis.slice()
    const drop = newSushis.shift()
    newSushis = [...newSushis, drop]
    this.setState({
      sushis: newSushis
    })
  }

  eatSushi = (sushi) => {
    if (sushi.img_url && this.state.moneyLeft >= sushi.price) {
      const newSushis = this.state.sushis
      newSushis.find((obj) => obj.id === sushi.id).img_url = null

      this.setState({
        sushis: newSushis,
        moneyLeft: this.state.moneyLeft - sushi.price
      })
    }
  }

  updateMoneyLeft = (event) => {
    event.preventDefault()

    this.setState({
      moneyLeft: this.state.moneyLeft + parseInt(event.target.input.value)
    })

    event.target.reset()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          showMoreSushi={this.showMoreSushi}
          eatSushi={this.eatSushi}
        />
        <Table
          sushis={this.state.sushis}
          moneyLeft={this.state.moneyLeft}
        />
        <WalletForm updateMoneyLeft={this.updateMoneyLeft} />
      </div>
    );
  }
}

export default App;
