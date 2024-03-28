import React, { Component } from "react";
import CounterValue from "./CounterValue";
import logRender from "../decorators/logRender";

interface CounterProps {
    startedValue?: number 
}

interface CounterState {
    value: number
}

@logRender
export default class CounterMain extends Component<CounterProps, CounterState> {
    public state = { value: this.props.startedValue || 0 }

    private setValue = (delta: number) => {
        this.setState({
            value: this.state.value + delta
        })
    }
    
    render() {
        return (
            <div>
                <CounterValue counter={this.state.value} />
                <button onClick={() => this.setValue(1)}>+</button>
                <button onClick={() => this.setValue(-1)}>-</button>
            </div>
        )
    }
}