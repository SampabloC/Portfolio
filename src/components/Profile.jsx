import React from "react";
import '../stylesheets/profile.scss'

export default function Profile() {
    // const openResume = (url) => {
    //     window.open(url, "_blank", "noreferrer")
    // }
    return (
        <section id="profile">
            <div className="title">Who am I?</div>
            <div className="about_me">
            I'm a passionate technology seeker, someone who likes to solve logical problems and is always looking to provide the best solution. <br />
            I enjoy continuously improving my skills, not only in coding but also in other areas, such as enhancing my soft skills. <br />
            I always strive to give my best and provide an optimal solution to each problem, applying all the best practices in my code. <br />
            Apart from coding, I'm a big fan of my Volkswagen and my dogs, so when I'm not coding, I'm working on my car or taking care of my dogs.<br />
            </div>
            {/* <div className="resume">
                Take a look at my resume to know more about me! 😉
                
                <input type="button" id="resume_link" onClick={openResume("https://sampabloc.github.io/SampabloC/")} />
            </div>    */}
        </section>
    )
}

