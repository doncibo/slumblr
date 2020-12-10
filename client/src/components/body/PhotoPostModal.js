import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../store/posts';
import { Redirect } from 'react-router-dom';
import { Container, Button } from '@material-ui/core'
import AWSUpload from './awsUpload'
import '../../style/textform.css'

function PhotoModal() {
    const [userId, setUserId] = useState('')
    const [url, setPhotoUrl] = useState('')
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [loading, setLoading] = useState(false)
    const currentUserId = useSelector(state => state.auth.id);
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        dispatch(createPost(title, url, description, currentUserId))
        setLoading(false)
        window.location.reload()
    }

    // if(currentUserId) return <Redirect to="/" />;

    const body = (
        <>
            <div className="text-form-container">
                <Container className="create-text-form" >
                    <form onSubmit={handleSubmit}>
                        <label>
                            <h1 >
                                <AWSUpload setPhotoUrl={setPhotoUrl} />
                            </h1>
                        </label>
                        <label>
                            <h1 >
                                <textarea 
                                    id="title-input"
                                    type="text" 
                                    name="title" 
                                    value={title} 
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder="Title" 
                                />
                            </h1>
                        </label>
                        <label>
                            <h1 >
                                <textarea 
                                    id="url-input"
                                    type="text" 
                                    name="url" 
                                    value={url} 
                                    // onChange={e => setUrl(e.target.value)}
                                    placeholder="Url" 
                                    hidden
                                />
                            </h1>
                        </label>
                        <label>
                            <textarea 
                                id="description-input"
                                type="text" 
                                name="description" 
                                value={description} 
                                onChange={e => setDescription(e.target.value)}
                                placeholder="Enter description" 
                            />
                        </label>
                        <label>
                            <input 
                                id="user-id"
                                type="text" 
                                name="userId" 
                                value={userId}
                                onChange={e => setUserId(currentUserId)}
                                hidden="true"
                            />
                        </label>
                        <Button id="text-post-button" type="submit" onClick={handleSubmit}>Post</Button>
                    </form>
                </Container>
            </div>
            
        </>
    )

    return body;
};

export default PhotoModal;