
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Eventos';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/outralista';
import { useState } from 'react';
import Saudacao from './components/saudacao';
import SeuNome from './components/SeuNome';


function App() {

  
  const nome1='João'

  const meusItens =['react', 'Angular', 'vue']

  const[nome, setNome] = useState()
  

  return (
    <div className='App'>
    
    <HelloWorld/>
    <SayMyName nome='maria'/>
    <SayMyName nome={nome1}/>
    <Frase/>
    <Pessoa
    nome='Felipe'
    idade='28'
    profissao='Engenheiro'
    foto='https://via.placeholder.com/150'
    />
    <List/>
    <Evento numero='1'/>
    
    <Form/>

    <h1>Renderização condicional</h1>
    <Condicional/>

    <h1>Renderização de listas</h1>
    <OutraLista itens={meusItens}/>

    <h1>State Lift</h1>

    <SeuNome setNome={setNome}/>
    <Saudacao nome={nome}/>





    </div>

    
    
  );
}

export default App;
