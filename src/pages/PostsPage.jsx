import React, {useState, useEffect} from 'react';
import PostsList from '../components/PostsList';
import {usePosts} from '../hooks/usePosts';
import PostService from '../API/PostService';
import {useFetching} from '../hooks/useFetching';
import {getPageCount} from '../utils/pages';
import Pagination from '../components/Pagination';
import Modal from '../components/modal/Modal';
import PostForm from '../components/PostForm';
import PostsFilter from '../components/PostsFilter';
import {Button} from "@mui/material";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [fetchPosts, isPostsLoading, postErroor] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    })

    useEffect(() => {
        fetchPosts();
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page);
    }

    return (
        <>
            <Button
                onClick={() => setModal(true)}
                sx={{
                    marginLeft: '100px'
                }}
            >
                New post
            </Button>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </Modal>
            <PostsFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostsList remove={removePost} posts={sortedAndSearchedPosts}/>
            <Pagination
                changePage={changePage}
                page={page}
                totalPages={totalPages}
            />
        </>
    );
};

export default PostsPage;