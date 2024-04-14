import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import './MessageIndex.css'





const API = import.meta.env.VITE_APP_API_URL


const sampleParentingTips = [
    "Spend quality time with your children every day.",
    "Listen to your children and validate their feelings.",
    "Set clear and consistent boundaries.",
    "Encourage independence and responsibility.",
    "Be a positive role model for your children.",
    "Praise and encourage your children's efforts and achievements.",
    "Communicate openly and honestly with your children.",
    "Teach problem-solving and conflict resolution skills.",
    "Show affection and express love regularly.",
    "Take care of your own physical and emotional well-being.",
];

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


    const [resources, setResources] = useState(sampleParentingTips);
    // // console.log(typeof resources)

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const options = {
    //             method: 'GET',
    //             url: 'https://duckduckgo10.p.rapidapi.com/search',
    //             params: {
    //                 term: 'parental education',
    //                 safeSearch: 'off',
    //                 region: 'wt-wt'
    //             },
    //             headers: {
    //                 'X-RapidAPI-Key': '425a552e87msh57e76bc9bc96742p1eed6bjsnc355442ae696',
    //                 'X-RapidAPI-Host': 'duckduckgo10.p.rapidapi.com'
    //             }
    //         };

    //         try {
    //             const response = await axios.request(options);
    //             setResources(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <>

            <div className='message-index'>
                {
                    allMessages.map(mObj =>
                        <Link to={`/messages/${mObj.id}`} className='message'>

                            <h2> {mObj.name}</h2>
                            <span> Class : {mObj.class} </span>


                            <p className='date'>{mObj.post_date}</p>
                            <p className='time'> {mObj.post_time}</p>
                            <p>{mObj.posted_message}</p>

                        </Link>

                    )
                }
                <div className="sidebar-index">
                    <h2>Parenting Tips</h2>
                    <ul>
                        {/* {console.log(resources)}
                {Object.keys (resources).map((key, index) => (
                    <li key={index}>
                        <a href={resources[key].url}>{resources[key].title}</a>
                    </li>
                ))} */}
                        {resources.map((tip, index) => (
                            <li key={index}>
                                {tip}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <div class="sidebar-index">
        <h2>Resources</h2>
        <ul>
            <li><a href="https://www.schools.nyc.gov/">NYC Public Schools </a></li>
            <li><a href="https://www.nysed.gov/">NYS Dept. Education</a></li>
            <li><a href="https://www.schools.nyc.gov/calendar/2023-2024-school-year-calendar">Calendar</a></li>
            <li><a href="https://www.schools.nyc.gov/learning/programs">Programs</a></li>
        </ul>
    </div>  */}

            </div>
        </>
    );
};

export default MessageIndex;