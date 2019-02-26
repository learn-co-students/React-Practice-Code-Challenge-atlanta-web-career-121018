import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const sushiList = props.sushis.map(sushi =>
    <Sushi
      key={sushi.id}
      sushi={sushi}
      eatSushi={props.eatSushi} 
      budget={props.budget} />)

  return (
    <Fragment>
      <div className="belt">
        {sushiList}
        <MoreButton nextFour={props.nextFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer