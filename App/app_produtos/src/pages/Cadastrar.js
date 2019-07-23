import React, { Component } from 'react';
import api from '../services/api';

import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default class Main extends Component {
    static navigationOptions = {
        headerTitle: "Cadastro"
    };

    state = {
        name: '',
        price: '',
        description: '',
    };

    handleSubmit = async () => {
        const data = new FormData();

        data.append('name', this.state.name);
        data.append('price', this.state.price);
        data.append('description', this.state.description);

        await api.post('products', data)

        alert("cadastrado com sucesso");

        this.props.navigation.navigate('Main')
    }

    render() {
        return (
            <View>
                <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Nome"
                    placeholderTextColor="#999"
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                />
                <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Preço"
                    placeholderTextColor="#999"
                    value={this.state.price}
                    onChangeText={price => this.setState({ price })}
                />
                <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Descrição"
                    placeholderTextColor="#999"
                    value={this.state.description}
                    onChangeText={description => this.setState({ description })}
                />

                <TouchableOpacity onPress={this.handleSubmit}>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        );

    }
}

const styles = StyleSheet.create({

});