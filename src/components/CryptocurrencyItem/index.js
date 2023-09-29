import './index.css'

const CryptocurrencyItem = props => {
  const {currencyData} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = currencyData

  return (
    <li className="item-container">
      <div className="currency-logo-container">
        <img className="currency-logo" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currencies-values-info">
        <p className="values">{usdValue}</p>
        <p className="values">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
