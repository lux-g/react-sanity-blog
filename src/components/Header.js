import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaCodepen, FaTwitter, FaInstagram, FaDev, FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ themeToggler, theme }) => {

    return (
        <div className="header">
            <div className="logo">
                <Link to="/">
                    <h2>Marc's Blog</h2>
                </Link>
                <p>Front End Web Developer</p>
            </div>
            <div className="toggle">
            {theme === 'light' ? (
                <FaMoon onClick={themeToggler} className="moon-icon"/> 
            ) : (
                <FaSun onClick={themeToggler} className="sun-icon"/> 
            )}
            </div>
            <div className="socials">
                <a href="https://github.com/lux-g" target="_blank" rel="noreferrer"><FaGithub className="icons"/></a>
                <a href="https://codepen.io/Nnx0" target="_blank" rel="noreferrer"><FaCodepen className="icons"/></a>
                <a href="https://twitter.com/DevCoder2" target="_blank" rel="noreferrer"><FaTwitter className="icons"/></a>
                <a href="https://www.instagram.com/devcoder2/" target="_blank" rel="noreferrer"><FaInstagram className="icons"/></a>
                <a href="https://dev.to/devcoder" target="_blank" rel="noreferrer"><FaDev className="icons"/></a>
            </div>
        </div>
    )
}

export default Header
