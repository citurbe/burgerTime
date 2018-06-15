import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BurgerList from './burgerList';
import { searchBurgers } from '../actions/burgerActions'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.searchBurgers(this.state.search);
    }

    handleChange(event){
        this.setState({
            search: event.target.value
        })
    }


    render(){
        return (
            <div>
                <p>Hungry? Search for a topping to get all the burgers with that topping.</p>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='topping' onChange={this.handleChange}/>
                    <input type='submit' value='Search' />
                </form>

                <BurgerList />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({searchBurgers: searchBurgers}, dispatch)
  }

  export default connect(null, mapDispatchToProps)(Search);

