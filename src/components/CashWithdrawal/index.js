// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="container">
        <div className="withdraw-container">
          <div className="name-container">
            <p className="circle">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="text">Your Balance</p>
            <div>
              <p className="amount">{balance}</p>
              <p className="in-rupee">In Rupees</p>
            </div>
          </div>
          <div className="cash-draw-container">
            <p className="heading">Withdraw</p>
            <p className="text">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denomination-list">
              {denominationsList.map(each => (
                <DenominationItem
                  denominationDetails={each}
                  key={each.id}
                  updateBalance={this.updateBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
