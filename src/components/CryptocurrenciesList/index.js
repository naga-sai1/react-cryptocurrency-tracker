import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {currenciesData} = props
  return (
    <div className="cryptocurrencies-container">
      <h1 className="main-heading">Cryptocurrency Tracker</h1>
      <img
        className="cryptocurrency-image"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <div className="cryptocurrency-table">
        <div className="cryptocurrency-info">
          <p className="coin-type">Coin Type</p>
          <div className="currency-info">
            <p className="currency-type">USD</p>
            <p className="currency-type">EURO</p>
          </div>
        </div>
        <ul className="cryptocurrencies-items-container">
          {currenciesData.map(eachItem => (
            <CryptocurrencyItem key={eachItem.id} currencyData={eachItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
