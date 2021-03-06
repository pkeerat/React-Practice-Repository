import React, { Component } from 'react'

const LoginButton = (props) =>{
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }

const LogoutButton = (props) => {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }



  const  Greeting =(props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  const UserGreeting = () => {
    return <h1>Welcome back!</h1>;
  }
  
  const GuestGreeting= () =>{
    return <h1>Please sign up.</h1>;
  }

class ConditionalRenderingComponent extends Component {

    constructor(props) {
      super(props);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick =()=> {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick =()=> {
      this.setState({isLoggedIn: false});
    }

  
      
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }

  export default ConditionalRenderingComponent;
  