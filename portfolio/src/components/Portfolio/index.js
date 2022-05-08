import React, {useState} from "react";

function Portfolio() {

    // Define projects array for use in mapping to the component
    const projects = [
        {
            title: "My Pantry",
            fileNum: 2,
            imgAlt: "A picture of this project",
            description: "My Pantry allows you to create a virtual food pantry to see what you've got on the shelves at home, remove items so you'll never have to guess what you're out of, and shop confidently with the knowledge you can check back without standing in front of the cupboard.",
            gitHubLink: "https://github.com/MagnificentRoast/My-Pantry",
            deploymentLink: "https://whispering-tundra-55246.herokuapp.com/"
        },
        {
            title: "Pokemon Randomizer",
            fileNum: 3,
            imgAlt: "A picture of this project",
            description: "Pokemon Randomizer allows you to access the vast Pokemon API to display images of pokemon with a twist: their typing will be randomized.  Become inspired by reimagining pokemon with a completely different type.",
            gitHubLink: "https://github.com/LumberJon1/Pokemon-Generator",
            deploymentLink: "https://lumberjon1.github.io/Pokemon-Generator/"
        },
        {
            title: "Workday Scheduler",
            fileNum: 4,
            imgAlt: "A picture of this project",
            description: "Work Day Scheduler is an app that allows you to add tasks to each block of the work day, and will highlight each block of time based on the current hour.",
            gitHubLink: "https://github.com/LumberJon1/Workday-Scheduler",
            deploymentLink: "https://lumberjon1.github.io/Workday-Scheduler/"
        },
        {
            title: "City Weather Dashboard",
            fileNum: 1,
            imgAlt: "A picture of this project",
            description: "The City Weather Dashboard app lets you type in a city and see its current and five-day forecast, as well as select from a list of previously-searched cities.",
            gitHubLink: "https://github.com/LumberJon1/City-Weather-App",
            deploymentLink: "https://lumberjon1.github.io/City-Weather-App/"
        },
        {
            title: "Check Yourself",
            fileNum: 0,
            imgAlt: "A picture of this project",
            description: "Check Yourself is a site that allows users to keep a virtual journal describing and rating their mood, and based on their scores will suggest local events or activities to do.",
            gitHubLink: "https://github.com/Jashcraft/check-yourself",
            deploymentLink: "https://jashcraft.github.io/check-yourself/"
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
                        src={require(`../../assets/images/${project.fileNum}.jpg`)}
                        alt={project.imgAlt}
                        className=""
                        />
                    <p>{project.description}</p>
                    <div>
                        <a href={project.gitHubLink}>View Project Repo</a>
                        <a href={project.deploymentLink}>View Project Deployment</a>
                    </div>
                </div>
                        // key={project.title}
            ))}
        </section>
    )
}

export default Portfolio;