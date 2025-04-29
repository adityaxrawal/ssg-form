import React from 'react'
import Stage1 from './Stage1/stage1.component'
import Stage2 from './Stage2/stage2.component'
import Stage3 from './Stage3/stage3.component'

// CSS
import './form.component.css'

const Form = (props) => {
    return (
        <div className='form-container'>
            <div className='form-details'>
                {
                    props.formStage === 0 && <Stage1 PD={props.data.PD} handler={props.handler} />
                }
                {
                    props.formStage === 1 && <Stage2 FD={props.data.FD} handler={props.handler} />
                }
                {
                    props.formStage === 2 && <Stage3 Doc={props.data.Doc} handler={props.handler} />
                }
            </div>
            <div className='form-buttons'>
                {props.formStage !== 0 && <button className='button' onClick={() => { props.handleFormStage(props.formStage - 1) }}>Back</button>}
                <button button className='button' onClick={() => {
                    if (props.formStage !== 2) {
                        props.handleFormStage(props.formStage + 1)
                    }
                    else {
                        props.handleSubmit(true)
                    }
                }}
                >
                    {props.formStage < 2 ? "Next" : "Submit"}
                </button>

            </div>
        </div >
    )
}

export default Form