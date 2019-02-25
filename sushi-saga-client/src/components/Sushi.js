// import React, { Fragment } from 'react'
import React, { Component } from 'react'

// when do we use component vs functional component?
class Sushi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eaten: false
        }
    }

    handleClick = () => {
        this.setState({
            eaten: !this.state.eaten
        })
        this.props.eatSushi(this.props.sushi)
    }

    render() {
        // console.log(this.props)
        return (
            <div className="sushi">
                <div className="plate"
                    onClick={this.handleClick}>
                    {this.state.eaten ? null : <img src={this.props.sushi.img_url} width='100%' alt={this.props.sushi.name} />}
                </div>

                <h4 className="sushi-details">
                    {this.props.sushi.name} - ${this.props.sushi.price}
                </h4>
            </div>
        )
    }
}

export default Sushi
