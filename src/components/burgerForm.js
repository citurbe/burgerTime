import React from 'react';
class BurgerForm extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            name: props.name,
            hasBun: props.hasBun || true,
            hasPatty: props.hasPatty || true,
            toppings: props.toppings || [],
            newTopping: null
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitTopping = this.submitTopping.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }
    
    submitBurger(){

    }

    submitTopping(event){
        event.preventDefault();
        const newTopping = {name: this.state.newTopping};
        if(this.state.toppings.filter(topping => topping.name === newTopping.name).length > 0){
            alert(`You alread have ${newTopping.name} on your burger!`);
            return;
        } else {
            const toppingArr = [...this.state.toppings];
            toppingArr.push(newTopping)
            this.setState({
                toppings: toppingArr
            })
        }
    }
    
    render() {
        return (
            <form onSubmit={this.submitBurger}>
                <p>Name: <input type='text' name='name' value={this.props.value} onChange={this.handleInputChange} /></p>
                <p>Bun?: 
                    <input type='radio' id='bunYes' name='hasBun' defaultChecked={this.state.hasBun} onChange={this.handleInputChange} />
                    <label htmlFor="bunYes">Yes</label>

                    <input type='radio' id='bunNo' name='hasBun' defaultChecked={!this.state.hasBun} onChange={this.handleInputChange} />
                    <label htmlFor="bunNo">No</label>
                </p>
                <p>Patty?: 
                    <input type='radio' id='pattyYes' name='hasPatty' defaultChecked={this.state.hasPatty} onChange={this.handleInputChange} />
                    <label htmlFor="pattyYes">Yes</label>

                    <input type='radio' id='pattyNo' name='hasPatty' defaultChecked={!this.state.hasPatty} onChange={this.handleInputChange} />
                    <label htmlFor="pattyNo">No</label>
                </p>
                <div>
                    Toppings:
                    <ul>
                        {this.state.toppings.map((topping, index)=>{
                            return(<li key={index}>{topping.name}</li>)
                        })}
                    </ul>
                    <input type='text' placeholder='Add a Topping!' name='newTopping' onChange={this.handleInputChange} />
                    <button onClick={this.submitTopping}>Add Topping</button>
                </div>
            </form>
        )
    }
}

export default BurgerForm;