import React, {useState} from "react";


function Portfolio() {

    // Define projects array for use in mapping to the component
    const projects = [
        {
            title: "Project 1",
            imgPath: "../../assets/images/filename.jpg",
            imgAlt: "Description of this image's content",
            description: "Description of this project.  We used Javascript.",
            gitHubLink: "https://github.com/LumberJon1/",
            deploymentLink: "https://google.com"
        },
        {
            title: "Project 2",
            imgPath: "../../assets/images/filename.jpg",
            imgAlt: "Description of this image's content",
            description: "Description of this project.  We used HTML.",
            gitHubLink: "https://github.com/LumberJon1/",
            deploymentLink: "https://google.com"
        },
    ]

    // return render
    return (
        <section>
            <h1>My Projects</h1>
            {projects.map((project) => (
                <div>
                    <h2>{project.title}</h2>
                    <img
                        src={project.imgPath}
                        alt={project.imgAlt}
                        className=""
                    />
                    <p>{project.description}</p>
                    <div>
                        <a href={project.gitHubLink}>View Project Repo</a>
                        <a href={project.deploymentLink}>View Project Deployment</a>
                    </div>
                    {/* key={project.title} */}
                </div>
            ))}
        </section>
    )
}

export default Portfolio;