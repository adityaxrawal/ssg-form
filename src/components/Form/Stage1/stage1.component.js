import React from 'react'

const Stage1 = (props) => {
    return (
        <div>
            <div className='name'>
                <span>Name</span>
                <input type='text' defaultValue={props.PD.name} onChange={(e) => { props.handler(e.target.value, "name") }} />
            </div>
            <div className='phone'>
                <span>Phone</span>
                <input type='number' defaultValue={props.PD.phone} onChange={(e) => { props.handler(e.target.value, "phone") }} />
            </div>
            <div className='email'>
                <span>Email</span>
                <input type='text' defaultValue={props.PD.email} onChange={(e) => { props.handler(e.target.value, "email") }} />
            </div>
        </div>
    )
}

export default Stage1