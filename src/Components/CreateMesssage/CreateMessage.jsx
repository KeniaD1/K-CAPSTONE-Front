import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CreateMessage.css'



const API = import.meta.env.VITE_APP_API_URL

const CreateMessage = () => {

    const navigate = useNavigate()

    const { id } = useParams()

    const [newMessage, setNewMessage] = useState({
        name: "",
        posted_message: "",
        class: ""
    })

    const classes = [
        "Pre-K",
        "Kindergarten",
        "First-Grade",
        "Second-Grade",
        'Third-Grade'
    ]

    //hande text 

    function handleText(event) {
        const id = event.target.id
        const value = event.target.value

        setNewMessage((currentState) => {
            return {
                ...currentState,
                [id]: value
            }
        })

    }

    //submit 

    function handleSubmit(event) {
        event.preventDefault()

        axios.post(`${API}/messages`, newMessage)
            .then(res => navigate(`/messages/${res.data.id}`))
            .catch(err => console.log(err))
    }

    //edit 

    function handleEdit(event) {
        event.preventDefault()
        axios.put(`${API}/messages/${id}`,
            newMessage
        )
            .then(res => navigate(`/messages/${id}`))
            .catch(err => console.log(err))

    }

    useEffect(() => {
        if (id) {
            axios.get(`${API}/messages/${id}`)
                .then(res => setNewMessage(res.data))
                .catch(err => console.log(err))
        }
    }, [])

    return (
        <form className='message-form' onSubmit={(event) => {
            id ? handleEdit(event)
                : handleSubmit(event)
        }}>
            {/* name */}
            <label htmlFor='name'>
                Parent/Guardian Name :
                <input id="name" type="text" value={newMessage.name} required onChange={(event) => { handleText(event) }} />

            </label>

            {/* Class dropdown */}

            <select value={newMessage.class} onChange={(e) => handleText(e)} id='class'>
                <option value={""}> Select Your Class</option>
                <option value={"Pre-K"}> Pre-K</option>
                <option value={"Kindergarten"}> Kindergarten</option>
                <option value={"First-Grade"}> First-Grade</option>
                <option value={"Second-Grade"}> Second-Grade</option>
                <option value={"Third-Grade"}> Third-Grade</option>
            </select>

{/* Message */}
<label htmlFor='posted_message'>
    Enter Message Here :

    <input id="posted_message" type='text' value={newMessage.posted_message} required onChange={(event) => { handleText(event) }}/>

</label>

<input
                className="formSubmitButton"
                type="submit"
                value={id ? "Edit Message" : "Submit Message"}
            />


        </form>
    );
};

export default CreateMessage;