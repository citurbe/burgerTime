import React from 'react';
import added from '../assets/images/pittBurger.jpg';

export const Success = () => {
   return (<div>
        <h4>Your burger is ready!</h4>
        <img src={added} alt="Brad Pitt throwing a cheeseburger" />
    </div>)
}