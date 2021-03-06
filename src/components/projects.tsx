import * as React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { fetchProjects } from '../utils/api';
import Spinner from './common/spinner';
import Header from './common/header';

const ProjectWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const ProjectTitle = styled.h5`
    font-weight: 400;
    text-align: left;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
    @media only screen and (max-width: 990px) {
        text-align: center;
        font-size: 0.9rem;
    }
`;

const ProjectDescription = styled.div`
    padding: 0.4rem;
`;

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const FontLink: any = styled.a`
    color: black;
    font-size: ${(props: any) => props.github ? '0.85' : '1.15'}em !important;
    &:hover {
        text-decoration: none;
        color: black;
    }
`;

const ProjectGrid = ({ projects, match }) => {
    return (
        <ProjectWrapper>
            {projects.map((project) => {
                return (
                    <div key={project.id} className="col-md-offset-0 col-md-4 col-xs-6" style={{ marginBottom: 10 }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', backgroundColor: 'white', borderRadius: 5, border: '1px solid #efeeee', height: '100%' }}>
                            {/* TODO: Add Project detail component
                            <Link
                                to={{
                                    pathname: match.url + '/detail/',
                                    search: `?project=${project.id}`
                                }}
                                style={{ color: 'black', textDecoration: 'none' }}
                            > */}
                                <div style={{ margin: '5px 5px 0 5px' }}>
                                    <img src={project.image} style={{ borderRadius: 5, maxWidth: '100%' }} />
                                    <ProjectDescription>
                                        <ProjectTitle style={{ textTransform: 'uppercase', flexWrap: 'nowrap' }}>{project.title}</ProjectTitle>
                                        <p style={{ color: '#4d4d4d', marginBottom: 0, fontSize: 14 }}className="d-none d-sm-block">{project.description}</p>
                                    </ProjectDescription>
                                </div>
                            {/* </Link> */}
                            <LinksContainer>
                            <div>
                                {project.url &&
                                    <FontLink target="_blank" href={project.url} className="btn"><i className="fa fa-external-link" /></FontLink>
                                }
                            </div>
                            {project.github_url &&
                                <FontLink target="_blank" href={project.github_url} className="btn" github={true}><i className="fa fa-github fa-2x" /></FontLink>
                            }
                            </LinksContainer>
                        </div>
                    </div>
                );
            })}
        </ProjectWrapper>
    );
};

interface State {
    error?: string;
    projects?: any;
    isFetching: boolean;
}
export default class Projects extends React.PureComponent<any, State> {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            error: '',
            isFetching: false
        };
        this.updateProjects = this.updateProjects.bind(this);
    }
    componentDidMount() {
        this.updateProjects();
    }
    updateProjects() {
        this.setState({
            projects: [],
            error: '',
            isFetching: true
        });
        fetchProjects()
            .then((response) => {
                var projects = response.data;
                if (projects === null) {
                    return this.setState({
                        error: 'Looks like there was an error retreiving projects from api',
                    });
                }
                this.setState({ projects: projects, isFetching: false });
            });
    }
    render() {
        var error = this.state.error;
        if (error) {
            return (
                <Container>
                    <h1>Error</h1>
                    <p>{error}</p>
                </Container>
            );
        }
        return (
            <Container>
                <Header headerTitle="Projects" />
                {this.state.isFetching ?
                    <Spinner />
                    :
                    <ProjectGrid projects={this.state.projects} match={this.props.match} />}
            </Container>
        );
    }
}
