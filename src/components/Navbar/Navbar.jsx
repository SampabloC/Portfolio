import { React } from "react";
import HeaderItem from "./Headeritem";
import '../../stylesheets/navbar.css'

const Navbar = () => {
    return (
        <section className="navbar">
            <HeaderItem
                goTo="hero"
                text="Home"
                
            />

            <HeaderItem
                goTo="profile"
                text="About Me"
                
            />

            <HeaderItem
                goTo="projects"
                text="My Work"
                
            />

            <HeaderItem
                goTo="contact"
                text="Contact"
                
            />
            
        </section>
    );
};

export default Navbar;
