import {  Outlet } from "react-router-dom";

function About() {
    return (
        <div>
            About Screen
            <Outlet />
            <h1>End of Outlet</h1>
        </div>
    )
}


export default About;