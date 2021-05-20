import React, {useState} from "react";

import Main from "./Components/Main"
import Profile from "./Components/Profile"
import {Switch, Route} from "react-router-dom";

// core components

function App() {

    return (
        <main>
            <Switch>
                <Route path="/" component={Main} exact />
                <Route path="/profile" component={Profile} />
            </Switch>
        </main>
    );
}

export default App;
