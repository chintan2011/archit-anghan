import React from 'react'
import './WorkExperience.css'
import Alert from 'react-bootstrap/Alert';

function WorkExperience() {
    return (
        <div className="workexperience-container">
            <Alert variant="info">
                <div className="data">
                    <b>Software Tester (5620 SAM) co-op 5GK (Sep 2019-Dec 2019)</b>
                    <p>NOKIA, Ottawa, ON</p>
                    <ul>
                        <li>
                            Worked on Web-based technologies, Node.js with testing framework Mocha, web automation components Selenium, webdriverio on Red Hat Enterprise Linux.
                    </li>
                        <li>
                            Development and execution of test plans to validate functional aspects of the product.
                    </li>
                        <li>
                            Find bugs and errors in Nokia’s Web application and write code to resolve those bugs in an automation-based test environment.
                    </li>
                        <li>
                            Work on Fault Management, Network Supervision, Service Supervision, and Supervision Manager web apps in NSP (Network Services Platform) Launchpad.
                    </li>
                        <li>
                            Develop automated tests that exercise product functionally and work on documentation of test results.
                    </li>
                        <li>
                            Maintain features of the web application by doing regression testing, responsible to keep code update, and add test methods by interacting with team masters for overall system enhancement.
                    </li>
                    </ul>

                    <b>Automation Programmer (April 2019-Sep 2019)</b>
                        <p>Domoticka Inc., Ottawa, ON</p>
                    <ul>
                        
                        <li>
                            Create, set up, and configure a secure LAN network and connect all network devices with the secure IP address to the network. Install various types of network equipment.
                        </li>
                        <li>
                            Responsible for installation and Troubleshooting of Application Software, hardware, security device, and network device. Responsible to keep network infrastructure up-to-date and secured.
                        </li>
                        <li>
                            Create, modify, and maintain network security policies and monitor compliance.
                        </li>
                        <li>
                            Troubleshoot network related issues and provide solutions and collaborate with the staff member.
                        </li>
                        <li>
                            Programming of HAI and Control 4 and make a server rack ready with all devices.
                        </li>
                    </ul>
                </div>
            </Alert>
        </div>
    )
}

export default WorkExperience
