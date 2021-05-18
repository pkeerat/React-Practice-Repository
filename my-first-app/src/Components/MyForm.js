import React, { Component } from 'react'

export class MyForm extends Component {

constructor()
{
    super();
    this.state={
        name:'',
        age:''
    }
}

// handleName = (event)=>{
//     this.setState({
//         name:event.target.value
//     });
// }
// handleAge = (event)=>{
//     this.setState({
//         age:event.target.value
//     });
// }

myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val } , () => {console.log(this.state)});
}

handleSubmit = (event)=>{
   alert(`${this.state.name}  ${this.state.age}`);
   event.preventDefault();
}
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text"  name='name' value={this.state.name} onChange={this.myChangeHandler}></input><br></br>
                <label>Age</label>
                <input type="text" name='age' value={this.state.age} onChange={this.myChangeHandler}></input>
                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default MyForm
