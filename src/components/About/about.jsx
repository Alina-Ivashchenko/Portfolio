import { useEffect, useRef } from "react";
import "./about.css";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github-white.png";
import instagramIcon from "../../assets/instagram-white.png";
import myImage from "../../assets/AI.png";

const Logos = () => (
    <div>
        <a href="https://www.linkedin.com/in/alina-ivashchenko-aa00152b9/">
            <img className="logosForAbout" src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/Alina-Ivashchenko">
            <img className="logosForAbout" src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/alinaivashchenko24">
            <img className="logosForAbout" src={instagramIcon} alt="Instagram" />
        </a>
    </div>
);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionRef.current?.classList.add("visible");
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = sectionRef.current;
        observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div id="about" className="about">
            <div ref={sectionRef} className="about_section">
                <div className="about_content">
                    <div className="info">
                        <p className="title">ABOUT ME</p>
                        <div className="typewriter-container">
                            <h1 className="typewriter">Hi, I am Alina!</h1>
                        </div>
                        <p className="about-info">
                            Software Engineering Student @University of Minnesota Crookston
                        </p>
                        <p className="major">Major: Software Engineering</p>
                        <p className="major">Minors: IT Management & Cybersecurity</p>
                        <Logos />
                    </div>
                    <div className="image-container">
                        <img src={myImage} alt="Alina Ivashchenko" className="about-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
