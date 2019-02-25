import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
    // console.log(props)
    const sushiList = props.sushis.map(sushi =>
        <Sushi
            key={sushi.id}
            sushi={sushi}
            eatSushi={props.eatSushi}/>)
    // console.log(sushiList)

  return (
    <Fragment>
      <div className="belt">
        {sushiList}
        {/* or props.sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi}) */}
        <MoreButton
            nextFour={props.nextFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
