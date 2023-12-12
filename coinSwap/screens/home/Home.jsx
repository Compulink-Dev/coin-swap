import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants';
import { merchants, transaction } from '../../constants/data';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


const Home = () => {
  const navigation = useNavigation();


  return (
    <SafeAreaView style={[tw`px-4 pt-4`, styles.container]}>
      <View style={[tw`flex-row justify-between items-center `, styles.header]}>
        <View style={[tw``]}>
          <Text style={[tw`text-4xl font-bold`, { color: COLORS.primary }]}>Welcome</Text>
          <Text style={[tw`font-semibold`, { color: COLORS.primary }]}>Lloyd Matare</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileNavigation')} >
          <Icon name="person-circle" style={[tw`text-4xl`, { color: `${COLORS.primary}` }]} />
        </TouchableOpacity>
      </View>

      <View
        style={[tw`bg-white shadow-lg rounded mt-4 px-4 py-6 `, styles.balance]}
      >
        <View style={[tw`flex-row items-center`, { gap: 12 }]}>
          <View
            style={[
              tw`p-2  rounded-full`,
              { backgroundColor: `${COLORS.primary}` },
            ]}>
            <Icon name='wallet' style={[tw`text-4xl text-white`]} />
          </View>
          <View>
            <Text style={[tw`font-semibold`, { color: `${COLORS.primary}` }]}>Balance</Text>
            <Text style={[tw`text-2xl font-bold`, { color: `${COLORS.primary}` }]}>$14.98</Text>
          </View>
        </View>
        <View style={[tw``]}></View>
      </View>

      <View style={[tw`my-6`, styles.merchant]}>
        <Text style={[tw`font-bold text-lg text-gray-400 mb-2`, { color: `${COLORS.primary}` }]}>
          Recent Merchant
        </Text>
        <View style={[tw`flex-row `, { gap: 5 }]}>
          {/* <TouchableOpacity
            style={[
              tw`bg-white shadow-lg w-16 h-16 rounded-full flex justify-center items-center`,
            ]}
            onPress={() => navigation.navigate('AddUser')}>
            <Icon
              name="add"
              style={[tw`text-4xl `, { color: `${COLORS.primary}` }]}
            />
          </TouchableOpacity> */}

          <FlatList
            style={[tw`px-2`]}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={merchants}
            horizontal
            renderItem={({ item }) => (
              <View style={[tw`flex items-center mr-5`]}>
                <TouchableOpacity
                  style={[
                    tw`bg-gray-200 mr-2 w-16 h-16 rounded-full flex justify-center items-center`,
                  ]}>
                  <Icon name="image" style={[tw`text-black text-4xl `, { color: `${COLORS.primary}` }]} />
                </TouchableOpacity>
                <Text style={{ color: COLORS.primary }}>{item.name}</Text>
              </View>
            )}
          />
        </View>
      </View>

      <View style={[tw`h-80 mb-8`, styles.transaction]}>
        <View style={[tw`flex-row justify-between items-center`]}>
          <Text style={[tw`font-bold text-lg text-gray-400`, { color: `${COLORS.primary}` }]}>
            Recent Transactions
          </Text>
          <TouchableOpacity
            style={[tw``]}
            onPress={() => navigation.navigate('Transactions')}>
            <Text style={[tw`text-sm text-gray-400 `, { color: `${COLORS.primary}` }]}>View All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          style={[tw``]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={transaction}
          keyExtractor={transaction => transaction.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                tw`bg-white shadow-lg flex-row items-center p-4 rounded mt-4`,
                { gap: 8 },
              ]}
              onPress={() => navigation.navigate('Transaction')}>
              <View
                style={[
                  tw`bg-gray-300 h-24 w-24 rounded flex justify-center items-center`,
                ]}>
                <Image
                  source={require('../../assets/icon.png')}
                  style={[tw`h-20 w-20 self-center`]}
                />
              </View>
              <View>
                <Text style={[tw`text-2xl font-bold`, { color: `${COLORS.primary}` }]}>{item.name}</Text>
                <Text style={{ color: `${COLORS.primary}` }}>{item.date}</Text>
              </View>
              <View
                style={[
                  tw`flex-row justify-center items-center absolute right-4 bottom-4`,
                ]}>
                <Icon name="time" style={{ color: `${COLORS.primary}` }} />
                <Text style={{ color: `${COLORS.primary}` }}>{item.status}</Text>
              </View>
              <View
                style={[
                  tw`flex-row justify-center items-center absolute right-4 top-4`,
                ]}>
                {/* <FaIcon name="dollar" style={[tw`text-lg mr-1`]} /> */}
                <Text style={[tw`text-lg font-bold`, { color: `${COLORS.primary}` }]}>{item.money}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;


const styles = StyleSheet.create({
  container: {
    height: hp(100)
  },
  header: {
    height: hp(10)
  },
  balance: {
    height: hp(15)
  },
  merchant: {
    height: hp(15)
  },
  transaction: {
    height: hp(60)
  }
})