import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
`;

export const FlexColumn = Flex.extend`
    display: flex;
    flex-direction: column;
`;

export const RowContent = styled.div`
    align-items: flex-start;
`;

export const Center = styled.div`
    text-align: center;
`;

export const RowCenter = Flex.extend`
    justify-content: center;
    align-items: center;
`;