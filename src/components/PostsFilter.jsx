import React from 'react';
import {TextField} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const PostsFilter = ({filter, setFilter}) => {
    return (
        <div>
            <TextField
                id="standard-basic"
                label="Search"
                variant="standard"
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Sorting</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Sorting"
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                >
                    <MenuItem value='title'>Name</MenuItem>
                    <MenuItem value='body'>Description</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default PostsFilter;