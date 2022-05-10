import React from "react";
import profilePhoto from "../../assets/images/profile-img-1.jpg"

// Component
function About() {

    // Return render
    return(
        <div className="flex flex-col justify-center items-center px-3">
            <h1
                className="text-xl "
            >About Me</h1>
            <img src={profilePhoto} alt="Jonathan sitting on a cliff with laptop in hand" 
                className="shadow-lg rounded-lg border"/>
            <p
                className="text-center my-4 border rounded border-slate-300 shadow-lg p-3"
            >My name is Jonathan and I'm a Full-Stack Web Developer with a particular interest in
            front-end development and a commitment to lifelong learning. I have a background in the
            world of personal finance, but alongside my studies in finance and economics I developed
            (no pun intended) an early interest in programming when I discovered Java and Python in
            college. Since then I have continued to learn both on my own and through a Web Development
            bootcamp course at the University of Arizona. I continue to pursue projects in my free time,
            and create programs I think can solve problems for me or are interesting and challenging.
            Take a look at my portfolio to see some of my recent work - I keep it updated frequently.
            If you like what you see, reach out and let me know!  Even if you don't, I'm always eager
            to hear feedback and improve the way I do things.
            </p>
        </div>
    )
}

export default About;