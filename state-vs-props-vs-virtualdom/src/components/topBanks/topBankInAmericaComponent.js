import React, { Component } from "react";
import BankComponent from "../topBanks/bankComponent";

class TopBankInAmericaComponent extends Component {
  state = {
    topBanks: [
      { name: "JP Morgan Chase", founded: 1940, totalEmployee: 123456 },
      { name: "Bank of America", founded: 1950, totalEmployee: 56456 },
      { name: "Wells Fargo", founded: 1960, totalEmployee: 345556 },
      { name: "U.S Bank", founded: 1980, totalEmployee: 68473856 },
      { name: "Ally Bank", founded: 1990, totalEmployee: 56123456 }
    ],
    title: "Top 5 Banks in America"
  };

  increaseClickHandler = () => {
    const updatedState = this.state.topBanks.map(bankInfo => {
      const tempBankData = bankInfo;
      tempBankData.totalEmployee += 10;
      return tempBankData;
    });
    this.setState({
      updatedState
    });
  };

  render() {
    return (
      <div>
        <h2 className="bank_title">{this.state.title}</h2>
        <button className="btn_handler" onClick={this.increaseClickHandler}>
          Click Here to Increase Total Employee Strength
        </button>
        {this.state.topBanks.map(bank => {
          return (
            <BankComponent
              founded={bank.founded}
              totalEmployee={bank.totalEmployee}
            >
              {bank.name}
            </BankComponent>
          );
        })}
      </div>
    );
  }
}

export default TopBankInAmericaComponent;
