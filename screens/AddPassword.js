import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { savePassword } from '../utils/storage';

export default function AddPassword({ navigation }) {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  return (
    <View>
      <TextInput placeholder="Account" onChangeText={setKey} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setValue} />
      <Button title="Save" onPress={() => {
        savePassword(key, value);
        navigation.goBack();
      }} />
    </View>
  );
}