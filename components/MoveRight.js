import React from 'react';
import { View, StyleSheet } from 'react-native';


const MoveRight = () => {
    return (
        <View style={styles.background}>
            <View style={styles.top} >
                <View style={styles.bottom} />
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    background:{
        height: 80,
        width: 50,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row-reverse'
    },
    top: {
        height: 20,
        width: 3,
        backgroundColor: 'white',
        transform: [{ rotate: '-45deg' }]
    },
    bottom: {
        height: 20,
        width: 3,
        backgroundColor: 'white',
        marginTop: 9,
        marginLeft: -9,
        transform: [{ rotate: '-90deg' }],
    }
});

export default MoveRight;