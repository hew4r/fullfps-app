import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@material-ui/core';

const AppNavBar = props => {

    const handleNavBar = () => {

        props.history.push('/ps4/games');


    }

    return (

        <AppBar position="static">
            <Toolbar>

                <Button color="inherit" onClick={() => handleNavBar()} >PS4</Button>
                <Button color="inherit" onClick={() => handleNavBar()} >XBOX</Button>
                <Button color="inherit" onClick={() => handleNavBar()} >NINTENDO</Button>
                <Button color="inherit" onClick={() => handleNavBar()} >PC</Button>

            </Toolbar>
        </AppBar>

    );
};

AppNavBar.propTypes = {
    
};

export default withRouter(AppNavBar);