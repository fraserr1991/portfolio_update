import React from 'react'
import './Projects.css'
import styled from 'styled-components'
import {Fade} from 'react-reveal'

const ProjectsBox = styled.div`
    height: 40em;
`

const Title = styled.h1`
    font-size: 5em;
    text-align: center;
`

const Projects = () => {
    return(
    <ProjectsBox id="Projects">
    <Fade left>
    <Title>Projects: </Title>
    </Fade>
    <Fade right> 
        <>
        <i class="devicon-javascript-plain colored"></i>
        <i class="devicon-python-plain-wordmark colored"></i>   
        </>
    </Fade>
    </ProjectsBox>
    )
}

export default Projects