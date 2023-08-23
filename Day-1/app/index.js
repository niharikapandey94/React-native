import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, World!"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.message}</Text>
        <Button
          title="Change Text"
          onPress={() => this.setState({ message: "Hello, React Native!" })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HelloWorldApp;
