
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Eventos';
import Form from './components/Form';



function App() {

  
  const nome='João'
  

  return (
    <div className='App'>
    
    <HelloWorld/>
    <SayMyName nome='maria'/>
    <SayMyName nome={nome}/>
    <Frase/>
    <Pessoa
    nome='Felipe'
    idade='28'
    profissao='Engenheiro'
    foto='https://via.placeholder.com/150'
    />
    <List/>
    <Evento numero='1'/>
    <Evento numero='2'/>
    <Form/>
    </div>
    
  );
}

export default App;
