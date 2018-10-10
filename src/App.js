import React, { Component } from 'react';
import AddMembers from './AddMembers'
import Members from './Members'

class App extends Component {
  state = {
    members: [
      {name: 'Junaid', age: 21, id: 1},
      {name: 'Suhail', age: 18, id: 2},
      {name: 'Naved', age: 23, id: 3}
    ]
  }
  addMember = (member) => {
    member.id = Math.random()
    let members = [...this.state.members, member]
    this.setState({
      members: members
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World, It's your boys</h1>
        <Members members={this.state.members}/>
        <AddMembers addMember={this.addMember} />
      </div>
    );
  }
}

export default App;
