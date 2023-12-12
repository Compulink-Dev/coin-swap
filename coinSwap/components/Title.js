import { View, Text } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { COLORS } from '../constants';

const Title = ({ name }) => {
  return <Text style={[tw`font-bold text-lg text-gray-400 mb-2`, { color: `${COLORS.primary}` }]}>{name}</Text>;
};

export default Title;
