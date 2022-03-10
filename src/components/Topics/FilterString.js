import React, { Component } from "react"

export default class FilterString extends Component {
    constructor() {
        super()

        this.state = {
            names: ["Jasmine", "Jared", "Zeke", "Frank"],
            userInput: "",
            filteredNames: []
        }
    }

    changeInput(value) {
        this.setState({ userInput: value })
    }

    filterString(userInput) {
        let names = this.state.names
        let filteredNames = []

        for (let i = 0; i < names.length; i++) {
            if (names[i].includes(userInput)) {
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
                    Original: {JSON.stringify(this.state.names)}
                </span>
                <input
                    onChange={(e) => this.changeInput(e.target.value)}
                    className="inputLine"
                    type="text"
                />
                <button
                    onClick={() => this.filterString(this.state.userInput)}
                    className="confirmationButton"
                >
                    Filter
                </button>
                <span className="resultsBox filterStringRB">
                    Filtered: {JSON.stringify(this.state.filteredNames)}
                </span>
            </div>
        )
    }
}
