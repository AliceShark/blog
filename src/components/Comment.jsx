import React from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const style = {
    boxSizing: 'border-box',
    maxWidth: 600,
    margin: '0 auto 20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: 8,
}

const Comment = ({comment}) => {
    return (
        <Paper elevation={3} style={style}>
            <a href='#'>{comment.email}</a>
            <Typography variant="h6" component="h6">{comment.name}</Typography>
            <p>{comment.body}</p>
        </Paper>
    );
};

export default Comment;