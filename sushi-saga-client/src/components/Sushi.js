// import React, { Fragment } from 'react'
import React, { Component } from 'react'

// const Sushi = (props) => {
class Sushi extends Component {

    constructor() {
        super()

        this.state = {
            eaten: false
        }
    }

    // when sushi is clicked, set 'clicked' to true
    handleClick = event => {
        this.setState({
            eaten: true
        })

        const clickedSushi = this.props.sushi

        // send the clicked sushi object all the way to App.js where the eatSushi function lives so we can add it to sushiInMyBelly!!
        this.props.eatSushi(clickedSushi)
    }

    render() {

        const { name, price, img_url} = this.props.sushi

        return (
            <div className="sushi">
                <div className="plate" onClick={this.handleClick}>
                    {this.state.eaten ? null : <img src={img_url} width="100%"/>}
                </div>

                <h4 className="sushi-details">
                    {name} - ${price}
                </h4>
            </div>
        )
    }
}


export default Sushi
