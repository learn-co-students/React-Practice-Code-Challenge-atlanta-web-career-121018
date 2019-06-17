import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
    // console.log(props)
    const mapSushis = props.sushis.map(sushi =>
        <Sushi
            key={sushi.id}
            sushi={sushi}
            eatSushi={props.eatSushi}/>
        )

    return (
        <Fragment>
            <div className="belt">

                {mapSushis}

                <MoreButton
                    nextFour={props.nextFour}/>

            </div>
        </Fragment>
    )
}

export default SushiContainer
