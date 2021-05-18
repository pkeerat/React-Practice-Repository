import React from 'react';

import './App.css';
import ClassComponent from './Components/ClassComponent';
import FunctionalComponent from './Components/FunctionalComponent';
import { FunctionalConstComponent } from './Components/FunctionalComponent';
import { PropsWithFunctionalComponent } from './Components/Props';
import PropsWithClassComponent from './Components/Props';
import StateComponent from './Components/StateComponent';
import EventHandling from './Components/EventHandling';
import PropsToContructor from './Components/PropsToContructor';
import HandlingListWithProps from './Components/HandlingListWithProps';
import HandlingListWithState from './Components/HandlingListWithState';
import StyleComponent from './Components/StyleComponent';
import MyForm from './Components/MyForm';
import Routing from './Components/Routing';
import HooksComponent from './Components/HooksComponent';
import HooksObjectComponent from './Components/HooksObjectComponent';
import HooksArrayComponent from './Components/HooksArrayComponent';
import HooksContextComponent from './Components/HooksContextComponent';
import LifeCycle from './Components/LifeCycle';
import ContextComponent from './Components/ContextComponent-1';
import HOCTest from './Components/HOC-Test';
import ConditionalRenderingComponent from './Components/ConditionalRenderingComponent';
import ErrorBoundary from './Components/ErrorBoundary';
import ListAndKeys from './Components/ListAndKeys';
import HooksUseReducerComponent from './Components/HooksUseReducerComponent';
import ReduxComponent from './Components/ReduxComponent';


const var1 = <span>Hey buddy</span>;
const var2 = React.createElement('h2', { className: 'var2' }, 'Hey React');

const listMade = [{ name: "Keerat" }, { name: "Seerat" }, { name: "Qeerat" }];



function App() {


const group1 = false;
const group2 = false;
const group3 = false;
const group4 = true;

  if (group1) {
    return (
      <div className="App">

        {/* Components */}
        <ClassComponent />
        <FunctionalComponent />
        <FunctionalConstComponent />

        {/* JSX */}
        {var2}
        <h1>Hello Keerat, {var1}</h1>

        {/* Props */}
        <PropsWithFunctionalComponent name="Keerat"><p>Learning React</p></PropsWithFunctionalComponent>
        <PropsWithClassComponent name="Keerat" />
        <HandlingListWithProps data={listMade} />

        {/* State */}
        <StateComponent />
        <EventHandling />
        <HandlingListWithState data={listMade} />
        <PropsToContructor msg='HYHYH' />

        {/* List and Keys */}
        <ListAndKeys></ListAndKeys>



      </div>
    );
  }
  else if (group2) {
    return (
      <div className="App">

        {/* Life Cycle Methods */}
        <LifeCycle />

        {/* Hooks */}
        <HooksComponent></HooksComponent>
        <HooksObjectComponent></HooksObjectComponent>
        <HooksArrayComponent></HooksArrayComponent>
        <HooksContextComponent></HooksContextComponent>
        <HooksUseReducerComponent></HooksUseReducerComponent>

        {/* Form Handling */}
        <MyForm />

        {/* Context */}
        <ContextComponent></ContextComponent>
        
        {/* Higher Order Components */}
        <HOCTest></HOCTest>

        {/* Conditional Rendering */}
        <ConditionalRenderingComponent></ConditionalRenderingComponent>

        {/* Error Boundaries */}
        <ErrorBoundary></ErrorBoundary>
        
      </div>
    );
  }
  else if (group3) {
    return (
      <div className="App">
        <StyleComponent isvalue='false' />
        <Routing></Routing>
      </div>

    );
  }
  else if (group4) {
    return (
      <div className="App">
        <ReduxComponent></ReduxComponent>
      </div>

    );
  }
}

export default App;
