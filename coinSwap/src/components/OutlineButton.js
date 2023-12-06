import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {COLORS} from '../constants';

const OutlineButton = ({name, onPress}) => {
  return (
    <TouchableOpacity
      style={[
        tw`border rounded-full w-full px-4 py-2`,
        {borderColor: `${COLORS.primary}`},
      ]}
      onPress={onPress}>
      <Text style={[tw`text-center`, {color: `${COLORS.primary}`}]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default OutlineButton;
