import React, { useState } from 'react'
import NavBar from './NavBar/nav.component'
import Form from './Form/form.component'
import Footer from './Footer/footer.component'

// CSS
import './page.component.css'
import SubmitDetails from './Form/Submit/submit.component'

const Page = () => {

    const [formStage, setFormStage] = useState(0)
    const [submit, setSubmit] = useState(false)

    const handleFormStage = (value) => {
        setFormStage(value)
    }
    const handleSubmit = (value) => {
        setSubmit(value)
    }

    const [data, setData] = useState({
        PD: {
            name: "",
            phone: "",
            email: ""
        },
        FD: {
            pan: "",
            aadhar: ""
        },
        Doc: {
            photo: "",
            file: "",
        }
    })

    const handler = (value, type) => {
        if (type === 'name') {
            setData((prev) => ({ ...prev, PD: { ...prev.PD, name: value } }))
        }
        else if (type === 'phone') {
            setData((prev) => ({ ...prev, PD: { ...prev.PD, phone: value } }))
        }
        else if (type === 'email') {
            setData((prev) => ({ ...prev, PD: { ...prev.PD, email: value } }))
        }
        else if (type === 'pan') {
            setData((prev) => ({ ...prev, FD: { ...prev.FD, pan: value } }))
        }
        else if (type === 'aadhar') {
            console.log('value', value)
            setData((prev) => ({ ...prev, FD: { ...prev.FD, aadhar: value } }))
        }
        else if (type === 'photo') {
            console.log('value', value)
            setData((prev) => ({ ...prev, Doc: { ...prev.Doc, photo: value } }))
        }
        else if (type === 'file') {
            setData((prev) => ({ ...prev, Doc: { ...prev.Doc, file: value } }))
        }
    }

    // console.log('data', data)
    // console.log('submit', data)

    return (
        <div className='page'>
            <div className='nav'>
                <NavBar />
            </div>
            <div className='form'>
                {submit ?
                    <SubmitDetails data={data} />
                    :
                    <Form formStage={formStage} data={data} handler={handler} handleFormStage={handleFormStage} handleSubmit={handleSubmit} />
                }
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Page