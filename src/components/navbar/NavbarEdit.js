import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useThemeContext } from './../../hooks/useThemeContext';

export default function NavbarEdit() {

    const { theme } = useThemeContext()

    return (
        <header className={`${theme}header`}>
            <div className="container">
                <h1> Edit the Blog</h1>
                <nav>
                    <Link to="/">
                        <h4>Home</h4>
                    </Link>
                </nav>

            </div>
        </header>
    );
}
