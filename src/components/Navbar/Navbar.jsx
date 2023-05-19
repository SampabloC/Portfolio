import { React } from "react";
import HeaderItem from "./Headeritem";
import '../../stylesheets/navbar.scss'

const Navbar = () => {
    return (
        <div id='menuToggle' className='navbar'>
                <input type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
            <section id='navbar_items'>
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
        </div>
    );
};

export default Navbar;
