import React, {useState} from 'react';
import axios from 'axios';

const Create = () => {
    const [title, setTitle] = useState('');
    const onSubmit = async(event) => {
        event.preventDefault();

        axios.post('http://localhost:4000/posts', {
            title: title
        })
        .then(res => console.log(res.data));
        setTitle('');
    };
    return (
        <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input value ={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" id="title" placeholder="Title" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    );
};

export default Create;