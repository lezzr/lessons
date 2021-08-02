import {createElement, Component} from "react";
import './App.css';

export function App(props) {
  return (
    <div className="App">
      <header onClick={props.handleClick} className="App-header">
        hello react name is {props.user.name}
      </header>
        {props.children}
    </div>
  );
}
export function Message(props) {
    return (
        <div className="Message">
            <header className="Message-header">
                Here is message:: {props.msgs.message}
            </header>
            {props.children}
        </div>
    );
}

export const AppWithoutJSX = ()=> createElement(
    "div",
    {className: "App"},
    createElement("header", {className: "App-header"}, "hello function"));

export class AppClaas extends Component{
    render() {
        return (
            <div className="App">
                <header onClick={this.props.handleClick} className="App-header">
                    hello react name is {this.props.user.className}
                </header>
            </div>
        );
    }
}

