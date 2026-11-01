import React from 'react';

const AboutPage = () => (
    <div className="page-shell">
        <h1 className="hobbies">About me</h1>

        <div className="about-grid">
            <div className="info-panel">
                <p>
                    I’m a software developer with a growing focus on AI-driven product design, automation, and modern web experiences.
                    I enjoy combining technical depth with practical problem-solving to build systems that are useful in the real world.
                </p>
                <ul className="check-list">
                    <li>Product-minded developer</li>
                    <li>Interest in AI and automation workflows</li>
                    <li>Focused on clean, maintainable execution</li>
                </ul>
            </div>

            <div className="info-panel">
                <p>
                    Outside of work, I value creativity, learning, and balanced living. I enjoy exploring new ideas, building things with purpose,
                    and staying curious about both technology and the world around me.
                </p>
            </div>
        </div>
    </div>
);

export default AboutPage;
