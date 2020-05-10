import React, { Component } from 'react';
import './App.css';
import {connect}  from 'react-redux';
import {MovieList,directorslist} from './actions/index';
import {bindActionCreators} from 'redux';


class App extends Component {
  componentWillMount(){
    this.props.MovieList();
    this.props.directorslist();
  }
  bindHandler = (movies) => (
    movies ? movies.map((item,i) => (
      <div key={i}>{item.moviename}</div>
    )): null
  )
  render() {
    console.log(this.props);
    
    return (
      <div className="App">
        <div className="App-header">
          {this.bindHandler(this.props.data.movies)}
        </div>
      </div>
    );
  }
}

 const mapStateToProps = (state) => {
  return {
    data: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    MovieList,directorslist
  }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
