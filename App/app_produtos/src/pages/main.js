import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Main extends Component {
    static navigationOptions = {
        title: "Bem vindo!"
    };

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.productButton} onPress={() => {
                    this.props.navigation.navigate("Listar");
                }}>
                    <Text style={styles.productButtonText}>Listar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.productButton} onPress={() => {
                    this.props.navigation.navigate("Cadastrar");
                }}>
                    <Text style={styles.productButtonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        );

    }
}

const styles = StyleSheet.create({

});