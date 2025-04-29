import React from 'react'

const Stage3 = (props) => {
    return (
        <div>
            <div className='pan'>
                <span>Photo</span>
                <input type='file' defaultValue={props.Doc.photo} onChange={(e) => { props.handler(e.target.value, "photo") }} />
            </div>
            <div className='aadhar'>
                <span>File</span>
                <input type='file' defaultValue={props.Doc.file} onChange={(e) => { props.handler(e.target.value, "file") }} />
            </div>
        </div>
    )
}

export default Stage3