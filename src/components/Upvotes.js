import React from 'react';

const Upvotes = ({ articleName, upvotes, setArticleInfo }) => {

    const upvoteArticle= async() => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post',
        });
        const body = await result.json();
        setArticleInfo(body);
    }
    return (
        <div id="upvotes-div">
            <button onClick={() => upvoteArticle()}><i class="fas fa-thumbs-up"></i> Like</button>
            <p>This post has been upvoted {upvotes} times </p>
        </div>

        );  
}
export default Upvotes;