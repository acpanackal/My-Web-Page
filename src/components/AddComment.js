import React, { useState } from 'react';

const AddComment = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
    }

    return (
        <div id="add-comment-div">
            <h3>Add a Comment</h3>
            <label>
                Name:
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
            </label>
            <label>
                Comment:
                <textarea rows="4" cols="40" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
            </label>
            <button onClick={() => addComment()}>Comment</button>
        </div>
    );
}

export default AddComment;