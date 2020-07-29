import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/*eslint-disable no-unused-vars */
import { Greet } from './Components/Greet';
import Message from './Components/Message';
import Welcome from './Components/Welcome'
import * as serviceWorker from './serviceWorker';
import UserGreeting from './Components/UserGreeting';
import List from './Components/List';
import GetList from './Components/GetList';
import PostList from './Components/PostList';
import ClickedComponent from './Components/ClickedComponent';
import HoveredComponent from './Components/HoveredComponent';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Greet name = "Rohit" age = "23" designation = "Software engineer">
      <h2>How're you doing?</h2>
      <h3>Thank you</h3>
    </Greet>
    <Greet name = "Karan"/>
    <Greet name = "Keshav"/>
    <Welcome name = "Rohit"/>
    <Welcome name = "Karan"/>
    <Welcome name = "Keshav"/>
    <Message name = "Ratan"/>
    <UserGreeting/> */}
    {/* <List/>
    <GetList />
    <PostList />
    <ClickedComponent />
    <HoveredComponent /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
