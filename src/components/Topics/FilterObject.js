import React, { Component } from "react"

export default class FilterObject extends Component {
    constructor() {
        super()

        this.state = {
            people: [
                {
                    name: "Jake",
                    age: 20,
                    title: "Student"
                },
                {
                    name: "Simon",
                    age: 30,
                    gender: "male"
                },
                {
                    name: "Drake",
                    age: 25,
                    color: "red"
                },
                {
                    name: "Lucy",
                    age: 29,
                    title: "Teacher"
                }
            ],
            userInput: "",
            filteredPeople: []
        }
    }

    handleChange(value) {
        this.setState({ userInput: value })
    }

    filterChange(userInput) {
        let people = this.state.people
        let newPeople = []

        for (let i = 0; i < people.length; i++) {
            if (people[i].hasOwnProperty(userInput)) {
                newPeople.push(people[i])
            }
        }

        this.setState({ filteredPeople: newPeople })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">
                    People: {JSON.stringify(this.state.people, null, 10)}
                </span>
                <input
                    onChange={(e) => this.handleChange(e.target.value)}
                    className="inputLine"
                    type="text"
                />
                <button
                    onClick={() => this.filterChange(this.state.userInput)}
                    className="confirmationButton"
                >
                    filter
                </button>
                <span className="resultsBox filterObjectRB">
                    filtered:
                    {JSON.stringify(this.state.filteredPeople)}
                </span>
            </div>
        )
    }
}
