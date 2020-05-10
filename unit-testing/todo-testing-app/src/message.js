import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
    //console.group(props);
    if(props.success) { 
    return (
         <div data-test="message-container">
            This message container working fine
            <hr/>
         </div>
         
    )
    }
    else {
        return (<div data-test="message-container"></div>)
    }
}
Message.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Message;