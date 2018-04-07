import * as React from 'react';
import { Container, Card, CardBody, CardFooter } from 'reactstrap';
import { getWorks } from '../utils/api';
import Spinner from './common/spinner';
import styled from 'styled-components';
import { MONTH_NAMES } from '../utils/constants';

interface State {
    works: any;
    error: string;
    isFetching: boolean;
}

const ExperienceContainer = styled(Container)`
    margin-bottom: 30px;
    @media only screen and (min-width: 768px) {
        max-width: 70% !important;
    }
`;

const WorkLogo = styled.img`
    max-height: 50px;
    padding-bottom: 5px;
    margin-right: 10px;
`;

const WorkDescription = styled.p`
    text-align: justify;
    white-space: pre-wrap;
    line-height: 1.5;
    font-size: 14px;
`;

const WorkName = styled.h2`
    overflow: hidden;
    font-weight: 300;
`;

export default class Experience extends React.PureComponent<any, State> {
    constructor(props) {
        super(props);
        this.state = {
            works: [],
            error: '',
            isFetching: true
        };
    }

    async componentDidMount() {
        try {
            const { data } = await getWorks();
            if (data === null) {
                this.setState({
                    error: 'Looks like there was an error, please try again',
                });
            } else {
                this.setState({ works: data, isFetching: false });
            }
        } catch (err) {
            this.setState({ error: err });
        }
    }

    formatJobDate(jobDate: Date) {
        return `${MONTH_NAMES[jobDate.getMonth()]} ${jobDate.getFullYear()}`;
    }
    render() {
        const { works, error } = this.state;
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
                <h1 style={{ paddingTop: 5 }}>Experience</h1>
                <hr />
                {this.state.isFetching ?
                    <Spinner />
                    :
                    <ExperienceContainer>
                        {works.map((work, idx) => {
                            const fromDate = new Date(work.from_date);
                            const toDate = (work.to_date !== null) && new Date(work.to_date);
                            return (
                            <Card key={idx} style={{ marginBottom: 40 }}>
                                <CardBody>
                                    <div style={{ display: 'flex', alignItems: 'center'}}>
                                    {work.logo && <WorkLogo alt={work.name} src={work.logo} />}
                                    <WorkName>{work.name}</WorkName>
                                    </div>
                                    <hr />
                                    <WorkDescription>{work.description}</WorkDescription>
                                </CardBody>
                                <CardFooter>
                                    <span style={{ fontSize: '75%', fontWeight: 200 }}>
                                    {`${this.formatJobDate(fromDate)} - ${toDate ? this.formatJobDate(toDate) : 'Present'}`}
                                    </span>
                                </CardFooter>
                            </Card>
                            );
                        })}
                    </ExperienceContainer>
                }
            </Container>
        );
    }
}