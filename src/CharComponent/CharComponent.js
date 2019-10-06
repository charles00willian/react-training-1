import React from 'react'
import './CharComponent.css'

const charComponent = (props) => {
    return(
        <div className="char" onClick={props.delete}>
            {props.char}
        </div>
    );
}

export default charComponent;