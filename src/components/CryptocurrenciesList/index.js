import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    isLoading: true,
    cryptocurrenciList: [],
  }

  componentDidMount() {
    this.getCryptocurrenciData()
  }

  getCryptocurrenciData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    console.log(response.status)
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptocurrenciList: updatedData, isLoading: false})
  }

  render() {
    const {cryptocurrenciList, isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="main-heading">Cryptocurrency Tracker</h1>
            <div className="items-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                alt="cryptocurrency"
                className="currency-img"
              />
              <div className="coins-container">
                <div className="coins-names-container">
                  <p className="coin-type">Coin Type</p>
                  <div className="usd-and-euro">
                    <p className="coin-info">USD</p>
                    <p className="coin-info">EURO</p>
                  </div>
                </div>
                <ul className="crypto-currency-items-container">
                  {cryptocurrenciList.map(eachItem => (
                    <CryptocurrencyItem
                      currencyData={eachItem}
                      key={eachItem.id}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
