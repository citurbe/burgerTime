import React from 'react';
import trash from '../assets/images/trash.jpg';

export const Trashed = () => {
   return (<div>
        <h4>Your burger was trashed!</h4>
        <img src={trash} />
    </div>)
}