import React from 'react'
import './ProfileInfo.css'
import profilePicture from '../resources/archit-anghan-image.jpeg';
import { SocialIcon } from 'react-social-icons';
import Button from "react-bootstrap/Button";
import PdfResume from '../resources/Archit_Anghan_Resume.pdf';

function ProfileInfo() {
    return (
        <div className="profileinfo-container">
            {/* profile picture, email, phone number, github logo, linkedin logo */}
            <img src={profilePicture} className="profile-picture"></img>
            <div className="name">Archit Anghan</div>
            <code className="email">architanghan32@gmail.com</code>
            <br></br><code className="email">613-222-9656</code>
            <div className="button-container">
                <Button variant="outline-primary" href={PdfResume} target="PDF Resume"> Resume In Pdf</Button>
            </div>
            
            <div>
                <SocialIcon className="social-icons" url="https://github.com/archit0001" bgColor="#000000"/>
                <SocialIcon className="social-icons" url="https://www.linkedin.com/in/archit-anghan-951900168/" />
            </div>
            
        </div>
    )
}

export default ProfileInfo
