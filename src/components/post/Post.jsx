import React from 'react';
import {useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Post = (props) => {
    const router = useNavigate();
    return (
        <Card sx={{ maxWidth: 600, marginX: 'auto', marginTop: 3 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.post.title}
                </Typography>
                <Typography variant="body2">
                    {props.post.body}
                </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Button onClick={() => router(`/posts:${props.post.id}`)}>
                    Learn More
                </Button>
                <IconButton
                    onClick={() => props.remove(props.post)}
                    aria-label="delete"
                    color="primary"
                >
                    <DeleteForeverIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Post;