import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome6'
import { COLORS } from '../constants';


const Info = ({ icon, value, title }) => {
  return (
    <View style={[tw`h-24 w-full border border-blue-900 rounded p-2 flex flex-row items-center`]}>
      <View style={[tw`mr-4`]}>
        <Icon name={icon} style={[tw`text-4xl text-blue-900`]} />
      </View>
      <View style={[tw``]}>
        <Text style={[tw`text-2xl font-bold text-blue-900`]}>{value}</Text>
        <Text style={[tw`text-xs font-bold`, { color: `${COLORS.primary}` }]}>{title}</Text>
      </View>
    </View>
  )
}

export default function PaymentInfo() {
  return (
    <SafeAreaView>
      <View style={[tw``]}>
        <Text style={[tw`text-lg text-gray-400 font-bold`, { color: `${COLORS.primary}` }]}>Statistics</Text>
      </View>
      <View style={[tw`flex flex-row  flex-wrap items-center justify-between`, { gap: 6 }]}>
        <Info
          icon={'chart-bar'}
          value={'54%'}
          title={'Transactions'}
        />
        <Info
          icon={'award'}
          value={'12%'}
          title={'Successful'}
        />
        <Info
          icon={'ban'}
          value={'10%'}
          title={'Failed'}
        />
        <Info
          icon={'arrow-rotate-right'}
          value={'24%'}
          title={'Pending'}
        />
      </View>
    </SafeAreaView>
  );
}
