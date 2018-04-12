import * as React from 'react';
import { Container } from 'reactstrap';
import Header from './common/header';
import styled from 'styled-components';

const Link = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: black;
    padding-top: 30px;
    &:hover {
        color: #000;
    }
`;

const IconContainer = styled.div`
    color: black;
    &:hover {
        color: #000;
        text-decoration: none;
    }
`;

export default class Contact extends React.PureComponent {
    render() {
        return (
            <Container>
                <Header headerTitle="Contact" />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                    <Link href="mailto:carlosarg54@gmail.com"><IconContainer><i className="fa fa-envelope fa-2x" /></IconContainer><span style={{ paddingLeft: 20}}>carlosarg54@gmail.com</span></Link>
                    <Link href="https://github.com/carlosa54" target="_blank"><IconContainer><i className="fa fa-github fa-2x" /></IconContainer><span style={{ paddingLeft: 20}}>carlosa54</span></Link>
                    <Link href="https://www.linkedin.com/in/carlos-ramirez5/" target="_blank"><IconContainer><i className="fa fa-linkedin fa-2x" /></IconContainer><span style={{ paddingLeft: 20}}>carlos-ramirez-5</span></Link>
                    </div>
                </div>
            </Container>
        );
    }
}