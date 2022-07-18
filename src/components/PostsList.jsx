import React from 'react';
import Post from './post/Post';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const PostsList = ({posts, remove}) => {
    return (
        <>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <Post
                            number={index + 1}
                            post={post}
                            remove={remove}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </>
    );
};

export default PostsList;