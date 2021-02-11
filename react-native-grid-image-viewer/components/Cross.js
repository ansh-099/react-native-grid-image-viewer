import React from 'react';
import { View, StyleSheet } from 'react-native';


const Cross = () => {
    return (
        <View style={styles.background}>
            <View style={styles.left}>
                <View style={styles.right} />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    background:{
        height:60,
        width:60,
        justifyContent:'center',
        alignItems:'center',
    },
    left: {
        height: 25,
        width: 3,
        backgroundColor: 'white',
        transform: [{ rotate: '45deg' }]
    },
    right: {
        height: 25,
        width: 3,
        backgroundColor: 'white',
        transform: [{ rotate: '90deg' }]
    }
});

export default Cross;