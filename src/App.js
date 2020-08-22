import React from 'react';
import { View, StatusBar } from 'react-native';

import Primeiro from './components/Primeiro'

export default  () => {
    return (
        <>  
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <View>
                <Primeiro />
            </View>
        </>
    );
}
