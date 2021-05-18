import React, { Component } from 'react'

export class PropsToContructor extends Component {

constructor(props)
{
    super(props);
    this.state={
        msg:this.props.msg
    }
}

    render() {
        return (
            <div>
            <h1>{this.state.msg}</h1>
            </div>
        )
    }
}

export default PropsToContructor
