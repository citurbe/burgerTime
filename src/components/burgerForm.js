import React from 'react';

class BurgerForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <p>Name: <input type='text' name='name' /></p>
                <p>Bun?: 
                    <input type='radio' id='bunYes' name='hasBun' />
                    <label htmlFor="bunYes">Yes</label>

                    <input type='radio' id='bunNo' name='hasBun' />
                    <label htmlFor="bunNo">No</label>
                </p>
                <p>Patty??: 
                    <input type='radio' id='pattyYes' name='hasPatty' />
                    <label htmlFor="pattyYes">Yes</label>

                    <input type='radio' id='pattyNo' name='hasPatty' />
                    <label htmlFor="pattyNo">No</label>
                </p>
            </form>
        )
    }
}

export default BurgerForm;