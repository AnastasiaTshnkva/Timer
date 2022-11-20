import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
    .title {
    }
`;

const Title = () => {
    return (
        <StyledTitle>
            <h1 className={'title'}>Timer</h1>
            <p className={'description'}>You can start the timer by pressing the button</p>
        </StyledTitle>
    )
};

export default Title;