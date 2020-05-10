import React from 'react';
import {connect} from 'react-redux';
import {moviesList} from '../actioncreators'
import { bindActionCreators } from 'redux';




class App extends React.Component{

  componentWillMount(){
    this.props.moviesList()
    //console.log(this.props);
  }

  render(){
    //debugger;
    console.log(this.props.data.movies);
    const movieList = this.props.data.movies && this.props.data.movies.length > 0 ? this.props.data.movies.map((iteam, index) => <li key={index}>{iteam.name}</li>) : null;
    return(      
      <div>
        <h1>Nothing Bad for being ugly</h1>
        <p>Its my life</p>
        {movieList}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.movies
  }
}


// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     getMovies: () => {
//       dispatch(moviesList())
//     }
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    moviesList      
  },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
