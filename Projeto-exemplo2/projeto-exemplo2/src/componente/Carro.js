import React from 'react'

class Carro extends React.Component{
constructor(props){
    super(props)
    this.modelo='HRV'
    this.state={
        ligado:false,
        velAtual:0,
    }
}

ligarDesligar(){
    // this.setState({ligado:!this.state.ligado})
    this.setState(
        (state)=>(
            {ligado:!state.ligado}
            )
    )
}
acelerar(){
    this.setState(
        (state, props)=>(
            {velAtual:state.velAtual + props.fator}
    )
    )
}

render(){
    return(
        <div>
            <h1>Meu carro</h1>
            <p>MODELO:{this.modelo}</p>
            <p>Ligado: {this.state.ligado? 'Sim': 'Não'}</p>
            <p>Vel Atual: {this.state.velAtual}</p>
            <button onClick={()=>this.ligarDesligar()}>{this.state.ligado? 'Desligar Carro': 'Ligar Carro'}</button>
            <button onClick={()=>this.acelerar()}>Acelerar</button>
        </div>
    )
}

}
export default Carro