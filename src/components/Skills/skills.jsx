import "./skills.css";
import { useEffect } from "react";
import Java from "../../assets/java.png";
import JavaScript from "../../assets/javascript.png";
import Python from "../../assets/python.png";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import ReactLogo from "../../assets/react.png";
import NodeJS from "../../assets/Node.js.png";
import Flask from "../../assets/Flask.png";
import Express from "../../assets/Express.png";
import MySQL from "../../assets/MySQL.png";


const ProgrammingLangs = () => {
    return ( 
        <div className="logosBlock">
            <img className= "logosForSkills" src={Java} alt="Java" />
            <img className= "logosForSkills" src={Python} alt="Python" />
            <img className= "logosForSkills" src={JavaScript} alt="JavaScript" />
            <img className= "logosForSkills" src={HTML} alt="HTML" />
            <img className= "logosForSkills" src={CSS} alt="CSS" />
        </div>
    )
}

const Frameworks = () => {
    return (
        <div className="logosBlock">
            <img className= "logosForSkills" src={ReactLogo} alt="React" />
            <img className= "logosForSkills" src={NodeJS} alt="NodeJS" />
            <img className= "logosForSkills" src={Flask} alt="Flask" />
            <img className= "logosForSkills" src={Express} alt="Express" />
        </div>
    )
}

const DataManagement = () => {
    return (
        <div className="logosBlock">
            <img className= "logosForSkills" src={MySQL} alt="MySQL" />
        </div>
    )
}

const Skills = () => {
    useEffect(() => {
        const sections = document.querySelectorAll(".fade-section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.2 } 
        );

        sections.forEach((section) => observer.observe(section));

        // Cleanup the observer when the component unmounts
        return () => observer.disconnect();
    }, []);

    return (
        <div id="skills">
            <div className="skillsTitle">
                <p className="titleSkills">SKILLS</p>
            </div>
            
            <div className="skills">
                <div className="info_block">
                    <div className="info_section">
                        <div className="fade-section">
                            <p className="skillnames">Programming Languages:</p>
                            <ProgrammingLangs />
                        </div>
                        <div className="fade-section">
                            <p className="skillnames">Frameworks and Libraries:</p>
                            <Frameworks />
                        </div>
                        <div className="fade-section">
                            <p className="skillnames">Data Management:</p>
                            <DataManagement />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;