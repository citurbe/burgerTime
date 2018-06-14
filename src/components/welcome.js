import React from 'react';
import { Link } from 'react-router-dom';

export const Welcome = () => {
    return(
        <div>
            Welcome! How can I help you?
            <Link to="/search">Search for Burgers!</Link>
            <Link to="/new">Make a New Burger!</Link>
        </div>
    )
}