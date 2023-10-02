import React from "react";
import '../stylesheets/hero.scss';
import {FaArrowDown} from 'react-icons/fa';
import {RailsIcon,
        RubyIcon,
        PythonIcon,
        DockerIcon,
        JavascriptIcon
        } from '../icons/Icons';

export default function Hero() {
    return (
        <section id="hero">
            <div className="title">
                <p>Hi!, I'm</p>
                <p id="name">Javier Sampablo</p>
                <p>A Software Engineer</p>
            </div>
            <div className="landing_message">
                <p>I'm a passionate FullStack Web Developer
                    with background in:
                </p>
            </div>
            <section className="icons_section">
                <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noopener noreferrer">
                    <img src={RubyIcon} alt="Ruby" />
                </a>
                <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer">
                    <img src={RailsIcon} alt="Rails" />
                </a>
                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                    <img src={PythonIcon} alt="Python" />
                </a>
                <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
                    <img src={DockerIcon} alt="Docker" />
                </a>
                <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                    <img src={JavascriptIcon} alt="Javascript" />
                </a>
            </section>
            <div><FaArrowDown id="arrow_down"/></div>
        </section>
    )
}

