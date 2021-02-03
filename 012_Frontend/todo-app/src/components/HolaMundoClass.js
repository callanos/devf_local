import React, {Component} from 'react';

class HolaMundo extends Component {
    constructor(props){
        super(props);
        this.state = {
            texto: '¡Hola desde el componente!'
    
    }
}

componentDidMount(){
    console.log('Se montó el componente!');

    setTimeout(
        ()=>{
            this.setState(
                {texto:'Se actualizó...'}
            )
        },3000
    )
}

render(){
    return(
    <React.Fragment>
        <h1>Hola Mundo</h1>
        <h2>{this.state.texto}</h2>
    </React.Fragment>
    );
    }
}

export default HolaMundo;