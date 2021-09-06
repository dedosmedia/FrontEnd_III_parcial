import { Component } from "react";

class Button extends Component {
  
  render() {
    return (
        <div className="opcion">
            <button className="botones" onClick={this.props.handleClick}>{this.props.letra.toUpperCase()}</button>
            <h2>{this.props.texto}</h2>
        </div>
    );
  }
}

export default Button;
