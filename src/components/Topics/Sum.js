import React, { Component } from "react"

export default class Sum extends Component {
    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    numberOneChange(val) {
        this.setState({ number1: parseInt(val, 10) })
    }

    numberTwoChange(val) {
        this.setState({ number2: parseInt(val, 10) })
    }

    addNumbers(number1, number2) {
        this.setState({ sum: number1 + number2 })
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input
                    onChange={(e) => this.numberOneChange(e.target.value)}
                    className="inputLine"
                    type="number"
                />
                <input
                    onChange={(e) => this.numberTwoChange(e.target.value)}
                    className="inputLine"
                    type="number"
                />
                <button
                    onClick={() =>
                        this.addNumbers(this.state.number1, this.state.number2)
                    }
                    className="confirmationButton"
                >
                    Add
                </button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}
