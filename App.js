import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [age, setAge] = useState('');
  return (
    <View style={styles.container}>
     <Text>Age</Text>
     <TextInput

        onChangeText={newAge => setAge(newAge)}
        defaultValue={age}
/>
     <Text>Limits</Text>
     <Text>{Math.round((220-age) * 0.65)} - {Math.round((220-age) * 0.85)}</Text>
     <Pressable><Text>CALCULATE!</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
