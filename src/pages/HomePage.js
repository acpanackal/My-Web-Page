import React from 'react';

const HomePage = () => (
    <div className="page-shell hero">
        <div className="hero-grid">
            <div className="hero-copy">
                <div className="eyebrow">AI & Automation Portfolio</div>
                <h1>
                    I build <span className="gradient-text">intelligent systems</span> that move ideas into action.
                </h1>
                <p>
                    I’m Akhila Panackal, a software engineer and AI-focused developer building product-ready solutions,
                    automation workflows, and modern user experiences that solve real problems and create measurable impact.
                </p>

                <div className="cta-row">
                    <a href="#projects" className="primary-btn">View Projects</a>
                    <a href="#contact" className="secondary-btn">Let’s Connect</a>
                </div>

                <div className="stats" aria-label="Key metrics">
                    <div className="stat-card">
                        <strong>AI</strong>
                        <span>Workflow design</span>
                    </div>
                    <div className="stat-card">
                        <strong>4+</strong>
                        <span>Core systems</span>
                    </div>
                    <div className="stat-card">
                        <strong>Ops</strong>
                        <span>Built for scale</span>
                    </div>
                </div>
            </div>

            <div className="profile-panel">
                <div className="profile-visual">
                    <div className="profile-badge">
                        <span>Location</span>
                        <strong>Fulda, Germany</strong>
                    </div>
                </div>
            </div>
        </div>

        <section id="projects" className="section">
            <div className="section-head">
                <h2>Featured projects</h2>
                <p>Selected work spanning AI, automation, and product-driven software engineering.</p>
            </div>

            <div className="project-grid">
                <article className="project-card">
                    <h3>AI Meal Planner</h3>
                    <div className="tags">
                        <span className="tag">React</span>
                        <span className="tag">FastAPI</span>
                        <span className="tag">Gemini API</span>
                    </div>
                    <p>
                        An automated nutrition planning system that converts user goals, dietary preferences, and pantry data into tailored meal suggestions.
                    </p>
                    <div className="project-links">
                        <a href="#">Live Demo</a>
                        <a href="#">GitHub</a>
                    </div>
                </article>

                <article className="project-card">
                    <h3>Weekly Calendar Magazine</h3>
                    <div className="tags">
                        <span className="tag">Python</span>
                        <span className="tag">Google Calendar</span>
                        <span className="tag">GitHub Actions</span>
                    </div>
                    <p>
                        A personalized weekly digest that compiles calendar insights, priorities, and context into a concise, automated overview.
                    </p>
                    <div className="project-links">
                        <a href="#">Explore</a>
                        <a href="#">Architecture</a>
                    </div>
                </article>
            </div>
        </section>

        <section className="section">
            <div className="section-head">
                <h2>What I do</h2>
                <p>I design practical systems that bring together AI, automation, APIs, and a clean product experience.</p>
            </div>

            <div className="experience-grid">
                <article className="skill-card">
                    <h3>AI Product Integration</h3>
                    <p>Designing and integrating generative AI capabilities into workflows that are reliable, structured, and user-focused.</p>
                </article>
                <article className="skill-card">
                    <h3>Automation Pipelines</h3>
                    <p>Creating scalable automation systems that reduce manual work and streamline multi-step operations.</p>
                </article>
                <article className="skill-card">
                    <h3>API & Data Workflows</h3>
                    <p>Connecting services, exposing clean interfaces, and shaping data flows across end-to-end digital products.</p>
                </article>
                <article className="skill-card">
                    <h3>Frontend Experience</h3>
                    <p>Building polished interfaces with clear structure, usability, and strong product thinking.</p>
                </article>
            </div>
        </section>

        <section id="contact" className="section">
            <div className="contact-card">
                <div>
                    <h3>Let’s build something useful.</h3>
                    <p>Open to AI-focused product work, automation systems, and thoughtful digital experiences.</p>
                </div>
                <a href="https://github.com/acpanackal" className="primary-btn" target="_blank" rel="noreferrer">Open GitHub</a>
            </div>
        </section>
    </div>
);

export default HomePage;
