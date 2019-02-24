import React, { Fragment } from 'react'

const Table = (props) => {

  console.log(props);

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  let eatenSushis

  if (props.sushis) {eatenSushis = props.sushis.filter(sushi => !sushi.img_url)}

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.moneyLeft} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            eatenSushis ? renderPlates(eatenSushis) : null
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
