// Write your code here.

import {Component} from 'react'

import './index.css'

class AgeCalculator extends Component {
  state = {
    yearOfBirth: '',
    showError: false,
    showResult: false,
  }

  sortError = error => {
    this.setState({showError: error})
  }

  sortResult = result => {
    this.setState({showResult: result})
  }

  calculateAge = () => {
    const {yearOfBirth} = this.state
    const born = new Date(yearOfBirth)
    const bornYear = born.getFullYear()
    const present = new Date()
    const presentYear = present.getFullYear()
    const age = presentYear - bornYear
    return age
  }

  clickAge = () => {
    const {yearOfBirth} = this.state
    const age = this.calculateAge()

    if (age > 0 && yearOfBirth.length <= 4 && Number.isInteger(age)) {
      this.sortError(false)
      this.sortResult(true)
    } else {
      this.sortError(true)
    }
  }

  calculatedAgeText = () => {
    const calculateAge = this.calculateAge()

    if (calculateAge === 1) {
      return `You are ${calculateAge} year old by the end of 2021`
    }
    return `You are ${calculateAge} years old by the end of 2021`
  }

  renderCalculatedAge = () => {
    const {showResult} = this.state

    if (showResult) {
      return <p className="age">{this.calculatedAgeText()}</p>
    }
    return null
  }

  errorMessage = () => {
    const {showError} = this.state

    if (showError) {
      return <p className="errorMessage">Enter the year that you are Born</p>
    }
    return null
  }

  changeYearOfBirth = event => {
    const {value} = event.target

    this.setState({yearOfBirth: value})
    this.sortResult(false)
    this.sortResult(false)
  }

  render() {
    const {yearOfBirth} = this.state
    return (
      <div className="bg-cont">
        <div className="card-cont">
          <h1 className="head">Age Calculator</h1>
          <div className="form">
            <div className="inputError">
              <input
                className="inputField"
                onChange={this.changeYearOfBirth}
                placeholder="Enter the year that you are born"
                value={yearOfBirth}
              />
              {this.errorMessage()}
            </div>
            {this.renderCalculatedAge()}
            <div className="butn-cont">
              <button className="butn" type="button" onClick={this.clickAge}>
                Calculate
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            className="image"
            alt="stages of human"
            src="https://assets.ccbp.in/frontend/react-js/age-calculater-persons-img.png"
          />
        </div>
      </div>
    )
  }
}

export default AgeCalculator
