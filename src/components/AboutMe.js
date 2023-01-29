import React from 'react'
import styled from 'styled-components'
import './AboutMe.css'
import {Fade} from 'react-reveal'

const AboutMeBox = styled.section`
    width: 40%;
    height: 50em;
`
const Title = styled.h1`
    font-size: 5em;
`

const Paragraph = styled.p`
    font-size: 2em;
`

const AboutMe = () => {
    return (
        <AboutMeBox className="About-me" id="AboutMe">
        <Fade left distance="80px">
        <Title className="About-me-title">Hi, I'm Fraser</Title>
        </Fade>
        <Fade right distance="80px">
        <Paragraph>I'm new to the tech field. I recently invested into a CodeClan course to expand my understanding of the field. In my time at CodeClan I've explored a variety of languages and used those to create projects. After my time at CodeClan I hope to explore a wide range of topics before going deeper into a more specific topic.</Paragraph>
        </Fade>
        </AboutMeBox>
    )
}

export default AboutMe