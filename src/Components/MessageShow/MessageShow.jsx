import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
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
                <span className='class'>  Class :  <span className='class-dets'>{messageInfo.class}</span> </span>

                <p className="messageShow-datetime">
                    <span className='date-show'>{messageInfo.post_date}</span>
                    <span className='time-show'>Sent : {messageInfo.post_time}</span>
                </p>
                <p className='messages'>{messageInfo.posted_message}</p>
                <div className='comments-show'>
                    {/* <h3>Comments</h3> */}

                    {/* <li>{messageInfo.comments.comment_text}</li> */}
                </div>

            </div>


            <aside className='messageShow-button'>
                <button onClick={() => navigate(`/messages/${id}/edit`)} className=' edit-button'>
                    EDIT <FaRegEdit />
                    
                </button>
                <button onClick={confirmDelete} className='delete-button'>
                    DELETE <AiOutlineDelete />
                    
                </button >
            </aside>
        </div>
    );
};

export default MessageShow;