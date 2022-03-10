import React, { Component } from "react"

export default class FilterObject extends Component {
    constructor(props) {
        super(props)

        this.state = {
            people: [
                {
                    name: "Jackie",
                    title: "student",
                    age: 24
                },
                {
                    name: "Steve",
                    gender: "Male",
                    age: 30
                },
                {
                    name: "Frank",
                    title: "CEO"
                }
            ],
            userInput: "",
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    filterPeople(prop) {
        let people = this.state.people
        let filteredPeople = []

        for (let i = 0; i < people.length; i++) {
            if (people[i].hasOwnProperty(prop)) {
                filteredPeople.push(people[i])
            }
        }

        this.setState({ userInput: "" })
        this.setState({ filteredArray: filteredPeople })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">
                    Original: {JSON.stringify(this.state.people)}
                </span>
                <input
                    onChange={(e) => this.handleChange(e.target.value)}
                    className="inputLine"
                    type="text"
                />
                <button
                    onClick={() => this.filterPeople(this.state.userInput)}
                    className="confirmationButton"
                >
                    Filter
                </button>
                <span className="resultsBox filterObjectRB">
                    Filtered Array: {JSON.stringify(this.state.filteredArray)}
                </span>
            </div>
        )
    }
}
