import React, { Component } from 'react'

export default class AddMembers extends Component {
    state = {
        name: null,
        age: null,
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.addMember(this.state)
    }
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter the Name" onChange={this.handleChange}/>
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" placeholder="Enter the Age" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
