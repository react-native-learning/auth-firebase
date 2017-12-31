import React, { Component } from 'react';
import { Button, CardSection, Card, Input } from './common';

class FormLogin extends Component {
    state = { text: 'ssss' }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="UserName"
                        value={this.state.text}
                        handleOnChangeText={(text) => this.setState({ text })}
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
