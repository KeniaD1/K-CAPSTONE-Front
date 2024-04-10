import React from 'react';
import "./HomeComponent.css"

const HomeComponent = () => {
    return (
        <>
        <div  className='home-div'>
        <div className='home-sidebar'>
                {/* Sidebar content goes here */}
                <h2>Sidebar</h2>
                <ul>
                    <li>Menu Item 1</li>
                    <li>Menu Item 2</li>
                    <li>Menu Item 3</li>
                    {/* Add more menu items as needed */}
                </ul>
            </div>
            <div className='home-content'>
                <header>
                <h1>Welcome to Parent Connect</h1>
            </header>

            <div className="welcome-message">
                <p>At Parent Connect, we believe in the power of strong partnerships between parents and schools to support every child's educational journey. We're thrilled to welcome you to our online platform designed to enhance communication, engagement, and involvement in your child's education.</p>

                <p>Parent Connect is more than just a tool – it's a bridge that connects you directly to your child's school community. Whether you're looking to stay informed about important updates, connect with teachers, or actively participate in your child's learning experience, our platform provides the resources and support you need.</p>

                <p>With Parent Connect, you can:</p>
                <ul>
                    <li>Stay Informed: Receive real-time updates about your child's academic progress, upcoming events, and school announcements.</li>
                    <li>Engage Collaboratively: Communicate effortlessly with teachers, administrators, and fellow parents to address questions, concerns, and celebrate achievements.</li>
                    <li>Access Resources: Explore a wealth of educational resources and tools to support your child's learning both inside and outside the classroom.</li>
                </ul>

                <p>We invite you to become an active participant in your child's educational journey by joining Parent Connect. Together, we can create a supportive environment where every child thrives.</p>

                </div>

                </div>
                <footer>
              
            </footer>
        </div>
        
        </>
    );
    
};

export default HomeComponent;