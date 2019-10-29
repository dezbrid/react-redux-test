import React from 'react';
import {AppBar,Toolbar,Typography} from '@material-ui/core'; 
import {AccountCircle} from '@material-ui/icons';
import Autocomplete from '../autocomplete';

function Page(props){
    return(
        <AppBar position="static">
            <Toolbar className="appbar">
                <Typography variant="h6" color ="inherit">
                    Titulo
                </Typography>
                <Autocomplete
                text={'react'}
                suggestions={[]}
                onChangeText={(text)=>{}}
                onChangeSelection={(text)=>{}}
                />

                <AccountCircle/>
            </Toolbar>
        </AppBar>

    );
}
export default Page;
