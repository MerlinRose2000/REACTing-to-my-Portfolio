import React from "react";
import {useParams} from "react-router-dom";
import {ProjectObjects} from './ProjectObjects';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import "../styles/projectsView.css";

const ProjectView = () => {
	const {id} = useParams();
	const project = ProjectObjects[id]
	return (
		<div className="project">
			<h1> {project.name}</h1>
			<img src = {project.image} alt="project" />
			<div className="icons"> 
				<a href={project.gitHub} >
					<GitHubIcon />
				</a>
			
				<a href={project.link} >
					<LinkIcon />
				</a>
			</div>
		</div>
	);
}

export default ProjectView;
