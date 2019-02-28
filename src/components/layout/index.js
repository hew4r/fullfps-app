import React from 'react';
import App from './../../App';
import { CssBaseline, Grid, Paper, AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import PropTypes from 'prop-types';




const Layout = ({ toolbar }) => {
    return (
        <div className='layout-root'>
            <CssBaseline />
            <Grid container spacing={24}>

                <Grid item xs={12}>
                    <Paper>
                        <AppBar position="static" color="default" className='layout-appbar'>
                            {toolbar}
                        </AppBar>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className='layout-content'>



                    </Paper>
                </Grid>

            </Grid>

        </div>
    );
};

Layout.propTypes = {
    toolbar: PropTypes.element.isRequired,
}

export default Layout;