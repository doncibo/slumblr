import React from 'react';
import { useSelector } from 'react-redux';
import CreatePost from './CreatePost'
import Post from './Post'
import '../../style/content.css'
// import AudioPlay from '../components/AudioPlayer'
// import { fetchPosts } from '../store/posts';
// import Button from '@material-ui/core/Button';
// import { Route } from 'react-router-dom';


function Comp({posts}){
    // const posts = useSelector(state => state.posts)
    return(
        <div className='content-wrap' >
            <div className='contentBanner' >
                <div className='left-create'>                       
                </div>
                <div className='right-create'>
                    <CreatePost />
                </div>
            </div>
            <div className='contentPosts'>
                {posts.map(post => (
                    <div id="posts" >
                        <div id='left-post' >
                        </div>
                        <div id='right-post'>
                            <Post post={post} />
                                 {/* <div id='post-img'>{post.user}
                                     <img id={`post-img-${post.id}`}
                                //         src={post.url}
                                //         url={post.url}
                                //         alt=''      
                                //     /> {post.description}
                                // </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comp
