import React from 'react';
import { Text, View, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import BackButton from '../../components/BackButton';
import tw from 'tailwind-react-native-classnames';
import Title from '../../components/Title';
import FormInput from '../../components/FormInput';
import Icon from 'react-native-vector-icons/AntDesign';
import { transaction } from '../../constants/data';
import { COLORS } from '../../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const Card = ({ name, date, money, status }) => {
  1
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={[tw`border-b pb-2 border-gray-300 flex flex-row items-center justify-between mt-4`]}
      onPress={() => navigation.navigate('Transaction')}>
      <View style={[tw`flex flex-row `, { gap: 12 }]}>
        <View style={[tw`h-16 w-16 rounded-full bg-blue-900 flex justify-center items-center`]}>
          <Icon name='file1' style={[tw`text-white text-2xl`, { color: `${COLORS.white}` }]} />
        </View>
        <View style={[tw`flex mt-2`]}>
          <Text style={[tw`text-lg font-bold`, { color: `${COLORS.gray}` }]}>{name}</Text>
          <Text style={[tw``, { color: `${COLORS.gray}` }]}>{date}</Text>
        </View>
      </View>
      <View style={[tw``]}>
        <Text style={[tw`text-lg font-bold`, { color: `${COLORS.gray}` }]}>{money}</Text>
        <Text style={[tw`text-red-500`, { color: `${COLORS.gray}` }]}>{status}</Text>
      </View>
    </TouchableOpacity>
  )
}

function Transactions() {
  return (
    <SafeAreaView style={[tw`m-4 h-full`, styles.container]}>
      <BackButton />
      <View style={tw`mt-14`}>
        <View style={styles.search}>
          <Title name={'Transactions'} />
          <View style={[tw`-mt-6 mb-4 `]}>
            <FormInput placeholder={'Search'} placeholderTextColor={COLORS.gray} />
          </View>
        </View>

        <View style={styles.transactions}>
          <FlatList
            data={transaction}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
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
        <View style={{ height: 80, width: '100%' }} />
      </View>
    </SafeAreaView>
  );
}

export default Transactions;


const styles = StyleSheet.create({
  container: {
    height: hp(100)
  },
  search: {
    height: hp(12)
  },
  transactions: {
    height: hp(70),
  }
})