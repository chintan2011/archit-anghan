import React from 'react';
import './ProfileDetails.css'
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import AboutMe from './AboutMe';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';
import VolunteerExperience from './VolunteerExperience';
import Reference from './Reference'

function ProfileDetails() {
    return (
        <div className="container">
            <Tabs defaultActiveKey="about_me" transition={false} className="tabs">
                <Tab title="About Me" eventKey="about_me" className="about-me" >
                    <AboutMe/>
                </Tab>

                <Tab title="Work Experience" eventKey="work-experience">
                    <WorkExperience/>
                </Tab>

                <Tab title="Skills" eventKey="skills">
                    <Skills/>
                </Tab>

                <Tab title="Education" eventKey="education">
                    <Education/>
                </Tab>

                <Tab title="Volunteer Experience" eventKey="volunteer-experience">
                    <VolunteerExperience/>
                </Tab>

                <Tab title="Reference" eventKey="reference">
                    <Reference/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default ProfileDetails
