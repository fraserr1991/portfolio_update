import React, {useState, useEffect} from 'react'
import './Projects.css'
import styled from 'styled-components'
import {Fade} from 'react-reveal'
import { projectsList } from './ProjectsList'

const ProjectsBox = styled.div`
    height: 40em;
    display: flex;
    justify-content: space-evenly;
`

const Title = styled.h1`
    font-size: 5em;
    text-align: center;
`

const ProjectDetails = styled.div`
    background-color: whitesmoke;
    height: 12em;
    padding: 1em;
    border-radius: 1em;
`

const Projects = () => {
const [repos, setRepos] = useState([])

useEffect(() => {
    async function getRepos() {
    const repos = await fetch(
        'https://api.github.com/users/fraserr1991/repos?per_page=100'
    )
    return repos.json()
    }

    getRepos()
    .then((data) => {
        setRepos(data)
    })
    .catch((err) => console.error(err))
}, [])

    return(
    <>
    <Fade left distance="80px">
    <Title>Projects: </Title>
    </Fade>
    <Fade right distance="80px"> 
    <ProjectsBox className="Projects" id="Projects">
    {projectsList.map((project) => {
            return (
            <ProjectDetails key={project.slug}>
                <div className="stars">
                {repos.find((repo) => repo.name === project.slug) && (
                    <div className="star">
                    <a
                        href={`https://github.com/fraserr1991/${project.slug}/stargazers`}
                    >
                    </a>
                    </div>
                )}
                </div>
                <div>
                <time>{project.date}</time><br/>
                <a
                    className="card-header"
                    href={`https://github.com/fraserr1991/${project.slug}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    {project.name}
                </a>
                <p>{project.tagline}</p>
                </div>
                <div className="links anchored">
                {project.writeup && (
                    <li className="button small" to={project.writeup}>
                    Article
                    </li>
                )}
                {project.url && (
                    <a
                    className="button small flex"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    >
                    </a>
                )}
                <a
                    className="button small flex"
                    href={`https://github.com/fraserr1991/${project.slug}`}
                    target="_blank"
                    rel="noreferrer"
                >
                Source
                </a>
                <p>Languages: {project.languages}</p>
                </div>
            </ProjectDetails>
            )
        })}
    </ProjectsBox>
    </Fade>
    </>
    )
}

export default Projects