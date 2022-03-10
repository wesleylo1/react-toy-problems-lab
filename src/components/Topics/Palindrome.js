import React, { Component } from "react"

export default class Palindrome extends Component {
    constructor() {
        super()

        this.state = {
            userInput: "",
            palindrome: ""
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    isPalindrome(userInput) {
        let string = userInput
        let backword = userInput
        backword = userInput.split("")
        backword = backword.reverse()
        backword = backword.join("")

        if (string === backword) {
            this.setState({ palindrome: "true" })
        } else {
            this.setState({ palindrome: "false" })
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input
                    onChange={(e) => this.handleChange(e.target.value)}
                    className="inputLine"
                    type="text"
                />
                <button
                    onClick={() => this.isPalindrome(this.state.userInput)}
                    className="confirmationButton"
                >
                    Palindrome
                </button>
                <span className="resultsBox">
                    Palindrome: {this.state.palindrome}
                </span>
            </div>
        )
    }
}
