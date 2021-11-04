import React, {Component} from 'react';

class Button extends Component {
    constructor(props){
        super (props);
        this.state={
            isToggleOn : false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            isToggleOn : !state.isToggleOn
        }));
    }

    render(){
        return ( <div className= "Btn">
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "ON" : "OFF"}
            </button>
        </div>
        );
    }
}
export default Button;