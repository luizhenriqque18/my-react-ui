import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from './theme';


export default function ThemeLayout({ children }) {

    return(
        <ThemeProvider theme={theme}>
            { children }
        </ThemeProvider>
    )
}

ThemeLayout.defaultProps = {
    children: null
}

ThemeLayout.propTypes = {
    children: PropTypes.node,
}