import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import { Route, Link, Switch, Redirect } from "react-router-dom";
import BreedList from './Component/BreedList'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      dogs: {}
    }
  }
    componentDidMount = ()=>{
      let response = axios.get('https://dog.ceo/api/breeds/list/all', {
      
      headers: {
            Accept: 'application/json'
        }
   
    })
    .then(response =>{
      console.log(response)
      this.setState({
        dogs:response.data.message
      })
    })
    }
  
  render() {
    //  console.log(this.state)
    //  console.log(this.state.dogs)
    return (
        <div>
          <Link to='/'> 
          <h1>Dogs List</h1>
          </Link>

          
          <Route exact path='/' render={(routerProps) => 
          <BreedList dogs={this.state.dogs} {...routerProps} /> 
          }>
           </Route>
 

        </div>
    ); 
  }
}

export default App;
