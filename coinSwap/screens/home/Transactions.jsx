import React from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import BackButton from '../../components/BackButton';
import tw from 'tailwind-react-native-classnames';
import Title from '../../components/Title';
import FormInput from '../../components/FormInput';
import Icon from 'react-native-vector-icons/AntDesign';
import { transaction } from '../../constants/data';


const Card = ({ name, date, money, status }) => {
  return (
    <View style={[tw`border-b pb-4 border-gray-300 flex flex-row items-center justify-between mt-4`]}>
      <View style={[tw`flex flex-row `, { gap: 12 }]}>
        <View style={[tw`h-16 w-16 rounded-full bg-blue-900 flex justify-center items-center`]}>
          <Icon name='file1' style={[tw`text-white text-2xl`]} />
        </View>
        <View style={[tw`flex mt-2`]}>
          <Text style={[tw`text-lg font-bold`]}>{name}</Text>
          <Text style={[tw``]}>{date}</Text>
        </View>
      </View>
      <View style={[tw``]}>
        <Text style={[tw`text-lg font-bold`]}>{money}</Text>
        <Text style={[tw`text-red-500`]}>{status}</Text>
      </View>
    </View>
  )
}

function Transactions() {
  return (
    <SafeAreaView style={[tw`m-4 h-full`]}>
      <BackButton />
      <View style={tw`mt-14`}>
        <Title name={'Transaction'} />
        <View style={[tw`-mt-6 mb-4 `]}>
          <FormInput type={'text'} placeholder={'Search'} />
        </View>
        <FlatList
          data={transaction}
          renderItem={({ item }) => {
            return (
              <Card
                key={item.id}
                name={item.name}
                date={item.date}
                money={item.money}
                status={item.status}
              />
            )
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default Transactions;
