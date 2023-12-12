import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/Ionicons';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import { transaction } from '../constants/data';

const TransactionCard = () => {

  return (
    <View style={[tw`w-full  shadow-lg  bg-white`]}>
      <FlatList
        style={[tw``]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={transaction}
        keyExtractor={transaction => transaction.id}
        renderItem={({ transaction }) => (
          <View
            style={[
              tw`bg-white shadow-lg flex-row items-center p-4 rounded mt-4 h-36`,
              { gap: 8 },
            ]}>
            <View
              style={[
                tw`bg-gray-300 h-24 w-24 rounded flex justify-center items-center`,
              ]}>
              <Image
                source={require('../assets/icon.png')}
                style={[tw`h-20 w-20 self-center`]}
              />
            </View>
            <View>
              <Text style={[tw`text-2xl font-bold`]}>{transaction.name}</Text>
              <Text>Description</Text>
            </View>
            <View
              style={[
                tw`flex-row justify-center items-center absolute right-4 bottom-4`,
              ]}>
              <Icon name="time" />
              <Text>12.00</Text>
            </View>
            <View
              style={[
                tw`flex-row justify-center items-center absolute right-4 top-4`,
              ]}>
              <FaIcon name="dollar" style={[tw`text-lg mr-1`]} />
              <Text style={[tw`text-lg font-bold`]}>20.00</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TransactionCard;
