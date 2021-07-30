import React from 'react'
import './InputField.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
const InputField = ({type,placeholder}) => {
    return (
        <div className="input_wrapper">
        <input className="inputFieldStyle" type={type} placeholder={placeholder} />
            <SearchRoundedIcon className="input_icon" />
        </div>
    )
}

export default InputField
