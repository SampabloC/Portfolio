import React from "react";
import '../stylesheets/hero.scss';
import { FaArrowDown, FaRegHandSpock } from 'react-icons/fa';

export default function Hero() {
    return (
        <section id="hero">
            <div className="landing_message">
                <p id="title">Hello, I'm Javier Sampablo <FaRegHandSpock /></p>
                <p id="message">A FullStack Developer with background in:</p>
            </div>
            <div><FaArrowDown id="arrow_down"/></div>
        </section>
    )
}

