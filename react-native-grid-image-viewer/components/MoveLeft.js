import React from 'react';
import { View, StyleSheet } from 'react-native';


const MoveLeft = () => {
    return (
        <View>
            <View style={styles.top} >
            <View style={styles.bottom} />
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    top: {
        height: 20,
        width: 3,
        backgroundColor: 'white',
        transform: [{ rotate: '45deg' }]
    },
    bottom: {
        height: 20,
        width: 3,
        backgroundColor: 'white',
        marginTop:9,
        marginLeft:9,
        transform: [{ rotate: '-90deg' }],
    }
});

export default MoveLeft;