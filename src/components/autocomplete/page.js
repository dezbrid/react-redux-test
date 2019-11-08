import React from 'react';
import {InputBase,Paper,MenuItem} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './style.css';

export default function page() {

    return (
        <div className="main-container">
            <div className="container-icon">
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                value={text}
                style={{ width: '100%' }}
                onChange={(event) => {
                    const newText = event.target.value;

                    onChangeText(newText);

                    if (!isOpen && newText) {
                        this.setState({ isOpen: true });
                    } else if (isOpen && !newText) {
                        this.setState({ isOpen: false });
                    }
                }}

                onFocus={() => {
                    if (text) {
                        this.setState({ isOpen: true });
                    }
                }}
                onKeyPress={(event) => {

                    if (event.key === 'Enter' && text) {
                        onChangeSelection(text);
                    }
                }}
            />
            {isOpen &&
                <Paper className="container-results" square>
                    {suggestions.map(suggestion =>
                        <MenuItem
                            key={suggestion.id}
                            component="div"
                            onClick={() => {

                                onChangeSelection(suggestion.title);
                                this.setState({ isOpen: false });
                            }}
                        >
                            {suggestion.title}
                        </MenuItem>)}
                </Paper>}
        </div>


    );

}
