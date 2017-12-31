import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, CardSection, Card } from './common';

class FormLogin extends Component {
    state = { text: '' }

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                        onChangeText={(text) => this.setState({ text })}
                        style={{ height: 40, flex: 1 }}
                    />
                </CardSection>

                <CardSection />

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default FormLogin;
