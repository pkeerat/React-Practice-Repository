import React from 'react';

class EventHandling extends React.Component{

    constructor()
    {

        super();
        //this.changeState=this.changeState.bind(this);
        this.state={
            msg:'This is Event Handling'
        }

        //this.changeState=this.changeState.bind(this)

    }

      changeState() //arrow fucntion is designed in this way it let use the this keywork, without throwing undefined
    {
            this.setState({
                msg:'State Changed'
            }, () => {console.log(this.state.msg)})


            
    }
    


    render()
    {
        return(
        <div>
        <h1>{this.state.msg}</h1>
        <button onClick={() =>{this.changeState()}}>Change State</button>
        </div>
        );
    }

    

}

export default EventHandling;