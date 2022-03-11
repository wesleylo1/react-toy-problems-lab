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
        let palindrome = ""
        let backword = userInput.split("").reverse().join("")
        if (userInput === backword) {
            palindrome = "true"
        } else {
            palindrome = "false"
        }
        this.setState({ palindrome: palindrome })
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
                    Check if palindrome
                </button>
                <span className="resultsBox">
                    palindrome: {this.state.palindrome}
                </span>
            </div>
        )
    }
}
