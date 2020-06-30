import React from 'react'
import '../../css/register.css';

function TextError(props) {
    return (
        <div className="error">
            {props.children}
        </div>
    )
}

export default TextError
