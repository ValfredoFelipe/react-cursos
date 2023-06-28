import Button from './componente/button'

function Evento({numero}){

    function meuEvento (){
        console.log(`ops fui ativado ${numero}`)
    }

    function segundoEvento (){
        console.log(`ops fui ativado ${numero}`)
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
            <Button event={meuEvento} text={'Primeiro evento'}/>
            <Button event={segundoEvento} text={'Segundo evento'}/>
        </div>
    )
}

export default Evento