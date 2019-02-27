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
            money: 100,
            index: 0,
            sushiInMyBelly: []
        }
    }


    componentDidMount() {
        fetch(API)
        .then(res => res.json())
        .then(data => {
            this.setState({
                sushis: data
            })
        })
    }

    // only show 4 sushis at a time
    chooseFour = () => {
        return this.state.sushis.slice(this.state.index, this.state.index + 4)
    }


    // for the more btn- once index gets to 100, start the list over at 0
    nextFour = () => {
        if (this.state.index < 96) {
            this.setState({
                index: this.state.index + 4
            })
        } else {
            this.setState({
                index: 0
            })
        }
    }

    // goes down the tree to Sushi.js
    // when sushi is clicked, send that sushi object here & add it (non-destructively) to sushiInMyBelly
    eatSushi = (clickedSushi) => {
        const eatenSushi = {...clickedSushi, eaten: true}

        // console.log(eatenSushi)

        if (this.state.money >= eatenSushi.price) {
            this.setState({
                sushiInMyBelly: [...this.state.sushiInMyBelly, eatenSushi],
                money: this.state.money - clickedSushi.price
                // }, () => console.log(this.state))
            })
        } else if (this.state.money < eatenSushi.price){
            alert('u broke!!!')
        }
    }


    render() {
        return (
            <div className="app">

                <SushiContainer
                    sushis={this.chooseFour()}
                    nextFour={this.nextFour}
                    eatSushi={this.eatSushi}/>

                <Table
                    sushiInMyBelly={this.state.sushiInMyBelly}
                    money={this.state.money}/>
            </div>
        );
    }
}

export default App;
