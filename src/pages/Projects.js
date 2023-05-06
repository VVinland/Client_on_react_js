import { projectsList } from '../helpers/projectList';
import Project from '../components/project/Project';




const Projects = () => {
    return (
        <>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>
                    <ul className="projects">

                        {projectsList.map((project,index)=>{
                            return(
                                  <Project key={project.id} title={project.title} img={project.img} index={index}/>  
                            )
                        })}
                      
                    </ul>
                </div>
            </main>
        </>
    );
}

export default Projects;