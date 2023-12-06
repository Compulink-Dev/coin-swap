import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import FillButton from '../../components/FillButton';
import OutlineButton from '../../components/OutlineButton';
import tw from 'tailwind-react-native-classnames';
import { COLORS } from '../../constants';

const Wallet = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[tw`m-4 relative h-full`]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={[tw`flex-row items-center my-4`, { gap: 20 }]}>
          <Icon name="wallet" style={[tw`text-4xl`, { color: `${COLORS.primary}` }]} />
          <View style={[tw`flex justify-center`]}>
            <Text style={[tw`text-2xl font-bold`]}>Sending</Text>
            <Text style={[tw`text-lg font-bold`]}>Money</Text>
          </View>
        </View>

        <View style={[tw`bg-white shadow-lg my-3 h-56 rounded-3xl p-4`]}>
          <View>
            <View style={[tw`flex-row justify-between items-center`]}>
              <Text style={[tw`font-bold text-lg text-gray-400`]}>
                Your Budget
              </Text>
              <Icon name="card" style={[tw`text-2xl text-gray-400`, { color: `${COLORS.primary}` }]} />
            </View>

            <View style={[tw`flex-row items-center my-3`]}>
              <Text style={[tw`text-4xl font-bold`]}>$</Text>
              <Text style={[tw`text-4xl font-bold`]}>14.98</Text>
            </View>
          </View>
        </View>

        <View style={[tw`my-8`]}>
          <Text style={[tw`text-center font-bold`]}>
            What would you like to do with your credits
          </Text>
        </View>


      </ScrollView>
      <View style={[tw`flex mt-16 absolute bottom-12 w-full`, { gap: 12 }]}>
        <FillButton
          name="Send Credits"
          onPress={() => navigation.navigate('SendCredits')}
        />
        <OutlineButton
          name="Pay Credits"
          onPress={() => navigation.navigate('Payment')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Wallet;
