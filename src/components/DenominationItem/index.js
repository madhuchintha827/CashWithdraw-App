// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails
  const onButtonClick = () => {
    updateBalance(value)
  }

  return (
    <li className="list-container">
      <button className="button" type="button" onClick={onButtonClick}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
