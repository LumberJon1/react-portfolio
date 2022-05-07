import React from "react";
import profilePhoto from "../../assets/images/profile-img-1.jpg"

// Component
function About() {

    // Return render
    return(
        <div>
            <h1>About Me</h1>
            <img src={profilePhoto} alt="Jonathan sitting on a cliff with laptop in hand" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptatibus quaerat ipsam quo nihil reiciendis fuga omnis! Totam enim,
                eos ab accusantium laborum expedita corporis excepturi voluptas.
                Quas incidunt porro officiis.
            </p>
        </div>
    )
}

export default About;