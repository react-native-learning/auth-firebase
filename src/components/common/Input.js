import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label, value, handleOnChangeText }) => {
    return (
        <View>
            <Text >{label}</Text>
            <TextInput
                value={value}
                onChangeText={handleOnChangeText}
                style={{ height: 40}}
            />
        </View>
    );
};

export { Input };
