import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BurgerList from './burgerList';
import { searchBurgers, getToppings } from '../actions/burgerActions'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search: null
        }

        this.selectTopping = this.selectTopping.bind(this);
    }

    componentWillMount(){
        if (!!this.props.toppings) this.props.getToppings();
    }

    selectTopping(event){
        event.preventDefault();
        this.props.searchBurgers(event.target.value);
    }



    render(){
        return (
            <div>
                <p>Hungry? Choose a topping to get all the burgers with that topping.</p>
                <label>
                        <select value={this.state.newTopping} onChange={this.selectTopping}>
                            <option value="">--</option>
                            <option value="none">No Toppings</option>
                            {
                                this.props.toppings
                                .map(topping => {
                                    return (<option key={topping.name} value={topping.name}>{topping.name}</option>)
                                })
                            }
                        </select>
                    </label>

                <BurgerList />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      toppings: state.toppings.toppingList
          };
  }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({searchBurgers: searchBurgers, getToppings: getToppings}, dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Search);

