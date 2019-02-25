import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
    constructor() {
        super();

        this.state = {
            sushis: [],
            index: 0,
            sushiInMyBelly: [],
            moneyLeft: 100
        }
    }

    componentDidMount() {
        fetch(API)
        .then(res => res.json())
        .then(sushis => {
            // debugger
            // alternate way- creates state for sushi so we don't have to make Sushi.js a class Component w/ state:
            // const allSushis = sushis.map(sushi => {...sushi, eaten: false})
            this.setState({
                sushis: sushis
                // sushis: allSushis
            }
            // ,() => console.log(this.state.sushis)
            )
        })
    }

    chooseFour = () => {
        // console.log(this.state.sushis.slice(0, 4))
        return this.state.sushis.slice(this.state.index, this.state.index + 4)
    }

    nextFour = () => {
        this.setState({
            index: this.state.index + 4
        }
        // ,() = console.log(this.state.index)
        )
    }

    eatSushi = sushi => {
        // debugger
        this.setState({
            sushiInMyBelly: [...this.state.sushiInMyBelly, sushi],
            moneyLeft: this.state.moneyLeft - sushi.price
        })

    }

  render() {
      // console.log(this.state)
    return (
      <div className="app">
        <SushiContainer
            sushis={this.chooseFour()}
            nextFour={this.nextFour}
            eatSushi={this.eatSushi} />
        <Table
            moneyLeft={this.state.moneyLeft}
            sushiInMyBelly={this.state.sushiInMyBelly}/>
      </div>
    );
  }
}

export default App;
