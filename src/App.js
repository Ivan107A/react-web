import React, { Component } from 'react';
import './App.css';
import { convert, parseNum } from "./util";
import { render } from '@testing-library/react';


const CURRENCIES = ["RUB", "USD", "EUR", "BY", "GBP"];

class CurrencyRow extends Component {
  render() {
    const { currency, isCurrent, value, onChange } = this.props;
    let className = "Currency-Input";
    if (isCurrent) {
      className += " Currency-Input--current";
    }
    return (
      <div className="Currency">
        <input className={className} value={value} onChange={onChange} />
        &nbsp;
        {currency}
      </div>
    );
  }
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCurrency: "RUB",
      value: 100,
      stringValue: "100"
    };
  }

  onChange(currency) {
    return event => {
      const value = event.target.value;
      this.setState({
        currentCurrency: currency,
        stringValue: value,
        value: parseNum(value)
      
      });
    };
  }


  render() {
    const { currentCurrency, value, stringValue } = this.state;
    
    
    return (
    <div className="App">
        {CURRENCIES.map(currency => {
          const isCurrent = currency === currentCurrency;
          return (
          <CurrencyRow 
            key={currency}
            currency={currency} 
            value={
              isCurrent 
                ? stringValue
                : convert(value, currentCurrency, currency )
              }
            onChange={this.onChange(currency)}
            isCurrent ={isCurrent}
          />
         );
      })}
    </div>
  );

  }

}



export default App;
