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
        <section className="mb-24">
            <h1 className="font-bold text-xl text-center">My Projects</h1>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center sm:items-between sm:min-h-full">
                {projects.map((project) => (
                    <div className="flex flex-col p-3 sm:w-5/12 sm:mx-3 lg:w-1/4 items-center">
                        <h2 className="mb-3">{project.title}</h2>
                        <img
                            src={require(`../../assets/images/${project.fileNum}.jpg`)}
                            alt={project.imgAlt}
                            className="p-2 border border-slate-400 rounded shadow-xl mb-3"
                            />
                        <p className="p-2 text-center mb-2">{project.description}</p>
                        <div className="bg-slate-400 w-full p-2 flex flex-row justify-between items-center">
                            <a className="w-1/2 border rounded-lg mx-2 text-center text-sm text-slate-100 bg-slate-600 p-1" href={project.gitHubLink}>View Project Repo</a>
                            <a className="w-1/2 border rounded-lg mx-2 text-center text-sm text-slate-100 bg-slate-600 p-1" href={project.deploymentLink}>View Project Deployment</a>
                        </div>
                    </div>
                            // key={project.title}
                ))}
            </div>
        </section>
    )
}

export default Portfolio;