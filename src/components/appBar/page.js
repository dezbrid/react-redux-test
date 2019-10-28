import React from 'react';
import {AppBar,Toolbar,Typography} from '@material-ui/core'; 
import {AccountCircle} from '@material-ui/icons';

function Page(props){
    return(
        <AppBar position="static">
            <Toolbar className="appbar">
                <Typography variant="h6" color ="inherit">
                    Programax
                </Typography>
                <AccountCircle/>
            </Toolbar>
        </AppBar>

    );
}
export default Page;
