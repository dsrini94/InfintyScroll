//importing React modules
import React, { Component } from 'react';

//importing Custom components
import AppBar from './../components/appBar.jsx';
import Poster from './../components/poster.jsx';
import PosterCollection from './../components/posterCollection.jsx';

export default class MovieScreen extends Component{

  render(){
    return(
      <div>
        <AppBar />
        <PosterCollection />
      </div>
    );
  }
}
