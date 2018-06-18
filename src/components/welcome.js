import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin-top: 10px;
`

export const Welcome = () => {
    return(
        <StyledDiv>
            Welcome! Choose a link above to begin.
        </StyledDiv>
    )
}