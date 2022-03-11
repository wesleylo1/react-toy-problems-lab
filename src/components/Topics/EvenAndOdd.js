import React, { Component } from "react"

export default class EvenAndOdd extends Component {
    constructor() {
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    handleChange(value) {
        this.setState({ userInput: value })
    }

    evenOrOdd(userInput) {
        let evens = []
        let odds = []

        if (userInput % 2 === 0) {
            evens.push(userInput)
        } else {
            odds.push(userInput)
        }

        this.setState({ evenArray: evens, oddArray: odds })
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evans and Odds</h4>
                <input
                    onChange={(e) => this.handleChange(e.target.value)}
                    className="inputLine"
                    type="number"
                />
                <button
                    onClick={() => this.evenOrOdd(this.state.userInput)}
                    className="confirmationButton"
                >
                    Check
                </button>
                <span className="resultsBox">
                    Evens: {this.state.evenArray}
                </span>
                <span className="resultsBox">Odds: {this.state.oddArray}</span>
            </div>
        )
    }
}
