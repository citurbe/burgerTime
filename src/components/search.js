import React from 'react';

class Search extends React.Component {


    render(){
        return (
            <div>
                <p>Hungry? Search for a topping to get all the burgers with that topping.</p>
                <form>
                    <input type='text' name='topping'/>
                    <input type='submit' value='Search' />
                </form>
            </div>
        )
    }
}