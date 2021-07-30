import React from 'react'
import  './SelectOpt.css'
const SelectOpt = (optionArray,onChange,value) => {
    return (
        <div className="select_wrapper">
            <select className="select_main">
    <option value="val 1"  className="opt">ANY</option>
    <option value="val 1"  className="opt">BTC</option>
    <option value="val 1"  className="opt">USD</option>
    <option value="val 1"  className="opt">DTC</option>

            </select>
        </div>
    )
}

export default SelectOpt
