import * as React from 'react';
import styled from 'styled-components';

interface Props {
    headerTitle: string;
}

const HeaderContainer = styled.div`
      text-align: center;
`;

export default class Header extends React.PureComponent<Props, any> {
    render() {
        return (
            <HeaderContainer>
                <h1 style={{ paddingTop: 5 }}>{this.props.headerTitle}</h1>
                <hr />
            </HeaderContainer>
        );
    }
}