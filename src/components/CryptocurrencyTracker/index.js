import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
import {Component} from 'react'

import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {
    currenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCurrenciesData()
  }

  getCurrenciesData = async () => {
    const url = 'https://apis.ccbp.in/crypto-currency-converter'
    const response = await fetch(url)
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      currencyLogo: eachItem.currency_logo,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))
    this.setState({
      currenciesData: formattedData,
      isLoading: false,
    })
  }

  render() {
    const {currenciesData, isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList currenciesData={currenciesData} />
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
