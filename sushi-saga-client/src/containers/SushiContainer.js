import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

    let iterateOverSushis = () => {
        return props.sushis.map(sushi => {
            return <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} />
        })
    }
    // ============= OR ============= //
    // let iterateOverSushis = props.sushis.map(sushi =>
    //     <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi}/>
    //     )
    // *** Remove function invocation from iterateOverSushis below

    return (
        <Fragment>
            <div className="belt">
                {iterateOverSushis()}
                <MoreButton render4More={props.render4More}/>
            </div>
        </Fragment>
    )
}

export default SushiContainer