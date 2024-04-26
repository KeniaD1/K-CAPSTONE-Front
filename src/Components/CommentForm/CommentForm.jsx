import React from 'react';
import { useState } from 'react';
import './CommentForm.css'

import axios from 'axios';

const API = import.meta.env.VITE_APP_API_URL

const CommentForm = ({ messageId, getAllMessages }) => {
    const [addComments, setAddComments] = useState(false)

    const [commentForm, setCommentForm] = useState({ user_name: "", comment_text: "" })


    const handleSubmitComment = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`${API}/messages/${messageId}/comments`, commentForm);
            console.log(commentForm)
            // Refresh messages after adding a comment
            getAllMessages();
            setAddComments(false)
            setCommentForm({ user_name: "", comment_text: "" })
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    const handleTextInput = (event) => {
        const value = event.target.value
        const keyValue = event.target.name
        setCommentForm({
            ...commentForm, [keyValue]: value
        })
    }

    return (
        <div className='comment-form'>
            <button onClick={() => setAddComments(!addComments)}>Add Comment</button>
            {addComments &&
                <div className='comment-form'>

                    <form onSubmit={(event) => handleSubmitComment(event)}>
                        <input onChange={handleTextInput} type='text' value={commentForm.user_name} name='user_name' placeholder='Your Name' required />
                        <textarea onChange={handleTextInput} name='comment_text' value={commentForm.comment_text} placeholder='Your Comment' required />
                        <input type='submit' value='Post Comment' />
                    </form>
                </div>
            }
        </div>
    );
};

export default CommentForm;