import * as React from 'react';
import { Collapse, Container, Navbar, Nav, NavItem, NavLink, NavbarBrand, NavbarToggler } from 'reactstrap';
import { NavLink as RouterLink } from 'react-router-dom';
import { withRouter } from 'react-router';
const image = require('../img/white.png');
const NavLinkN: React.StatelessComponent<any> = NavLink;

class CustomNavbar extends React.PureComponent<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            showNavbar: false
        };
    }
    toggleNavbar = (e) => {
        e.preventDefault();
        this.setState({
            showNavbar: !this.state.showNavbar
        });
    }
    render() {
        return (
            <Navbar expand="md" dark={true}>
                <Container>
                    <NavbarBrand>
                        <img alt="Logo" style={{ height: 35 }} src={image} />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse navbar={true} isOpen={this.state.showNavbar} style={{ textAlign: 'center' }}>
                        <Nav className="ml-md-auto" navbar={true}>
                            <NavLinkN tag={RouterLink} exact={true} to="/">
                                <NavItem>Home</NavItem>
                            </NavLinkN>
                            <NavLinkN tag={RouterLink} to="/projects">
                                <NavItem>Projects</NavItem>
                            </NavLinkN>
                            <NavLinkN tag={RouterLink} to="/skills">
                                <NavItem>Skills</NavItem>
                            </NavLinkN>
                            <NavLinkN tag={RouterLink} to="/experience">
                                <NavItem>Experience</NavItem>
                            </NavLinkN>
                            <NavLinkN tag={RouterLink} to="/about">
                                <NavItem>About</NavItem>
                            </NavLinkN>
                        </Nav>
                        <Nav className="ml-auto justify-content-center">
                            <NavLinkN href="https://github.com/carlosa54" target="_blank"><i className="fa fa-github fa-2x" /></NavLinkN>
                            <NavLinkN href="https://www.linkedin.com/in/carlos-ramirez-0a9764133/" target="_blank"><i className="fa fa-linkedin-square fa-2x" /></NavLinkN>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default withRouter(CustomNavbar);
