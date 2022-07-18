import React, {useState} from 'react';

const PostForm = ({create}) => {
    const [post, setPost] = useState({
        title: '',
        body: '',
    });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now(),
        };
        create(newPost);
        setPost({title: '', body: ''})
    }


    return (
        <form style={{minWidth: '600px', display: 'flex', flexDirection: 'column'}}>
            <input
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type='text'
                placeholder='Заголовок'
            />
            <input
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type='text'
                placeholder='Описание'
            />
            <button onClick={addNewPost}>Создать</button>
        </form>
    );
};

export default PostForm;