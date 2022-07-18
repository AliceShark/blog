import React from 'react';
import {Link} from 'react-router-dom';
import cl from './ErrorPage.module.css';

const ErrorPage = () => {
    return (
        <div className={cl.cloak}>
            <h1>404</h1>
            <div className={cl.cloak__wrapper}>
                <div className={cl.cloak__container}>
                    <div className={cl.cloak__content}></div>
                </div>
            </div>
            <div className={cl.cloak__info}>
                <h2>We can't find that page</h2>
                <p>We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.
                </p>
                <Link to='/'>Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;