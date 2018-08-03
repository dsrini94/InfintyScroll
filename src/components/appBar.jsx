//importing React modules
import React, { Component } from 'react';

//importing semantic ui components
import { Dropdown } from 'semantic-ui-react'

//importing redux modules
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//importing action handler
import searchHandler from './../../redux/actions/searchHandler.js';

class AppBar extends Component {

  constructor(props){
    super(props);
  }

  render(){

    return(
      <div style={styles.appBar}>
        <div >
          <img src={'./../../assets/images/Back.png'} style={styles.backButton} />
        </div>

        <div>
          <h4 style={styles.heading}> Romantic Comedy</h4>
        </div>

        <div>
          <form>
          <input type="text" list="data" placeholder="Search.." onChange={(e) =>this.props.searchHandler(e.target.value)} style={styles.input}/>
          {/* <img src="./../../assets/images/search.png" id="search"/> */}
           <datalist id="data">
               {this.props.SearchReducer.data.map((item,index) =>
                   (<option value={item.name} key={index}/>)
               )}
           </datalist>
         </form>
        </div>
      </div>
    )
  }
}


const styles = {
  appBar:{
    backgroundImage : "url('./../../assets/images/nav_bar.png')",
    display:'flex',
    flexDirection:'row',
    margin:0
  },
  backButton:{
    height:'18px',
    marginLeft:'20px',
    marginTop:'20px',
    marginBottom:'20px',
    marginRight:'12px',
  },
  heading:{
    color:'white',
    marginTop:'20px',
  },
  input:{
    width: '130px',
    boxSizing: 'borderBox',
    border: '2px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    backgroundColor: 'black',
    color:'white',
  }
}

function mapStateToProps(state) {
  return {SearchReducer:state.SearchReducer}
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    searchHandler: searchHandler,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(AppBar);
