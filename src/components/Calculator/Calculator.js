import React, { Component } from 'react'
import Button from '../Button/Button';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import './Calculator.css'

class Calculator extends Component {
    constructor() {
        super();
        this.state = { data: ''}
    }

    calculate = () => {
        try {
            const result = eval(this.state.data);
            this.setState({data: result});
        } catch (e) {
            this.setState({data: 'error'})
        }
    }

    clickHandler = e => {
        const value = e.target.getAttribute('data-value');
        switch(value) {
            case 'clear':
                this.setState({ data: ''});
                break;
            case 'equal':
                this.calculate();
                break;
            default:
                this.setState({ data: this.state.data + value});
        }
    }
    render(){
        return(
            <div className="Calculator">
                <Display data={this.state.data}/>
                <Keypad>
                    <Button onClick={this.clickHandler} label="C" value="clear" />
                    <Button onClick={this.clickHandler} label="7" value="7" />
                    <Button onClick={this.clickHandler} label="4" value="4" />
                    <Button onClick={this.clickHandler} label="1" value="1" />
                    <Button onClick={this.clickHandler} label="0" value="0" />

                    <Button onClick={this.clickHandler} label="/" value="/" />
                    <Button onClick={this.clickHandler} label="8" value="8" />
                    <Button onClick={this.clickHandler} label="5" value="5" />
                    <Button onClick={this.clickHandler} label="2" value="2" />
                    <Button onClick={this.clickHandler} label="." value="." />

                    <Button onClick={this.clickHandler} label="x" value="*" />
                    <Button onClick={this.clickHandler} label="9" value="9" />
                    <Button onClick={this.clickHandler} label="6" value="6" />
                    <Button onClick={this.clickHandler} label="3" value="3" />
                    <Button onClick={this.clickHandler} label="" value="null" />

                    <Button onClick={this.clickHandler} label="-" value="-" />
                    <Button onClick={this.clickHandler} label="+" size="2" value="+" />
                    <Button onClick={this.clickHandler} label="=" size="2" value="equal" />
                </Keypad>
            </div>
        );
    }
}

export default Calculator;