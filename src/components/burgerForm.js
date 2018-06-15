import React from 'react';
import { addBurger } from '../actions/burgerActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
        this.submitBurger = this.submitBurger.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }
    
    submitBurger(event){
        if(!this.state.name) {
            alert('Your burger needs a name')
            return;
        }
        event.preventDefault();
        this.props.addBurger({
            name: this.state.name,
            has_bun: this.state.hasBun,
            has_patty: this.state.hasPatty,
            toppings: this.state.toppings
        })
        this.setState = {
            name: null,
            hasBun: true,
            hasPatty: true,
            toppings: []
        }
    }

    submitTopping(event){
        event.preventDefault();
        const newTopping = {name: this.state.newTopping};
        if(this.state.toppings.filter(topping => topping.name === newTopping.name).length > 0){
            alert(`You already have ${newTopping.name} on your burger!`);
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
                    <div>
                        {this.state.toppings.map((topping, index)=>{
                            return(<div key={index}>{topping.name}</div>)
                        })}
                    </div>
                    <input type='text' placeholder='Add a Topping!' name='newTopping' onChange={this.handleInputChange} />
                    <button onClick={this.submitTopping}>Add Topping</button>
                </div>
                <input type='submit' value='Cook this burger!' />
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addBurger: addBurger}, dispatch)
  }

export default connect(null, mapDispatchToProps)(BurgerForm);
