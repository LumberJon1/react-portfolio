import React, {useState} from "react";

const validateEmail = (email) => {
    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
}

function Contact() {

    // Use state hook to control updates to the form component
    const [formState, setFormState] = useState(
        // Set default initial state for the form
        {name: "", email: "", message: ""}
    );

    // Error message hook
    const [errorMessage, setErrorMessage] = useState("");

    // Event handler to handle form input changes, such as keystrokes
    function handleChange(e) {
        // Validate email input as user is typing
        console.log(formState)
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            
            if (!isValid) {
                setErrorMessage("Please enter a valid email address")
            }
            else {
                setErrorMessage("");
            }
        }
        // Validate other inputs on the basis of length (required)
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            }
            else {
                setErrorMessage("");
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value});
            console.log(formState.message)
        }
    }

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // Render return
    return(
        <section>
            <h1>Contact Me</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" defaultValue={formState.name} onBlur={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" defaultValue={formState.email} onBlur={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            defaultValue={formState.message}
                            onBlur={handleChange}
                        ></textarea>
                    </div>
                    {/* Conditionally render the error message div if an error exists in form validation */}
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;