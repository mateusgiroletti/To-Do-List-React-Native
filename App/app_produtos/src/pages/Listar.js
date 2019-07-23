import React, { Component } from 'react';
import api from '../services/api';

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default class Listar extends Component {
    static navigationOptions = {
        title: "Products"
    };

    state = {
        data: []
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('products');


        const { data } = response.data;

        this.setState({ data });
    };

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.productButton} onPress={() => { }}>
                <Text style={styles.productButtonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}
                />
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa"
    },

    list: {
        padding: 20
    },

    productContainer: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },

    productName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },
    productPrice: {
        fontSize: 16,
        color: "#999",
        marginTop: 5,
        lineHeight: 24
    },
    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#da552f",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    productButtonText: {
        fontSize: 16,
        color: "#da552f",
        fontWeight: "bold"
    }
});