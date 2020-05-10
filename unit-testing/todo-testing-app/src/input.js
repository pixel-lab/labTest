import React, { Component } from 'react';
import {connect} from 'react-redux';
import {GussedWord} from './actions/'

export class UnconnectedInput extends Component{ 
    constructor(){
        super();
        this.inputBox = React.createRef();
    }   
    submitCall =(evt) => {
        evt.preventDefault();
        this.props.GussedWord(this.inputBox.current.value);
        this.inputBox.current.value = ''
    } 
    render(){             
        if(!this.props.success){
        return (
            <div className="container" data-test="input-container">
                <input type="text" data-test="input-text-box" ref={this.inputBox}/>
                <button  data-test="submit-button" onClick={this.submitCall}>Submit</button>
            </div>
        )
        }
        else {
            return null
        }
    }
}
const mapStateToProps = ({success}) => {
    return {
        success
    }
}
export default connect(mapStateToProps,{GussedWord})(UnconnectedInput)