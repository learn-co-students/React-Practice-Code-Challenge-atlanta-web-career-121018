import React from 'react'

const WalletForm = (props) => {
  return(
    <form onSubmit={props.updateMoneyLeft}>
      <input type="number" name="input" />
      <input type="submit" value="Add Money" />
    </form>
  )
}

export default WalletForm
