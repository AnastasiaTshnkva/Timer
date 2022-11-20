import React from 'react';
import styled from 'styled-components';

const StyledTimer = styled.div`
    
`
const Timer = () => {
    return (
        <StyledTimer>
            <div>
                <div>hour</div>
                <div>minute</div>
                <div>second</div>
            </div>
            <button type={'button'}>Start</button>
            <button type={'button'}>Stop</button>
        </StyledTimer>
        )
};

export default Timer;
