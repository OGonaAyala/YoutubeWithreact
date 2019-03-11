import React, { Component } from 'react';
import { Button } from 'reactstrap';

class BarraBuscador extends React.Component{
    constructor(){
        super();
        this.state = {
          val: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleInput(e){
        const {value} = e.target;
        this.setState({
          val : value
        })
      }
      handleSubmit(e) {
        e.preventDefault();
        this.props.search(this.state.val)
      }

    render(){
        const style = {
            margin: '10px',
            padding: '5px'
        }

        const styleBoton = {
            margin:'10px'
        }
        return (
            <form style={style} onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" name="Buscar"  onChange={this.handleInput} />
                </label>
                <Button style={styleBoton} color="red" type="submit" value="Buscar" >Buscar</Button>
            </form>
      
            );       
    }

}

export default BarraBuscador;