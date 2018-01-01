import React, { Component } from 'react';
import { Button, CardSection, Card, Input, Spinner } from './common';
import { firebase } from '@firebase/app';
import { Text } from 'react-native';

class FormLogin extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onSubmitLogin() {
        console.log('onSubmitLogin', this.state);
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: ''
        })
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication Failed.',
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />
        };
        return (
            <Button handleOnPress={this.onSubmitLogin.bind(this)}>
                Login
            </Button>
        );
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@example.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry={true}
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignItems: 'center',
        color: 'red'
    }
}

export default FormLogin;
