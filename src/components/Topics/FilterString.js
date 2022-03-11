import React, { Component } from "react"

export default class FilterString extends Component {
    constructor() {
        super()

        this.state = {
            names: [
                "Jake",
                "Steve",
                "Abby",
                "Frank",
                "Ryan",
                "Dobby",
                "Rosa",
                "Sam",
                "Nicole",
                "Joanne"
            ],
            userInput: "",
            filteredNames: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    filteringString(userInput) {
        let names = this.state.names
        let filteredNames = []
        for (let i = 0; i < names.length; i++) {
            if (names[i] === userInput) {
                filteredNames.push(names[i])
            }
        }

        this.setState({ filteredNames: filteredNames })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">
                    unfiltered: {JSON.stringify(this.state.names, null, 10)}
                </span>
                <input
                    onChange={(e) => this.handleChange(e.target.value)}
                    className="inputLine"
                    type="text"
                />
                <button
                    onClick={() => this.filteringString(this.state.userInput)}
                    className="confirmationButton"
                >
                    Filter the String
                </button>
                <span className="resultsBox filterStringRB">
                    filtered:{" "}
                    {JSON.stringify(this.state.filteredNames, null, 10)}
                </span>
            </div>
        )
    }
}
