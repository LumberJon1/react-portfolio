import React from "react";

// Pass the props in and destructure for the component
function Navbar({currentPage, handlePageChange}) {

    // return render
    return(
        <nav>
            <ul className = "navbar">
                <li className="nav-item">
                    <a
                        className={`navlink ${currentPage === 'About' ? 'nav-link active' : 'nav-link'}`}
                        href="#About"
                        onClick={() => handlePageChange("About")}>
                        About Me
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={`navlink ${currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}`}
                        href="#Portfolio"
                        onClick={() => handlePageChange("Portfolio")}>
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={`navlink ${currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}`}
                        href="#Contact"
                        onClick={() => handlePageChange("Contact")}>
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={`navlink ${currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}`}
                        href="#Resume"
                        onClick={() => handlePageChange("Resume")}>
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;