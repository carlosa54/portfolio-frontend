import * as React from 'react';
import styled from 'styled-components';
import { getSkills } from '../utils/api';
import { Card, CardBody, Container } from 'reactstrap';
import { Flex } from './common';
import _ from 'lodash';
import Spinner from './common/spinner';

const SkillsContainer = Flex.extend`
    align-items: flex-end;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const Skill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

interface Props {
    skills: any;
}

export default class Skills extends React.PureComponent<Props, any> {
    constructor(props) {
        super(props);
        this.state = {
            skills: {}
        };
    }
    async componentDidMount() {
        try {
            const { data } = await getSkills();
            const groupedSkills = _.groupBy(data, (skill) => skill.skill_type);
            this.setState({ skills: groupedSkills });
        } catch (err) {
            console.warn(err);
        }
    }

    render() {
        const { skills } = this.state;
        return (
            <Container>
                <h1 style={{ paddingTop: 5 }}>Skills</h1>
                <hr />
                {!_.isEmpty(skills) ?
                    <Container>
                        {Object.keys(skills).map((key) => (
                            <Card style={{ marginBottom: 40 }}>
                                <CardBody>
                                    <h2 style={{ fontWeight: 200 }}>{key}</h2>
                                    <hr />
                                    <SkillsContainer>
                                        {skills[key].map((skill, idx) => (
                                            <Skill key={idx}>
                                                {skill.image && <img style={{ maxHeight: 85, maxWidth: 90, paddingBottom: 5 }} alt={skill.name} src={skill.image} />}
                                                {skill.name}
                                            </Skill>
                                        ))}
                                    </SkillsContainer>
                                </CardBody>
                            </Card>
                        ))
                        }
                    </Container>
                    :
                    <Spinner />
                }
            </Container>
        );
    }
}
