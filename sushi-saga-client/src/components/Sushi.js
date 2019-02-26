import React, { Component } from 'react'

class Sushi extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      eaten: false
    }
  } 

  handleClick = () => {
    if (this.props.budget >= this.props.sushi.price) {
      console.log(this.props.sushi)
      this.setState({
        eaten: true
      })
    }
    this.props.eatSushi(this.props.sushi)
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" 
            onClick={this.handleClick}>
            {this.state.eaten ? null :
              <img src={this.props.sushi.img_url} width="100%" alt={this.props.sushi.name} />}
        </div>

        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    ) 
  }
}

export default Sushi