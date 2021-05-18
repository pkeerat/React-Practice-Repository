import React, { Component } from 'react'

class LifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            qty: 0
        }

        console.log("LifeCycle: calling constructor")
    }
    

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycle: calling getDerivedStateFromProps")
        return null;
    }

    

    updateQty = () => {
        this.setState({
            qty: this.state.qty + 1
        })
    }

    componentDidMount(){
        console.log("LifeCycle: calling componentDidMount")
    }

    componentDidUpdate(){
        console.log("LifeCycle: calling componentDidUpdate")
    }


    render() {

        console.log("LifeCycle: calling render")

        return (
            <div>
                <button onClick={this.updateQty}>Update Qty</button>
                <p>Cart:{this.state.qty}</p>
            </div>
        )
    }
}

export default LifeCycle
