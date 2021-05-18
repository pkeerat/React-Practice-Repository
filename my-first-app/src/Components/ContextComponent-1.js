import React, { Component } from 'react'
import ContextComponent2 from './ContextComponent-2';
import ContextComponent3 from './ContextComponent-3';
import ContextComponent4 from './ContextComponent-4';

export const myContext = React.createContext();
export const myContext1 = React.createContext();

export const myContextMore = React.createContext();


class ContextComponent1 extends Component {

    constructor() {
        super();

        this.state = {
            msg: "hey buddy its context",
            name:'keerat',
            price: 0
        }
    }


    changePrice = () => {
        this.setState({
            price: this.state.price + 1
        });
    }

    render() {

        const contextValue = {
            changePrice: this.changePrice,
            newPrice: this.state.price
        }

        return (
            <div>
                <h1>ContextComponent1</h1>
                <myContext.Provider value={this.state.msg}>
                    <ContextComponent2 ></ContextComponent2>
                </myContext.Provider>

                <myContext.Provider value={this.state.msg}>
                    <myContext1.Provider value={this.state.name}>
                        <ContextComponent3 ></ContextComponent3>
                    </myContext1.Provider>
                </myContext.Provider>

                    
               
                <myContextMore.Provider value={contextValue}>
                    <ContextComponent4 ></ContextComponent4>
                </myContextMore.Provider>

            </div>
        )
    }
}


export default ContextComponent1;
