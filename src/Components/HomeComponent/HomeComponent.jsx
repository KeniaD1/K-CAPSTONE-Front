import React from 'react';
import "./HomeComponent.css"

const HomeComponent = () => {
    return (
        <>
        <div  className='home-div'>
        {/* <div className='home-sidebar'>
               
                <h2>Resources</h2>
        <ul>
            <li><a href="https://www.schools.nyc.gov/">NYC Public Schools </a></li>
            <li><a href="https://www.nysed.gov/">NYS Dept. Education</a></li>
            <li><a href="https://www.schools.nyc.gov/calendar/2023-2024-school-year-calendar">Calendar</a></li>
            <li><a href="https://www.schools.nyc.gov/learning/programs">Programs</a></li>
        // </ul> 
           </div> */}
            <div className='home-content'>
                <header>
                <h1>Welcome to Parent Connect</h1>
            </header>

            <div className="welcome-message">
                <div id='p-tags' style={{display: "flex", border: "1px solid coral"}}>
                <p>At Parent Connect, we believe in the power of strong partnerships between parents and schools to support every child's educational journey. We're thrilled to welcome you to our online platform designed to enhance communication, engagement, and involvement in your child's education.</p>

                <p>Parent Connect is more than just a tool – it's a bridge that connects you directly to your child's school community. Whether you're looking to stay informed about important updates, connect with teachers, or actively participate in your child's learning experience, our platform provides the resources and support you need.</p>
                </div>
                <h3 className='info'>With Parent Connect, you can:</h3>
                <ul className='card-list'>
                    <li className='card'>Stay Informed: Receive real-time updates about your child's academic progress, upcoming events, and school announcements.</li>
                    <li className='card'>Engage Collaboratively: Communicate effortlessly with teachers, administrators, and fellow parents to address questions, concerns, and celebrate achievements.</li>
                    <li className='card'>Access Resources: Explore a wealth of educational resources and tools to support your child's learning both inside and outside the classroom.</li>
                </ul>

                <p>We invite you to become an active participant in your child's educational journey by joining Parent Connect. Together, we can create a supportive environment where every child thrives.</p>

                </div>

                </div>
                <footer className='footer'>
                <h2>Resources</h2>
        <ul className='footer-cards'>
            <li className='cards'> <a href="https://www.schools.nyc.gov/" target="_blank">NYC Public Schools </a></li>
            <li className='cards'> <a href="https://www.nysed.gov/"target="_blank">NYS Dept. Education</a></li>
            <li className='cards'> <a href="https://www.schools.nyc.gov/calendar/2023-2024-school-year-calendar"target="_blank">Calendar</a></li>
            <li className='cards'> <a href="https://www.schools.nyc.gov/learning/programs"target="_blank">Programs</a></li>
        </ul>
            </footer>
        </div>
        
        </>
    );
    
};

export default HomeComponent;