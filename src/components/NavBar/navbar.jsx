import "./navbar.css";

const NavBar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="navbar">
            <button className="btn" onClick={() => scrollToSection("about")}>ABOUT</button>
            <button className="btn" onClick={() => scrollToSection("skills")}>SKILLS</button>
            <button className="btn" onClick={() => scrollToSection("projects")}>PROJECTS</button>
            <button className="btn" onClick={() => scrollToSection("contact")}>CONTACT</button>
        </div>
    );
}

export default NavBar;
