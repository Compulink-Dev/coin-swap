import { View, Text, TextInput } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

export default function FormInput({ placeholder, name, onChange, type }) {
  return (
    <View style={[tw``]}>
      <View >
        <Text>{name}</Text>
        <TextInput
          placeholder={placeholder}
          style={[tw`border border-gray-300 p-2 rounded-lg mt-2`]}
          onChange={onChange}
          keyboardType={type}
        />
      </View>
    </View>
  );
}
