import React, { useState } from 'react';
import { Text } from 'react-native';
import GlobalStyles from '../GlobalStyles'

import Son from './son'

const inderectComunication = (props) => {
    const [num, setNum] = useState(0)
    const [txt, setTxt] = useState('')

    function showValue(number, txt) {
        setNum(number)
        setTxt(txt)
    }

    return (
        <>
            <Text style={GlobalStyles.txtH1}>
                {txt}{num}
            </Text>
            <Son 
            min={1}
            max={60}
            funcao={showValue}
            />
        </>
    );
}

export default inderectComunication;