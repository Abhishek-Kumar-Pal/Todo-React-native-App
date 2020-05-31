import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/Colors';

const Header = props => {
    return (
        <View style={{
            ...styles.headerBase,
            ...Platform.select({
                ios: styles.headerIos,
                android: styles.headerAndroid
            })
        }}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        // paddingTop: 36,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerIos: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },

    headerAndroid: {
        backgroundColor: Colors.primaryNew
    },

    headerTitle: {
        color: Platform.OS === 'ios' ? Colors.primaryNew : 'white',
        fontFamily: 'open-sans-bold',
        fontSize: 22
    }
});

export default Header;