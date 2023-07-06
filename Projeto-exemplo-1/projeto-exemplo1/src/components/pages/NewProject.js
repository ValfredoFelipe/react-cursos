import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'
import {useNavigate} from 'react-router-dom'

function NewProject(){

    const history =useNavigate()

    function createPost(project){
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects',{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify(project),

        }).then((resp)=>resp.jason())
          .then((data)=>{console.log(data)})
          .catch((err)=>console.log(err))
    }

    return(
        <div className={styles.newproject_container}>
        <h1 >Novo Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        
        <ProjectForm handleSubmit={createPost} btntext='Criar Projeto'/>
        </div>

    )

}
export default NewProject