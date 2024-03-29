import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './MessageShow.css'


const API = import.meta.env.VITE_APP_API_URL

const MessageShow = () => {

    const [messageInfo, setMessageInfo] = useState({})

    const { id } = useParams()

    const navigate = useNavigate()

    function handleDelete() {
        axios.delete(`${API}/messages/${id}`)
            .then(res => navigate('/messages'))
            .catch(err => console.log(err))
    }
    //middleware

    function confirmDelete() {
        if (window.confirm('Are you sure you want to delete this message?')) {
            handleDelete();
        }
    }

    useEffect(() => {
        axios.get(`${API}/messages/${id}`)
            .then(res => setMessageInfo(res.data))
            .catch(error => console.log(error))
    }, [id])


    return (
        <div className='message-show-container'>
            <div className='messageShow'>

                <h1> {messageInfo.name}</h1>


                <p>{messageInfo.post_date}</p>
                <p>{messageInfo.post_time}</p>
                <p>{messageInfo.posted_message}</p>

            </div>

            <aside className='messageShow-button'>
                <Link to={`/messages/${id}/edit`}>
                    EDIT
                </Link>
                <button onClick={confirmDelete}>
                   🗑️
                </button >
            </aside>
        </div>
    );
};

export default MessageShow;