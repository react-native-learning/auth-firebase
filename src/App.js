import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common'

import firebase from 'firebase'
class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBXpPjDs7UNp2ydi2vAr9VHmbtepq1Xs-c",
            authDomain: "react-native-2b57f.firebaseapp.com",
            databaseURL: "https://react-native-2b57f.firebaseio.com",
            projectId: "react-native-2b57f",
            storageBucket: "",
            messagingSenderId: "1033782716030"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>new App</Text>
            </View>
        );
    }
}

export default App;
