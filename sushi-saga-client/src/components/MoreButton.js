import React from 'react'

const MoreButton = (props) => {

    let handleClick = () => {
        props.render4More()
    }

    return (
        <button onClick={handleClick}>
            More sushi!
        </button>
    )
}

export default MoreButton