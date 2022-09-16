import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./pages/homeAdm"
import Clients from "./pages/home"
import Login from "./pages/login"
import { history } from "./history"



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/admin/home" component={ Home } />
        <Route exact path="/home" component={ Clients } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/" render={ () => history.push('/login') } />
      </Switch>
    </div>
  );
}

export default App;
