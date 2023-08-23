import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Counter App</Text>
      <Text style={{ fontSize: 48 }}>{count}</Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="Increment" onPress={incrementCount} />
        <Button title="Decrement" onPress={decrementCount} />
      </View>
    </View>
  );
};

export default App;
