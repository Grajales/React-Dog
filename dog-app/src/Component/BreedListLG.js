import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
// import './Homepage.css';
export default class BreedList extends Component {
    
    render() {
      console.log("breedlist",this.props.dogs)
      const object = this.props.dogs;
      let breed_list =[]
      for (const property in object) {
        let mainbreed= property

        let breed = object[property]
        if(breed.length>0){
        breed.forEach((value,index) => {
          breed_list.push(<p key="index"> <i> {mainbreed} </i>, {value} </p>);
        })
      } else {
        breed_list.push(<p key="index"> <i> {mainbreed} </i> </p>);
      }
        //  breed_list+=([{mainbreed, [breed]]);
   
        console.log('breedeach', breed)
        console.log('mainbreed', mainbreed)
        
      }
    
      return (
        <div className="App">
        <h1 className='header'>Random Dog Pix</h1>
        <img src={this.state.dogUrl}></img>
        <br/>
        <button onClick={this.getBreedList}>Show List of Breeds</button>
        <Switch>
          <Route path='/' render={routerProps =>
            <BreedList {...routerProps} breeds={this.state.breedList} />
          } />
        </Switch>
      </div>
      )
    }
}
