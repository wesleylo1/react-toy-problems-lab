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

    changeNumberOne(val) {
        this.setState({ number1: val })
    }

    changeNumberTwo(val) {
        this.setState({ number2: val })
    }

    addNumbers(num1, num2) {
        let a = parseInt(num1, 10)
        let b = parseInt(num2, 10)
        let sum = a + b
        this.setState({ sum: sum })
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input
                    onChange={(e) => this.changeNumberOne(e.target.value)}
                    className="inputLine"
                    type="number"
                />
                <input
                    onChange={(e) => this.changeNumberTwo(e.target.value)}
                    className="inputLine"
                    type="number"
                />
                <button
                    onClick={() =>
                        this.addNumbers(this.state.number1, this.state.number2)
                    }
                    className="confirmationButton"
                >
                    add
                </button>
                <span className="resultsBox">sum: {this.state.sum}</span>
            </div>
        )
    }
}
