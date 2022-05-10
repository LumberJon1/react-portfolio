import React from "react";

// Pass the props in and destructure for the component
function Navbar({currentPage, handlePageChange}) {

    // return render
    return(
        <nav className="">
            <ul className="m-0 p-0 flex flex-row justify-center items-center bg-slate-400">

                <li className="nav-item mx-1 h-16 flex flex-col justify-center align-center p-1">
                    <a
                        className={`navlink ${currentPage === 'About' ? 'navlink navActive' : 'navlink'}`}
                        href="#About"
                        onClick={() => handlePageChange("About")}>
                        About
                    </a>
                </li>
                <li className="nav-item mx-1 h-16 flex flex-col justify-center align-center p-1">
                    <a
                        className={`navlink ${currentPage === 'Portfolio' ? 'navlink navActive' : 'navlink'}`}
                        href="#Portfolio"
                        onClick={() => handlePageChange("Portfolio")}>
                        Portfolio
                    </a>
                </li>
                <li className="nav-item mx-1 h-16 flex flex-col justify-center align-center p-1">
                    <a
                        className={`navlink ${currentPage === 'Contact' ? 'navlink navActive' : 'navlink'}`}
                        href="#Contact"
                        onClick={() => handlePageChange("Contact")}>
                        Contact
                    </a>
                </li>
                <li className="nav-item mx-1 h-16 flex flex-col justify-center align-center p-1">
                    <a
                        className={`navlink ${currentPage === 'Resume' ? 'navlink navActive' : 'navlink'}`}
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