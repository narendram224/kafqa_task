import React from 'react'
import './InputField.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
const InputField = ({type,placeholder,handleOnChange,value}) => {
    return (
        <div className="input_wrapper">
        <input className="inputFieldStyle" value={value} onChange={handleOnChange} type={type} placeholder={placeholder} />
            <SearchRoundedIcon className="input_icon" />
        </div>
    )
}

export default InputField
