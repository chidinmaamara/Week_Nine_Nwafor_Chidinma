import React from 'react';
function Projects(){
    let projects = [
        {projectName: 'Project2', technology: 'Technology2', description: 'Description2', demoLink: 'https://www.demolink.com/2', githubLink: 'github.com/name/project2'},
        {projectName: 'Project1', technology: 'Technology1', description: 'Description1', demoLink: 'https://www.demolink.com/1', githubLink: 'github.com/name/project1'},
        {projectName: 'Project3', technology: 'Technology3', description: 'Description3', demoLink: 'https://www.demolink.com/3', githubLink: 'github.com/name/project3'},
        {projectName: 'Project4', technology: 'Technology4', description: 'Description4', demoLink: 'https://www.demolink.com/4', githubLink: 'github.com/name/project4'},
        {projectName: 'Project5', technology: 'Technology5', description: 'Description5', demoLink: 'https://www.demolink.com/5', githubLink: 'github.com/name/project5'},
        {projectName: 'Project6', technology: 'Technology6', description: 'Description6', demoLink: 'https://www.demolink.com/6', githubLink: 'github.com/name/project6'}
    ]
    return(
        <>
            <div className="container">
                {
                    projects.map((project, index)=> (
                        <section key = {index}>
                            <div className="card">
                                <h1>{project.projectName}</h1>
                                <p>{project.technology}</p>
                                <p>{project.description}</p>
                                <a href = {project.demoLink}>project link</a>
                                <a href = {project.githubLink}>github link</a>
                            </div>
                        </section>
                    ))
                }
            </div>
        </>
    )
}
export default Projects;





