import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, CardSection, Card } from './common';

class FormLogin extends Component {
    render() {
        return (
            <Card>
                <CardSection />

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
