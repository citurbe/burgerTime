import React from 'react';

export const Burger = (props) => {
    return (
        <div>
            <p> Name: { props.name } </p>
            <p>{ props.has_bun ? 'Has bun!' : 'Gluten Free!' }</p>
            <p>{ props.has_patty ? 'Has a patty!': 'Veggie!' }</p>
            <p>Toppings:</p>
            <ul>
                { props.toppings.map((topping, index)=> {
                    return (<li key={ index }>{ topping }</li>);
                }) }
            </ul>
        </div>    
    );
}