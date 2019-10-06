import React from 'react'
import './CharComponent.css'

const charComponent = (props) => {
    return(
        <div className="char">
            {props.char}
        </div>
    );
}

export default charComponent;