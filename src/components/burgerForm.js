import React from 'react';
import { addBurger, editBurger, getToppings } from '../actions/burgerActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

const ToppingList = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`

class BurgerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.activeBurger.name || '',
            has_bun: props.activeBurger.has_bun || true,
            has_patty: props.activeBurger.has_patty || true,
            toppings: props.activeBurger.toppings || [],
            newTopping: '',
            toppingList: props.toppings || []
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitBurger = this.submitBurger.bind(this);
        this.selectTopping = this.selectTopping.bind(this);
    }

    componentWillMount(){
       if (!!this.props.toppings) this.props.getToppings();
    }


    handleInputChange(event){
        const target = event.target;
        const value = target.value === 'hasBun' || target.value === 'hasPatty' ? true: target.value === 'noBun' || target.value ==='noPatty' ? false : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    removeTopping(toppingName, event) {
        event.preventDefault();
        const filteredToppings = this.state.toppings.filter(topping=>{
            return topping.name !== toppingName;
        })
        this.setState({
            toppings: filteredToppings
        })
    }
    
    submitBurger(event){
        if(!this.state.name) {
            alert('Your burger needs a name')
            return;
        }
        event.preventDefault();
        const newBurger = {
                name: this.state.name,
                has_bun: this.state.has_bun,
                has_patty: this.state.has_patty,
                toppings: this.state.toppings
        }

        if(this.props.activeBurger.id){
            const removeToppings = newBurger.toppings.length < this.props.activeBurger.toppings.length;
            this.props.editBurger(this.props.activeBurger.id, newBurger, removeToppings);
        } else {
            this.props.addBurger(newBurger);
        }


    }

    selectTopping(event) {
        event.preventDefault();
        const toppingArr = [...this.state.toppings];
        toppingArr.push({name: event.target.value});
        this.setState({
            toppings: toppingArr
        })
    }
    
    render() {
        return (
            <form onSubmit={this.submitBurger}>
                <p>Name: <input type='text' name='name' value={this.state.name} onChange={this.handleInputChange} /></p>
                <p>Bun?: 
                    <input type='radio' id='bunYes' name='has_bun' value="yesBun" defaultChecked={this.state.has_bun} onChange={this.handleInputChange} />
                    <label htmlFor="bunYes">Yes</label>

                    <input type='radio' id='bunNo' name='has_bun' value ="noBun" defaultChecked={!this.state.has_bun} onChange={this.handleInputChange} />
                    <label htmlFor="bunNo">No</label>
                </p>
                <p>Patty?: 
                    <input type='radio' id='pattyYes' name='has_patty'  value="yesPatty" defaultChecked={this.state.has_patty} onChange={this.handleInputChange} />
                    <label htmlFor="pattyYes">Yes</label>

                    <input type='radio' id='pattyNo' name='has_patty' value="noPatty" defaultChecked={!this.state.has_patty} onChange={this.handleInputChange} />
                    <label htmlFor="pattyNo">No</label>
                </p>
                <div>
                    Toppings:
                    <ToppingList>
                        {this.state.toppings.map((topping, index)=>{
                            return(<div key={index}>{topping.name} <button 
                                onClick={(e) => this.removeTopping(topping.name, e)}>remove</button></div>)
                        })}
                    </ToppingList>
                    <label>
                        Select a topping to add
                        <select value={this.state.newTopping} onChange={this.selectTopping}>
                            <option value="">--</option>
                            {
                                this.props.toppings
                                .filter(topping => {
                                    const toppingNames = this.state.toppings.map(top=>top.name);
                                    return !toppingNames.includes(topping.name);
                                })
                                .map(topping => {
                                    return (<option value={topping.name} key={topping.name}>{topping.name}</option>)
                                })
                            }
                        </select>
                    </label>
                </div>
                <input type='submit' value='Cook this burger!' />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      activeBurger: state.activeBurger,
      toppings: state.toppings.toppingList
          };
  }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addBurger: addBurger, editBurger: editBurger, getToppings: getToppings}, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(BurgerForm);
