import React from 'react';
import {AppBar,Toolbar,Typography} from '@material-ui/core'; 
import {AccountCircle} from '@material-ui/icons';
import Autocomplete from '../autocomplete';
import './style.css';

function Page(props){
    const {
        text,
        suggestions,
        onChangeText,
        onChangeSelection
        
    }= props;
    console.log(text)
    return(
        <AppBar position="static">
            <Toolbar className="appbar">
                <Typography variant="h6" color ="inherit">
                    React Redux
                </Typography>
                <Autocomplete
                text={text}
                suggestions={suggestions}
                onChangeText={onChangeText}
                onChangeSelection={onChangeSelection}
                />

                <AccountCircle/>
            </Toolbar>
        </AppBar>

    );
}
export default Page;
