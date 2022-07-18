import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';
import ErrorPage from './pages/errorPage/ErrorPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<HomePage />} exact />
                    <Route path='/about' element={<AboutPage />} exact />
                    <Route path='/posts' element={<PostsPage />} exact />
                    <Route path='/posts:id' element={<PostPage />} exact />

                    <Route path='*' element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
