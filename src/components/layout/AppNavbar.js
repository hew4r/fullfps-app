import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Button} from "@material-ui/core";
import { sections, platforms } from "../../constants/layout";

const handleClick = () => {

}


const AppNavbar = ({ sections, platforms }) => {


    return (

        <AppBar>
            <Toolbar>

            </Toolbar>
        </AppBar>

    );
};

AppNavbar.propTypes = {

  sections: PropTypes.array.isRequired,


};

export default AppNavbar;
