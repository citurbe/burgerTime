import React from 'react';
import { Burger } from './burger';

class BurgerList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            burgers: props.burgers || []
        }
    }

    render(){
        console.log(this.state);
        return(
            <div>
                {this.state.burgers.map((burger)=>{
                    return (<Burger
                        name={burger.name}
                        hasBun={burger.hasBun}
                        hasPatty={burger.hasPatty}
                        toppings={burger.toppings}
                        key={burger.id}
                        />)
                })}
            </div>
        )
    }
}

export default BurgerList