import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Header } from './components/common';
import FormLogin from './components/LoginForm';

import firebase from 'firebase'
class App extends Component {

    state = { onLoggedIn: false };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBXpPjDs7UNp2ydi2vAr9VHmbtepq1Xs-c",
            authDomain: "react-native-2b57f.firebaseapp.com",
            databaseURL: "https://react-native-2b57f.firebaseio.com",
            projectId: "react-native-2b57f",
            storageBucket: "",
            messagingSenderId: "1033782716030"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    onLoggedIn: true
                })
            } else {
                this.setState({
                    onLoggedIn: false
                })
            }
        })
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <FormLogin />
            </View>
        );
    }
}

export default App;
