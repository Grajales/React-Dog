import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom'
export default class BreedList extends Component {
  render() {
    console.log('BreedList component this.props.breeds:', this.props.breeds)
      const object = this.props.breeds;
      let breed_list =[]
      for (const property in object) {
        let mainbreed = property
        let breed = object[property]
        if (breed.length > 0) {
          breed.forEach((value, index) => {
            breed_list.push(<p key={index}><i> {mainbreed}</i> {value} </p>);
          })
        } else {
          breed_list.push(<p key={mainbreed}><i> {mainbreed}</i></p>);
        }
      }
      console.log('breed_list:', breed_list)
    return (
      <div className='BreedList'> 
          <ul>
            {breed_list}
          </ul>
      </div>
    )
  }
}