import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSecretWord} from './actions/'


import GuessWord from './guessword';
import Message from './message';
import Input from './input';



export class UnconnectedApp extends Component {
  componentDidMount(){
    this.props.getSecretWord();
  }  
  render(){
  return (
    <div className="wrapper">
      <h1>Jotto</h1>
      <Message success={this.props.success}  />
      <Input/>
      <GuessWord GussedWords={this.props.GussedWords}/>     
    </div>
  )}
}

const mapStateToProps = (state) => {
  const {success,GussedWords,SecretWord} = state;
  return {success,GussedWords,SecretWord};
}


export default connect(mapStateToProps,{getSecretWord})(UnconnectedApp);