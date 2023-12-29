import React, { Component } from "react";
import './Calculator.css';

import Button from "../components/Button";
import Display from "../components/Display";

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState };

    constructor(props) {
        super(props);

        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory() {
        this.setState({ ...initialState });
    }

    setOperation(operation) {
        if (this.state.current === 0) this.setState({ operation, current: 1, clearDisplay: true });
        else {
            const equals = operation === '=';
            const values = [...this.state.values];
            let result;

            try {
                result = this.calculateResult(values[0], values[1], (this.state.operation));
            } catch(event) {
                result = values[0];
            }

            this.setState({
                displayValue: result,
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values: [result, 0]
            });
        }
    }

    calculateResult(value1, value2, operation) {
        switch (operation) {
            case '+':
                return value1 + value2;
            case '-':
                return value1 - value2;
            case '*':
                return value1 * value2;
            case '/':
                return value1 / value2;
            default:
                return value1;
        }
    }

    addDigit(valueDigit) {
        if (valueDigit === '.' && this.state.displayValue.includes('.')) return;

        const clearDisplay = (this.state.displayValue === '0') || (this.state.clearDisplay);
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + valueDigit;

        this.setState({ displayValue, clearDisplay: false });

        if (valueDigit !== '.') {
            const values = [...this.state.values];
            values[this.state.current] = parseFloat(displayValue);

            this.setState({ values });
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label={"AC"} click={this.clearMemory} triple />
                <Button label={"/"} click={this.setOperation} operation />
                <Button label={"7"} click={this.addDigit} />
                <Button label={"8"} click={this.addDigit} />
                <Button label={"9"} click={this.addDigit} />
                <Button label={"*"} click={this.setOperation} operation />
                <Button label={"4"} click={this.addDigit} />
                <Button label={"5"} click={this.addDigit} />
                <Button label={"6"} click={this.addDigit} />
                <Button label={"-"} click={this.setOperation} operation />
                <Button label={"1"} click={this.addDigit} />
                <Button label={"2"} click={this.addDigit} />
                <Button label={"3"} click={this.addDigit} />
                <Button label={"+"} click={this.setOperation} operation />
                <Button label={"0"} click={this.addDigit} double />
                <Button label={"."} click={this.addDigit} />
                <Button label={"="} click={this.setOperation} operation />
            </div>
        )
    }
}