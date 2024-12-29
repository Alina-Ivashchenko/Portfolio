import { useEffect, useRef } from "react";
import "./contact.css";
import Email from "../../assets/gmail.png";
import LinkedIn from "../../assets/LinkedIn.png";
import Handshake from "../../assets/Handshake.jpg";

const Contact = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionRef.current.classList.add("visible");
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
        <div id="contact" className="contact" ref={sectionRef}>
            <div className="contactDiv">
                <p className="cTitle">CONTACT ME</p>
            </div>
            <div className="contactDiv">
                <div className="contactLinksBox">
                    <p className="contactLinks">
                        <img className="contactLogos" src={Email} alt="email" />
                        <a className="email" href="mailto:ivash006@crk.umn.edu">ivash006@crk.umn.edu</a>
                    </p>
                    <p className="contactLinks">
                        <img className="contactLogos" src={LinkedIn} alt="linkedin" />
                        <a className="email" href="https://www.linkedin.com/in/alina-ivashchenko-aa00152b9/">LinkedIn</a>
                    </p>
                    <p className="contactLinks">
                        <img className="contactLogos" src={Handshake} alt="handshake" />
                        <a className="email" href="https://umn.joinhandshake.com/profiles/51411712">Handshake</a>
                    </p>
                </div>
            </div>
            
            <footer className="footer">
                <p className="footerName">©Alina Ivashchenko</p>
            </footer>
        </div>
    );
};

export default Contact;
