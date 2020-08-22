import React from 'react';
import { View, Text, Button, useState } from 'react-native';
import GlobalStyles from '../GlobalStyles'

export default (props) => {
    let numero = 0

    return (
            <View>
                <Text>Contador: 0</Text>
                <Button title="+" />
                <Button title="-" />
            </View>
    )
}