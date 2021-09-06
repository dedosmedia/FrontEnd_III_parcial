import React from "react";
import historias from './data.json';
import Historial from "./Historial"
import Button from './Button'

class Aventura extends React.Component {

    constructor( props ){
        super( props );

        this.state = {
            historias,              // json con nuestras historias
            numeroHistoria: 1,      // Indica el número de la historia que estamos mostrando actualmente, por defecto empezamos con la 1.
            ultimaEleccion: "",     // Letra del último botón que eligió el usuario
            historiaActual: { },    // Contiene la historia actual que vamos a visualizar
            historial: [ ],         // Arreglo donde voy almacenando las opciones elegidas
            maxHistorias:  5,       // Indica cual es el número de la última historia en nuestro json
        }
    }

    // Retorna una sola historia (objeto literal) cuyo 'id' es igual al proporcionado como parámetro
    obtenerHistoriaPorId = ( id ) => {
        return this.state.historias.find( historia => historia.id === id )
    }

    // Actualizo el estado con la historiaActual basado en el estado actual de numeroHistoria y ultimaEleccion
    actualizarHistoriaActual(){
        this.setState( { historiaActual: this.obtenerHistoriaPorId( this.state.numeroHistoria + this.state.ultimaEleccion )})
    }

    // Al cargar por primera vez el componente necesito seleccionar la primer historia
    // así que se pueda renderizar dicha historia en el DOM
    componentWillMount(){
        this.actualizarHistoriaActual();
    }

   
    handleClick = (e) => {
        e.preventDefault();

        if( this.state.numeroHistoria >= this.state.maxHistorias)
        {
            alert( "FIN" );
            return;
        }

        this.setState( state => { 

            // Extraigo el historial y el numeroHistoria del estado actual
            let { historial, numeroHistoria } = state;

            // Hemos pulsado un botón, debemos incrementar para pasar a la próxima historia
            numeroHistoria++; 

            // Aquí tenemos la letra de la historia elegida. Corresponde al textContent del botón
            const letraElegida = e.target.textContent;

            // Actualizamos nuestro estado con los nuevos valores para numeroHistoria, ultimaEleccion, historial e historiaActual
            return {
                numeroHistoria,
                ultimaEleccion: letraElegida, 
                historial : [ ...historial, letraElegida ],
                historiaActual: this.obtenerHistoriaPorId( numeroHistoria + letraElegida.toLowerCase() )
            }
         })
    }


    render(){
        
        // desestructuramos la historiaActual para extraer lo que necesitamos renderizar.  historia y opciones
        const { historia,  opciones } = this.state.historiaActual;
        
        return (
            <>
                <h1 className="historia">{ historia }</h1>
                <div className="opciones">
                    <Button key = { "a" } handleClick = { this.handleClick } letra = { "a" } texto = { opciones.a }/>
                    <Button key = { "b" } handleClick = { this.handleClick } letra = { "b" } texto = { opciones.b }/>
                </div>                                
                <Historial ultima = { this.state.ultimaEleccion } historial = { this.state.historial } />
            </>
        )
    }
}


export default Aventura;
