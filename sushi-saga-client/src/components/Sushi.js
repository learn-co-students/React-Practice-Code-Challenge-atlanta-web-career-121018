import React, { Component } from 'react'

const Sushi = (props) => {

  const handleClick = () => {
    props.eatSushi(props.sushi)
  }

    return (
      <div className="sushi" onClick={handleClick}>
        <div className="plate">
            {props.sushi.eaten ? null : <img src={props.sushi.img_url} width="100%" />}
        </div>

        <h4 className="sushi-details">
          {props.sushi.name} - ${props.sushi.price}
        </h4>
      </div>
    ) 
}

export default Sushi