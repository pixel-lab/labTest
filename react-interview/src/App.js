import React from 'react';
import {connect} from 'react-redux';
import {movileList} from './actions/movileList'




class App extends React.Component{
  componentDidMount(){    
    this.props.List();    
  }
  render(){
    console.log(this.props);
    return <div>Hello</div>
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.movieList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    List: () => {
      dispatch(movileList())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
