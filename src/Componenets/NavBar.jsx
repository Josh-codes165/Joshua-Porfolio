import { useState } from 'react';
function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <h2 className="logo">Joshua O.</h2>
            
            {/* The Hamburger Button */}
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            {/* The Menu Links */}
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;