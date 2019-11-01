import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Login from "./components/Login";



function App() {
    return (
        <div className="App">
            <Header/>
            <div className="App-content">
                <Switch>
                    <Route exact path='/' render={() => <Main/>}/>
                    <Route path='/posts' render={() => <Posts/>}/>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='*' render={() => <div><h1>404 NOT FOUND</h1></div>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;


