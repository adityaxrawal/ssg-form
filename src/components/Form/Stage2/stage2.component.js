import React from 'react'

const Stage2 = (props) => {
    return (
        <div>
            <div className='pan'>
                <span>PAN</span>
                <input type='text' defaultValue={props.FD.pan} onChange={(e) => { props.handler(e.target.value, "pan") }} />
            </div>
            <div className='aadhar'>
                <span>Aadhar</span>
                <input type='text' defaultValue={props.FD.aadhar} onChange={(e) => { props.handler(e.target.value, "aadhar") }} />
            </div>
        </div>
    )
}

export default Stage2