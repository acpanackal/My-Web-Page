import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <header className="site-header">
        <div className="site-header-inner">
            <Link to="/" className="brand">Akhila <span>Panackal</span></Link>
            <nav className="main-nav" aria-label="Main navigation">
                <Link to="/">Home</Link>
                <Link to="/articles-list">Articles</Link>
                <Link to="/about">About</Link>
                <a href="https://github.com/acpanackal" className="cta-link" target="_blank" rel="noreferrer">GitHub</a>
            </nav>
        </div>
    </header>
);

export default NavBar;
