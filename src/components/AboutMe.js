import React from 'react'
import  Alert from 'react-bootstrap/Alert';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="about-me-container">
            <Alert variant="info">
            <div className="data">
            <ul>
                <li>
                Proven working knowledge of QA testing, Full-stack development, and methodologies along with programming languages, web development strategy, and test-automation abilities to write code easily and most preferably. Quick learner and excellent Team player, ability to meet deadlines and like to deal with hard problems, Strong problem-solving skills.
                </li>
                <li>
                Demonstrates a sound decision-making ability, reliability, responsibility, professionalism, and works efficiently as an individual and as a team member to meet assigned goals. Always Looking for new technologies to learn and implement in development.
                </li>
            </ul>
            </div>
            </Alert>
        </div>
    )
}

export default AboutMe
