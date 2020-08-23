import React from 'react';
import { View, Text } from 'react-native';
import GlobalStyles from '../GlobalStyles'

import Son from './son.js'

const directComunication = (props) => {
    let x = 13
    let y = 100

    return (
        <>
            <Son a={x} b={y} />
            <Son a={x + 100} b={y + 200} />
        </>
    );
}

export default directComunication;