import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Grid} from '@mui/material';

import img from '../assets/image.png';

const Header = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div
            style={{
                width: '100%',
                backgroundColor: '#ffffff',
            }}
        >
            <Grid
                container
                sx={{
                    boxSizing: 'border-box',
                    maxWidth: '800px',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mx: 'auto',
                    padding: 1,
                    backgroundColor: '#ffffff',
                }}
            >
                <Link to='/'>
                    <img src={img} style={{maxWidth: '100px'}}/>
                </Link>
                <Grid container sx={{maxWidth: '500px', justifyContent: 'end'}}>
                    <Tabs
                        onChange={handleChange}
                        value={value}
                        aria-label="Tabs where each tab needs to be selected manually"
                    >
                        <Tab component={Link} to='/' label="Home" />
                        <Tab component={Link} to='/about' label="About" />
                        <Tab component={Link} to='/posts' label="Posts" />
                    </Tabs>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;