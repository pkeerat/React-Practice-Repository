import React from 'react';

export const PropsWithFunctionalComponent = (props) => {
    console.log(props);
    return (<div>
        <h1>This is PropsWithFunctionalComponent {props.name}.</h1>
       {props.children}
        </div>
    );
  }


  class PropsWithClassComponent extends React.Component{
      render(){
        return (<h1>This is PropsWithClassComponent {this.props.name}</h1>);
      }
  }
  export default PropsWithClassComponent;

  