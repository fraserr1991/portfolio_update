import React from 'react'
import styled from 'styled-components'
import './AboutMe.css'
import {Fade} from 'react-reveal'
import {FaLinkedin, FaMailBulk} from "react-icons/fa"

const Title = styled.h2`
    font-size: 2em;
    text-align: center;
`

const Contact = () => {
    return(
    <div className="Contact" id="Contact">
        <Title>Contact me</Title>
        <FaMailBulk className="contact-logo" size={60}/>
        <a href="mailto: fraser.russell1991@gmail.com" target="_blank">
        <span className="contact-text">Email</span>
        </a>
        <FaLinkedin className="contact-logo" size={60}/>
        <a href="https://www.linkedin.com/in/fraser-russell-3bb5a88b/" target="_blank">
        <label>Linkedin</label>
        </a>
    </div>
    )
}

export default Contact