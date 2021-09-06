import { Component } from "react";

class Historial extends Component {
        
    render(){

        // Desestructuro las propiedades para solo recibir lo que necesito
        const {ultima, historial } = this.props;

        return(
            <div className="recordatorio">
                <h3>Selección anterior: { ultima } </h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>
                    {
                        historial.map( (item, index) => {
                            return <li key={index.toString()}>{ item }</li>
                        })
                    }
                </ul>
            </div>
        )
    }


}

export default Historial;