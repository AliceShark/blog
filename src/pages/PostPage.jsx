import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import Typography from '@mui/material/Typography';
import {Box} from '@mui/material';
import Paper from '@mui/material/Paper';

import Comment from '../components/Comment';

const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + params.id.slice(1))
            .then(res => res.json())
            .then(data => setPost(data))
    });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + params.id.slice(1) + '/comments')
            .then(res => res.json())
            .then(data => setComments(data))
    });

    return (
        <Box sx={{maxWidth: '800px', mx: 'auto', my: 2}}>
            <Typography variant="h2" component="h1">
                {post.title}
            </Typography>
            <p style={{textAlign: 'center', marginBottom: '50px'}}>{post.body}</p>
            {comments.map((comment) =>
                    <Comment key={comment.id} comment={comment} />
                )
            }
        </Box>
    );
};

export default PostPage;