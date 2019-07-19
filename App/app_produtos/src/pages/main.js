import React, { Component } from 'react';
import api from '../services/api';

import { View, Text } from 'react-native';

export default class Main extends Component {
    static navigationOptions = {
        title: "Products"
    };

    state = {
        counter: 0
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        console.log(response.data);
       // const { docs } = response.data;

        //this.setState({ counter: docs.length });
    };

    render() {
        return (
            <View>
                <Text>Pagina Main {this.state.counter}</Text>
            </View>
        );

    }
}