import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
      <div className="belt">
        {
          props.sushis ?
            <Fragment>
              <Sushi sushi={props.sushis[0]} eatSushi={props.eatSushi} />
              <Sushi sushi={props.sushis[1]} eatSushi={props.eatSushi} />
              <Sushi sushi={props.sushis[2]} eatSushi={props.eatSushi} />
              <Sushi sushi={props.sushis[3]} eatSushi={props.eatSushi} />
            </Fragment>
          :
            null
        }
        <MoreButton showMoreSushi={props.showMoreSushi} />
      </div>
  )
}

export default SushiContainer
