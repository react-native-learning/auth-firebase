import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label, value, handleOnChangeText }) => {

    const { containerStyle, inputStyle, labelStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={handleOnChangeText}
                style={inputStyle}
            />
        </View>
    );
};

const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 5
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 2
    }
}

export { Input };
