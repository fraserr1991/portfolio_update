import React from 'react'
import './Skills.css'
import styled from 'styled-components'
import {Fade} from 'react-reveal'

const SkillsBox = styled.div`
    height: 90em;
`

const Title = styled.h1`
    font-size: 5em;
    text-align: center;
`

const SubTitle = styled.h3`
    font-size: 2em;
    text-align: center;
`

const Paragraph = styled.p`
    font-size: 2em;
`

const IconContainerForLanguages =styled.div`
    display: inline-grid;
    grid-template-columns: auto auto auto auto auto;
    background-color: whitesmoke;
    padding: 10px;
    gap: 50px;

`

const IconContainForFrameworks =styled.div`
    display: inline-grid;
    grid-template-columns: auto auto auto auto auto;
    background-color: whitesmoke;
    padding: 10px;
    gap: 50px;

`

const Skills = () => {
    return(
        <SkillsBox id="Skills">
        <Fade left distance="80px">
        <Title>I've covered: </Title>
        </Fade>
        <Fade right distance="80px">
            <SubTitle>Programming languages</SubTitle>
            <IconContainerForLanguages>
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-python-plain-wordmark colored"></i>
            <i class="devicon-css3-plain-wordmark colored"></i>
            <i class="devicon-html5-plain-wordmark colored"></i>
            <i class="devicon-postgresql-plain-wordmark colored"></i> 
            <i class="devicon-react-original-wordmark colored"></i>
            </IconContainerForLanguages> 
            <SubTitle>Frameworks, and tools</SubTitle>
            <IconContainForFrameworks>
            <i class="devicon-npm-original-wordmark"></i>
            <i class="devicon-flask-original-wordmark colored"></i>
            <figure>
            <i class="devicon-nodejs-plain colored"></i>
            <figcaption>NodeJS</figcaption>
            </figure>
            </IconContainForFrameworks>
              
            <Paragraph>On a journey to become a full-stack developer</Paragraph>  
        </Fade>
        </SkillsBox>
        )
}

export default Skills