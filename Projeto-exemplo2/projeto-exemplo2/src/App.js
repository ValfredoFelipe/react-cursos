import React, {useState} from 'react'

function App() {
const carros=[
  {categoria:"esporte", preço:"20000", modelo:"GolGTI"},
  {categoria:"esporte", preço:"120000", modelo:"Camro"},
  {categoria:"SUV", preço:"40000", modelo:"HRV"},
  {categoria:"SUV", preço:"70000", modelo:"TORO"},
  {categoria:"Utilitário", preço:"370000", modelo:"Onix"},
  {categoria:"Utilitário", preço:"550000", modelo:"KA"},
]

const linhas=(cat)=>{
  const li=[]
  carros.forEach(
  (carro)=>{
    if(carro.categoria.toUpperCase()==cat.toUpperCase() || cat.toUpperCase()==''){
      li.push(
        <tr>
          <td>{carro.categoria}</td>
          <td>{carro.preço}</td>
          <td>{carro.modelo}</td>
        </tr>

      )
    }
  }
  )
  return li
}

const TabelaCarros=(cat)=>{
  return(
    <table border='1' style={{borderCollapse:'collapse'}}>

      <thead>
        <tr>
          <th>Categora</th><th>Preço</th><th>Modelo</th>
        </tr>
      </thead>
      <tbody>
      {linhas(cat)}
      </tbody>

    </table>
  )
 
}

const pesquisaCategoria=(cat, scat)=>{
  return(
    <div>
      <label>Digite uma categoria</label>
      <input type="text" value={cat} onChange={(e)=>scat(e.target.value)} />
    </div>
  )
}
const [categoria, setCategoria]=useState('')


  return (
    <div >
      {pesquisaCategoria(categoria, setCategoria)}
      <br />
      {TabelaCarros(categoria)}
    </div>
  );
}

export default App;
