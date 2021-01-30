import React from 'react'
import './Skills.css'
import Alert from 'react-bootstrap/Alert';

function Skills() {
    return (
        <div className="skills-container">
            <Alert variant="info">
                <div className="data">
                <ul>
                    <li>
                    Strong knowledge of Object-Oriented and procedural concepts, CI/CD concepts, and understanding of various hardware.
                    </li>
                    <li>
                    Worked in an Agile environment and familiar with SDLC, Docker, Travis, Github Actions, Bootstrap, SOAP, REST web services, JSON, XML, AJAX.
                    </li>
                    <li>
                        <b>Programming Languages, Frameworks And Technologies:</b>Competent to work with various range of languages such as JavaScript, Node.js, React, Angular, Express, Python, Django, Flask, Java (J2SE, J2EE), good at Android app development using Java, C, C++, C#, PHP, CSS, SASS, HTML, bash scripting.
                    </li>
                    <li>
                        <b>Test Automation:</b>Working experience with test management systems, API Integration Testing, and tools like Jira, Postman, Selenium, webdriverio, Git, and testing frameworks Mocha, unittest in Python and Junit.
                    </li>
                    <li>
                        <b>Database Management Systems:</b>PostgreSQL, MySQL, Microsoft SQL Server, MongoDB, Neo4j. • Networking: Knowledge of basic protocols, network structure, and routing protocols such as TCP/IP, UDP, DHCP, MPLS, etc. Familiar with Wireshark and Cisco Packet Tracer.
                    </li>
                    <li>
                        <b>Operating Systems and IDE’s:</b>Accustomed to working with Linux, Windows, Mac, virtual platform VMware and Vagrant, Microsoft Office, Visual studio code, Eclipse, NetBeans, Eclipse.
                    </li>
                </ul>
                </div>
            </Alert>
        </div>
    )
}

export default Skills
