import {useState} from 'react'


function Form(){

function cadastroUsuario(e){
    e.preventDefault()
    console.log(`Usuário ${name} foi cadastrado coma senha ${password}`)
}

const [name,setName] = useState()
const [password,setPassword] = useState()

return(
<div>
    <h1>Meu cadastro</h1>
    <form onSubmit ={cadastroUsuario}>
        <div>
            <label htmlFor="'name">Nome:</label>
            <input 
            type="text" 
            placeholder='Digite seu nome'
            name='name'
            id='name'
            onChange={(e)=>setName(e.target.value)}
             />
        </div>
        <div>
            <label htmlFor="password">Senha:</label>
            <input 
            type="password" 
            placeholder='Digite sua senha'
            name='password'
            id='password'
            onChange={(e)=>setPassword(e.target.value)}
             />
        </div>
        <div>
            
            <input 
            type="submit" value='Cadastrar' />
        </div>
    </form>
</div>

)

}
export default Form