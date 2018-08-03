//importing react modules
import React, { Component } from 'react';

//importing semantic ui components
import { Header } from 'semantic-ui-react';

var divider = window.innerWidth > 766 ? 2 : 4;

module.exports = (props) => {

  var path = props.data.posterImage != "posterthatismissing.jpg" ? "./../../assets/images/"+props.data.posterImage : "./../../assets/images/placeholder_for_missing_posters.png";

  return(
    <div>
      <img style = {styles.poster} src={path} />
      <Header as="h5" inverted style={styles.header}>{props.data.name}</Header>
    </div>
)}

const styles = {
    poster:{
      height:window.innerHeight/divider,
      width:window.innerWidth/4,
      marginTop:'25px'
    },
    header:{
      marginTop:'10px'
    }
}
