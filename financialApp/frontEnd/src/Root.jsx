import React from "react";
import Head from "./Head";
import Home from "./Home";
import Agriculture from "./Agriculture";
import Financing from "./Financing";
import Recruit from "./Recruit";
import LogSign from "./Log&Sign";
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch, Route, Link, Redirect
} from "react-router-dom"

export default class Root extends React.Component {
  state = {
    current: 'home'
  }
  render() {
    const { current } = this.state
    const style = {
      position: "absolute",
      width: "99%",
      height: "99%",
    };
    return (
      <div id="Root" style={style}>
        <Head callback={this.getTab} current={this.state.current}></Head>
        {/* <Router>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/agriculture" component={Agriculture}></Route>
            <Route path="/recruit" component={Recruit}></Route>
            <Route path="/logsign" component={LogSign}></Route>
          </Switch>
        </Router> */}
        {current === "home" ? (
          <Home />
        ) : current === "logsign" ? (
          <LogSign callback={this.getTab}></LogSign>
        ) : current === "agriculture" ? (
          <Agriculture></Agriculture>
        ) : current === "recruit" ? (
          <Recruit></Recruit>
        ) : current === "financing" ?
          <Financing></Financing>
          : null}
      </div>
    );
  }
  getTab = (d) => {
    this.setState({ current: d.current });
  };
}
