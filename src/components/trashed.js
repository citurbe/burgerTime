import React from 'react';
import trash from '../assets/images/trash.jpg';
import styled from 'styled-components';

const StyledImage = styled.img`
    width: 300px;
`

export const Trashed = () => {
   return (<div>
        <h4>Your burger was trashed!</h4>
        <StyledImage src={trash} alt="A burger being thrown in a trash can" />
    </div>)
}