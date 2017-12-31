import React, { Component } from 'react';
import { Button, CardSection, Card, Input } from './common';

class FormLogin extends Component {
    state = { text: '' }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@example.com"
                        label="Email"
                        value={this.state.text}
                        onChangeText={(text) => this.setState({ text })}
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
