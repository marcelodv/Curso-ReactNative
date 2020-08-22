import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import GlobalStyles from '../GlobalStyles'

export default ({ initial, step }) => {
    // const [valor, funçaoAlteraValor] = useState(valorInicial)
    const [number, setNumber] =  useState(initial)

    const inc = () => {
        setNumber(number + step)
    }

    const dec = () => {
        setNumber(number - step)
    }

    return (
            <View>
                <Text style={GlobalStyles.txtH1}>Contador: {number} </Text>
                <Button title="+" onPress={inc} />
                <Button title="-" onPress={dec} />
            </View>
    )
}