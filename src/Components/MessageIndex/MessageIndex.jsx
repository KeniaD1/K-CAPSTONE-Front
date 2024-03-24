import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios"





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


        <div className='message-index'>
            {
                allMessages.map(mObj => (
                    <>
                    <h2> {mObj.name}</h2>
                    <p>{mObj.post_date}</p>
                    <p>{mObj.post_time}</p>
                    <p>{mObj.posted_message}</p>
                    </>
                    //new Date()
                ))
            }

        </div>
    );
};

export default MessageIndex;