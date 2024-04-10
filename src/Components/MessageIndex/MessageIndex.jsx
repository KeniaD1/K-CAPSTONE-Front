import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import './MessageIndex.css'





const API = import.meta.env.VITE_APP_API_URL




const MessageIndex = () => {

    const [allMessages, setAllMessages] = useState([])

    function getAllMessages() {
        axios.get(`${API}/messages`).then(res => {
            setAllMessages(res.data)
        })
            .catch(error => console.log(error))

    }

    useEffect(() => {
        getAllMessages()
    }, []);
    console.log(allMessages)


    return (
<>

        <div className='message-index'>
            {
                allMessages.map(mObj =>
                    <Link to={`/messages/${mObj.id}`} className='message'>

                        <h2> {mObj.name}</h2>
                        <span>{mObj.class}</span>
                        
                      
                        <p className='date'>{mObj.post_date}</p>
                        <p className='time'> {mObj.post_time}</p>
                        <p>{mObj.posted_message}</p>
                   
                        </Link>

                )
            }

<div class="sidebar-index">
        <h2>Resources</h2>
        <ul>
            <li><a href="https://www.schools.nyc.gov/">NYC Public Schools </a></li>
            <li><a href="https://www.nysed.gov/">NYS Dept. Education</a></li>
            <li><a href="https://www.schools.nyc.gov/calendar/2023-2024-school-year-calendar">Calendar</a></li>
            <li><a href="https://www.schools.nyc.gov/learning/programs">Programs</a></li>
        </ul>
    </div>

        </div>
        </>
    );
};

export default MessageIndex;