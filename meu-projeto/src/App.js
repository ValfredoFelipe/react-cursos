
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name='Felipe'

  function sum(a,b){
    return a+b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className='App'>
    <p>Olá, {name}</p>
    <p>SOma: {sum(3,2)}</p>
    <img src={url} alt='minha imagem'/>
    <HelloWorld/>
    </div>
  );
}

export default App;
