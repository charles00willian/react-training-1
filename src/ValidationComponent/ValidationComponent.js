import React from 'react';

const validationComponent = (props) => {
    // let textStatus = ['Text too short', 'Text long enough'];
    // if (props.lengh >= 5)
    return(
        <p>
        {props.textLength >= 5 ? 'Text long enough' : 'Text too short'}
        </p>
    )
}

export default validationComponent;