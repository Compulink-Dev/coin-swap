import {View, Text} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const Title = ({name}) => {
  return <Text style={[tw`font-bold text-lg text-gray-400 mb-2`]}>{name}</Text>;
};

export default Title;
