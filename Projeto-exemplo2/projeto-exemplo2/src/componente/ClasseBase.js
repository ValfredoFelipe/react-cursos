import React from 'react';


class ClasseBase extends React.Component{
    constructor(props){
    //Para permitir o uso de props
    super(props)
    
    //state
    this.state={
        canal: 'CFBcurso',
        curso:'React',
        ativo:true,
        nome:this.props.nomeAluno
    }
    this.status=this.props.status

    //Bindagem
    let ad = this.ativarDesativar.bind(this)

    //Instruções do construtor

    }
    // função para manipular state
ativarDesativar(){
    this.state(
        state=>({
            ativo:!state.ativo
        })
    )
}

componentDidMount(){
    console.log('O componente foi criado')
}

componentDidUpdate(){
    console.log('O componente foi atualizado')
}

componentWillUnmount(){
    console.log('O componente foi removido')
}

render(){
    return(
        <div>
            <h1>Componente de classe</h1>
            {/* Chamada da função com bind */}
            <button onClick={this.ad}>Ativar Desativar</button>
            <button onClick={()=>this.ativarDesativar}>Ativar Desativar</button>
        </div>
    )
}

}


export default ClasseBase

