import React from 'react'

import './submit.component.css'

const SubmitDetails = (props) => {
  return (
    <div className='detail-container'>
        <div className='detail'>
            <span>Name</span>
            <span>{props?.data?.PD?.name || "Not fount"}</span>
        </div>
        <div className='detail'>
            <span>Phone</span>
            <span>{props?.data?.PD?.phone || "Not found"}</span>
        </div>
        <div className='detail'>
            <span>Email</span>
            <span>{props?.data?.PD?.email || "Not found"}</span>
        </div>
        <div className='detail'>
            <span>PAN</span>
            <span>{props?.data?.FD?.pan || "Not found"}</span>
        </div>
        <div className='detail'>
            <span>Aadhar</span>
            <span>{props?.data?.FD?.aadhar || "Not found"}</span>
        </div>
        <div className='detail'>
            <span>Document Photo</span>
            <span>{props?.data?.Doc?.photo || "Not found"}</span>
        </div>
        <div className='detail'>
            <span>Document File</span>
            <span>{props?.data?.Doc?.file || "Not found"}</span>
        </div>
    </div>
  )
}

export default SubmitDetails