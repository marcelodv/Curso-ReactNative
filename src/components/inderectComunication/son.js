import React from 'react';
import { Button } from 'react-native';

const inderectComunication = (props) => {

    function getNumber(min, max) {
        const fator = max - min + 1
        return parseInt(Math.random() * fator) + 1
    } 

    return (
        <Button 
            title="Executar"
            onPress={function() {
                const n = getNumber(props.min, props.max)
                props.funcao(n, 'O valor é: ')
            }}
        />
    );
}

export default inderectComunication;