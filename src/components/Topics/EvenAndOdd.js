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

    handleChange(val) {
        this.setState({ userInput: val })
    }

    assignEvenAndOdds(userInput) {
        var arr = userInput.split(",")
        var evens = []
        var odds = []

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i], 10))
            } else {
                odds.push(parseInt(arr[i], 10))
            }
        }
        this.setState({ evenArray: evens, oddArray: odds })
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input
                    onChange={(e) => this.handleChange(e.target.value)}
                    type="text"
                    className="inputLine"
                />
                <button
                    onClick={() => {
                        this.assignEvenAndOdds(this.state.userInput)
                    }}
                    className="confirmationButton"
                >
                    Check
                </button>
                <span className="resultsBox">
                    Evens: {JSON.stringify(this.state.evenArray)}{" "}
                </span>
                <span className="resultsBox">
                    Odds: {JSON.stringify(this.state.oddArray)}
                </span>
            </div>
        )
    }
}
