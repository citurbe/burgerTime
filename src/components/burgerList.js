import React from 'react';
import { Burger } from './burger';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteBurger } from '../actions/burgerActions'

class BurgerList extends React.Component {
    constructor(props){
        super(props);
    }

    handleDelete(id, event){
        event.preventDefault();
        this.props.deleteBurger(id);
    }

    render(){
        return(
            <div>
                {this.props.burgers.burgerList.map((burger)=>{
                    return (
                    <div className="listRow" key={burger.id}>
                        <Burger
                            name={burger.name}
                            hasBun={burger.hasBun}
                            hasPatty={burger.hasPatty}
                            toppings={burger.toppings}
                            />
                        <div className="buttons">
                            <button>Edit</button>
                            <button onClick={(e) => this.handleDelete(burger.id, e)}>Delete</button>
                        </div>
                    </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      burgers: state.burgers
          };
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({deleteBurger: deleteBurger}, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(BurgerList);
