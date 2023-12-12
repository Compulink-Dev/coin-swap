import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import FillButton from '../../components/FillButton';
import OutlineButton from '../../components/OutlineButton';
import tw from 'tailwind-react-native-classnames';
import { COLORS } from '../../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Wallet = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[tw`m-4 relative h-full`, styles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>


        <View style={[tw`flex-row items-center my-4`, { gap: 20 }, styles.title]}>
          <Icon name="wallet" style={[tw`text-4xl`, { color: `${COLORS.primary}` }]} />
          <View style={[tw`flex justify-center`]}>
            <Text style={[tw`text-2xl font-bold`, { color: `${COLORS.primary}` }]}>Sending</Text>
            <Text style={[tw`text-lg font-bold`, { color: `${COLORS.primary}` }]}>Money</Text>
          </View>
        </View>

        <View style={[tw`bg-white shadow-lg my-3 h-56 rounded-lg p-4`, styles.card]}>
          <View>
            <View style={[tw`flex-row justify-between items-center`]}>
              <Text style={[tw`font-bold text-lg text-gray-400`, { color: `${COLORS.primary}` }]}>
                Your Budget
              </Text>
              <Icon name="card" style={[tw`text-2xl text-gray-400`, { color: `${COLORS.primary}` }]} />
            </View>

            <View style={[tw`flex-row items-center my-3`]}>
              <Text style={[tw`text-4xl font-bold`, { color: `${COLORS.primary}` }]}>$</Text>
              <Text style={[tw`text-4xl font-bold`, { color: `${COLORS.primary}` }]}>14.98</Text>
            </View>
          </View>
        </View>

        <View style={[tw`my-8`, styles.text]}>
          <Text style={[tw`text-center font-bold`, { color: `${COLORS.primary}` }]}>
            What would you like to do with your credits
          </Text>
        </View>


      </ScrollView>
      <View style={[tw`flex absolute bottom-12 w-full`, { gap: 12 }, styles.button]}>
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


const styles = StyleSheet.create({
  container: {
    height: hp(100)
  },
  title: {
    height: hp(5)
  },
  card: {
    height: hp(25)
  },
  text: {
    height: hp(5)
  },
  button: {
    height: hp(20)
  }
})