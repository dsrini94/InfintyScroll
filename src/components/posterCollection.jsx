//importing  React Modules
import React, { Component } from 'react';

//importing Semantic-ui components
import { Grid, Image } from 'semantic-ui-react';

//importing Custom Components
import Poster from './poster.jsx';

//importing JSON data
import page1Data from './../../API/CONTENTLISTINGPAGE-PAGE1.json';
import page2Data from './../../API/CONTENTLISTINGPAGE-PAGE2.json';
import page3Data from './../../API/CONTENTLISTINGPAGE-PAGE3.json';

var data1 = page1Data.page.contentItems.content;
var data2 = page2Data.page.contentItems.content;
var data3 = page3Data.page.contentItems.content;

export default class PosterCollection extends Component{

  constructor(props){
    super();
    this.state = {
        movieData:data1,
        counter:1
    }
  }

  componentWillMount(){
    this.scrollListner = window.addEventListener('scroll', (e) => {
      this.handleScroll(e)
    })
  }

  handleScroll(e){

    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight) - 20;
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
        if(this.state.counter === 1)
          this.setState({movieData:[...this.state.movieData,...data2],counter:2})
        else
        if(this.state.counter === 2)
          this.setState({movieData:[...this.state.movieData,...data3],counter:3})

    } else {
    }

  }

  render(){

    return(
      <div id="posterCollection" style={styles.container}>
        <Grid columns={3} style={{margin:'auto'}}>
          <Grid.Row style={{margin:0}} className="poster">
            {
              this.state.movieData.map((item,index) => (
                    <Grid.Column key={index} className="posterColumns">
                      <Poster data={item} />
                    </Grid.Column>
              ))
            }
        </Grid.Row>
        </Grid>
      </div>)
  }
}

const styles = {
  container:{
    backgroundColor:'#303133',
  },
}
