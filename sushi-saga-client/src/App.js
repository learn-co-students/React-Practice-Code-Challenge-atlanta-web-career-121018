import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

    state = {
        sushis: [],
        setIndex: 0,
        wallet: 100,
        belliedSushis: []
    }

    componentDidMount() {
        fetch(API)
        .then(res => res.json())
        .then(sushiData => {
            const sushisAddedData = sushiData.map(sushi => ({ ...sushi, isEaten: false }))
            this.setState({ sushis: sushisAddedData })
        })
    }

    renderOnly4 = () => {
        return this.state.sushis.slice(this.state.setIndex, this.state.setIndex + 4)
    }

    render4More = () => {
        if ((this.state.setIndex + 4) === 100 || (this.state.setIndex + 4) >= 100 ) {
            this.setState({ setIndex: 0 })
        } else {
            let newIndexValue = (this.state.setIndex + 4)
            this.setState({ setIndex: newIndexValue })
            // this.setState({ setIndex: newIndexValue }, () => this.renderOnly4())
        }
    }

    eatSushi = (sushi) => {
        if(this.state.wallet >= sushi.price) {
            let clickedSushi = this.state.sushis.map(sushiObject => {
                if(sushiObject.id === sushi.id) {
                    return { ...sushiObject, isEaten: true }
                } else {
                    return sushiObject;
                }
            })

            let clickedSushiState = clickedSushi.filter(sushi => sushi.isEaten === true)

            this.setState({ sushis: clickedSushi, belliedSushis: clickedSushiState, wallet: this.state.wallet - sushi.price })
        } else {
            alert("Uh uh uh....not enough money.")
        }
    }

    renderWallet = () => {
        return this.state.wallet
    }

    render() {

        console.log(this.state)

        return (
            <div className="app">
                <SushiContainer sushis={this.renderOnly4()} eatSushi={this.eatSushi} render4More={this.render4More} />
                <Table wallet={this.renderWallet()} belliedSushis={this.state.belliedSushis} />
            </div>
        );
    }
}

export default App;