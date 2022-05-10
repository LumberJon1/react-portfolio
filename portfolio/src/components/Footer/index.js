import React from "react";

function Footer() {
    
    return (
        <div
            className="flex flex-col justify-center items-start bg-slate-400 absolute inset-x-0 bottom-0 p-2"
            >
            <div>
                <a className="text-cyan-300" href="https://github.com/LumberJon1">GitHub</a>
                // GitHub icon
            </div>
            <div>
                <a className="text-cyan-300" href="https://www.linkedin.com/in/jonathan-williams-729a18b0/">LinkedIn</a>
                // LinkedIn icon
            </div>
            <div>
                <a className="text-cyan-300" href="https://www.hackerrank.com/JWilliams12117?hr_r=1">Hackerrank</a>
                // Hackerrank icon
            </div>
        </div>
    )
}

export default Footer;