import { React, useState } from "react";
import HeaderItem from "./Headeritem";
import '../../stylesheets/navbar.scss'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div id='menuToggle' className='navbar'>
                <input type="checkbox" id="menu_checkbox" onClick={() => setIsOpen(true)}/>
                <span></span>
                <span></span>
                <span></span>
            <section id='navbar_items'>
                <HeaderItem
                    goTo="hero"
                    text="Home"
                    isOpen={isOpen}
                />

                <HeaderItem
                    goTo="profile"
                    text="About Me"
                    isOpen={isOpen}
                />

                <HeaderItem
                    goTo="projects"
                    text="My Work"
                    isOpen={isOpen}
                />

                <HeaderItem
                    goTo="contact"
                    text="Contact"
                    isOpen={isOpen}
                />
                
            </section>
        </div>
    );
};

export default Navbar;
