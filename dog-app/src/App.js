
import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import axios from "axios";
import BreedList from './Component/BreedList';
import './App.css';
// import '../BreedList/BreedList.css';
export default class App extends Component {
  constructor() {
    super() 
    this.state = {
      dogUrl: "",
      breedList: [],
      // value:"",


    }
    // this.handleChange = this.handleChange.bind(this);
  }
  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  componentDidMount = async() => {
    let response = await axios.get('https://dog.ceo/api/breeds/image/random')
    console.log('app response', response.data.message);
    this.setState({
      dogUrl: response.data.message
    })
  } 
  getBreedList = async() => {
    let response = await axios.get('https://dog.ceo/api/breeds/list/all')
    console.log('app response breeds', response.data.message);
    this.setState({
      breedList: response.data.message
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className='header'>Random Dog Pix</h1>
        <img src={this.state.dogUrl}></img>
        <br/>
        <button onClick={this.getBreedList}>See List of Breeds</button>
        <Switch>
          <Route path='/' render={routerProps =>
            <BreedList {...routerProps} breeds={this.state.breedList} />
          } />
        </Switch>
      </div>
    );
  }
}