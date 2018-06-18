import React from 'react';
import { Burger } from './burger';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteBurger, loadBurger, startEdit } from '../actions/burgerActions';
import styled from 'styled-components';

const ListRow = styled.div`
    border: 2px solid gray;
    border-radius: 4px;
    margin-top: 5px;
    padding: 10px;
    width:300px
`
const StyledBurger = styled.div`
    min-width: 120px;
`

const Buttons = styled.div`
    margin-left: 10%;
    margin-top: 40%;
`
const StyledButton = styled.button`
    margin-right: 10px;
`

class BurgerList extends React.Component {
    constructor(props){
        super(props);
    }

    handleDelete(id, event){
        event.preventDefault();
        this.props.deleteBurger(id);
    }

    handleEdit(burger, event){
        event.preventDefault();
        this.props.loadBurger(burger);
        this.props.startEdit();
    }

    render(){
        return(
            <div>
                {this.props.burgers.burgerList.map((burger)=>{
                    return (
                    <ListRow className="listRow" key={burger.id}>
                        <StyledBurger>
                            <Burger
                                name={burger.name}
                                has_bun={burger.has_bun}
                                has_patty={burger.has_patty}
                                toppings={burger.toppings}
                                />
                        </StyledBurger>
                        <Buttons className="buttons">
                            <StyledButton onClick={(e) => this.handleEdit(burger, e)}>Edit</StyledButton>
                            <StyledButton onClick={(e) => this.handleDelete(burger.id, e)}>Delete</StyledButton>
                        </Buttons>
                    </ListRow>
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
    return bindActionCreators({deleteBurger: deleteBurger, loadBurger: loadBurger, startEdit: startEdit}, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(BurgerList);
