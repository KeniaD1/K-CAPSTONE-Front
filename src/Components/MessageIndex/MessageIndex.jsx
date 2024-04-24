import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import './MessageIndex.css'





const API = import.meta.env.VITE_APP_API_URL


const sampleNews = [
    {
        title: "Severna Park High School, Middle School, on lockdown due to threat of possible violence",
        link: "https://www.cbsnews.com/baltimore/news/severna-park-high-school-middle-school-on-lockdown-due-to-threat-of-possible-violence/",
        photo_url: "data:image/jpeg;base64,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",
        published_datetime_utc: "2024-04-23T14:24:32.000Z"
    },
    {
        title: "Indiana school becomes first in state to move to 4-day school week",
        link: "https://www.nbcchicago.com/news/local/indiana-school-becomes-first-in-state-to-move-to-4-day-school-week/3417278/",
        photo_url: "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/436368178_965361725375099_1290302764439065631_n.jpg?stp=dst-jpg_p960x960&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GNp4faA62lYAb7TKQsu&_nc_ht=scontent-lga3-2.xx&edm=AGnjaloEAAAA&oh=00_AfCzxJCKcve9c-dLAgpKBxaFUrzFRbsBKLDFN9YNNAQIJw&oe=662D8E52",
        published_datetime_utc: "2024-04-23T02:09:25.000Z"
    },
    {
        title: "Eric Adams retains control over NYC schools, after push from Hochul",
        link: "https://www.chalkbeat.org/newyork/2024/04/20/ny-lawmakers-governor-hochul-extend-mayoral-control-in-budget-deal/",
        photo_url: "https://www.chalkbeat.org/resizer/v2/UTBMYF4DABGORABR2WHNUJDCVY.jpg?smart=true&auth=915426dc23d072124fc32faab18cc15eafc8849c5bdaadf31dec16ceb736d32d&width=1600&height=1066",
        published_datetime_utc: "2024-04-20T19:38:00.000Z"
    }
];

const MessageIndex = () => {

    const [allMessages, setAllMessages] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [searchedMessages, setSearchedMessages] = useState([]);
    // const [resources, setResources] = useState([]);


    function getAllMessages() {
        axios.get(`${API}/messages`).then(res => {
            setAllMessages(res.data)
        })
            .catch(error => console.log(error))

    }

    // useEffect(() => {
    //     getAllMessages()
    // }, []);
    // console.log(allMessages)


    const [resources, setResources] = useState(sampleNews);

    // const axios = require('axios');
    // async function  fetchData(){
    //     const options = {
    //       method: 'GET',
    //       url: 'https://google-news13.p.rapidapi.com/latest',
    //       params: {lr: 'en-US'},
    //       headers: {
    //         'X-RapidAPI-Key': '425a552e87msh57e76bc9bc96742p1eed6bjsnc355442ae696',
    //         'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
    //       }
    //     };

    //     try {
    //         const response = await axios.request(options);
    //         // console.log(response.data);
    //         setResources(response.data)
    //         console.log(response.data)

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // Function to handle search input change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    // Function to handle search form submission
    const handleSearchSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Filter messages based on search term
        const filteredMessages = allMessages.filter(message =>
            message.name.toLowerCase().includes(searchTerm.toLowerCase()) || // Filter by message name
            message.posted_message.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by message content
        );
        setSearchedMessages(filteredMessages); // Set the filtered messages to display
    };

    useEffect(() => {
        getAllMessages(); // Fetch messages on component mount
        // fetchData(); // Fetch parenting tips on component mount
    }, []);

    // Filter messages based on search term
    const filteredMessages = allMessages.filter(message => {
        // If search term is empty, render all messages
        if (!searchTerm) {
            return true;
        }
        // Otherwise, filter by search term
        return (
            message.name.toLowerCase().includes(searchTerm.toLowerCase()) || // Filter by message name
            message.posted_message.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by message content
        );
    });
    return (
        <>
            <div className='search-bar'>
            <form onSubmit={handleSearchSubmit}>
                <input
            
                    type='text'
                    placeholder='Search messages...'
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button className="search-btn"type="submit">Search</button>
                </form>
            </div>
            <div className='message-index'>
                {
                   ( searchTerm === '' ? allMessages : searchedMessages).map(mObj =>
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
                    <h2>Recent News</h2>
                    <ul>

                        {resources.map((tip, index) => (
                            <li key={index}>
                                {tip.title}
                                <img className="side-photo" src={tip.photo_url} />
                                <a className="click" href={tip.link} target="_blank">Click More </a>
                            </li>

                        ))}
                    </ul>
                </div>

            </div>
        </>
    );
};

export default MessageIndex;