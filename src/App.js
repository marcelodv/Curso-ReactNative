import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

// Importação dos Components
import Primeiro from './components/Primeiro'
// Multiplos Components ( Não recomendado )
import Oficial, { Comp1, Comp2 } from './components/Multi'

export default  () => {
    return (
        <>  
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <View style={styles.container} >
                <Primeiro />
                <Oficial />
                <Comp1 />
                <Comp2 />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})