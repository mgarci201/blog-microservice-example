import React, {useState} from 'react';
import axios from 'axios';

const CommentCreate = ({postId}) => {
    const [content, setContent] = useState('');
    const onSubmit = async(event) => {
        event.preventDefault();

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content: content
        })
        .then(res => console.log(res.data));        
        setContent('');
    };
    // console.log(posts)

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="comment">Comment</label>
                    <input 
                        value={content}
                        type="text"
                        onChange={e => setContent(e.target.value)}
                        className="form-control"
                        placeholder="comment"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default CommentCreate;