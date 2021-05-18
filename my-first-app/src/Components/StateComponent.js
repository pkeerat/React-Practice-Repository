import React from 'react';

class StateComponent extends React.Component{

// This is also one way to create a state
// state={
//     msg:'This is Before State Change'
// }

    constructor()
    {
        super();
        this.state={
            msg:'This is Before State Change'
        }
    }

    changeStatee()
    {
            this.setState({
                msg:'State Changed'
            })
    }
    
 doo = () =>{
    this.changeStatee()
}

    render()
    {
        return(
        <div>
        <h1>{this.state.msg}</h1>
        <button onClick={ this.doo }>Change State</button>
        </div>
        );
    }

    

}

export default StateComponent;