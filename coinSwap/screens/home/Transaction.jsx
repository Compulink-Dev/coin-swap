import { Text, View, SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
import BackButton from '../../components/BackButton';
import tw from 'tailwind-react-native-classnames';
import Title from '../../components/Title';
import { COLORS } from '../../constants';
import Icon from 'react-native-vector-icons/AntDesign'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Transaction = () => {
  return (
    <SafeAreaView style={[tw`m-4 h-full`, styles.container]}>
      <BackButton />
      <View style={[tw`mt-12`]}>
        <Title
          name={'Transaction'}
        />
      </View>
      <View style={[tw``]}>
        <View style={[tw`w-full rounded bg-blue-900`, styles.header]}></View>

        <View style={styles.info}>
          <TouchableOpacity style={[tw`mb-4`]}>
            <View style={[tw`mt-4 flex-row items-center justify-end`, { gap: 5 }]}>
              <Text style={[tw`text-sm`, { color: COLORS.primary }]}>Export pdf</Text>
              <Icon name='export' style={[tw`text-lg`, { color: COLORS.primary }]} />
            </View>
          </TouchableOpacity>

          <View style={[tw`border rounded`, { borderColor: COLORS.primary }]}>

            <View style={[tw`mt-4 px-4 flex flex-row items-center justify-between`]}>
              <View style={[tw`flex-row items-center`]}>
                <MIcon name='person' style={[tw`text-sm`, { color: COLORS.primary }]} />
                <Text style={[tw`text-sm ml-1`, { color: `${COLORS.gray}` }]}>Name</Text>
              </View>
              <Text style={[tw``, { color: `${COLORS.gray}` }]}>Lloyd Matare</Text>
            </View>
            <View style={[tw`w-full mt-2`, { height: 1, backgroundColor: COLORS.grayLight }]} />

            <View style={[tw`mt-4 px-4 flex flex-row items-center justify-between`]}>
              <View style={[tw`flex-row items-center`]}>
                <MIcon name='phone' style={[tw`text-sm`, { color: COLORS.primary }]} />
                <Text style={[tw`text-sm ml-1`, { color: `${COLORS.gray}` }]}>Contact</Text>
              </View>
              <Text style={[tw``, { color: `${COLORS.gray}` }]}>+263 778 191 278</Text>
            </View>
            <View style={[tw`w-full mt-2`, { height: 1, backgroundColor: COLORS.grayLight }]} />

            <View style={[tw`mt-4 px-4 flex flex-row items-center justify-between`]}>
              <View style={[tw`flex-row items-center`]}>
                <MIcon name='date-range' style={[tw`text-sm`, { color: COLORS.primary }]} />
                <Text style={[tw`text-sm ml-1`, { color: `${COLORS.gray}` }]}>Date</Text>
              </View>
              <Text style={[tw``, { color: `${COLORS.gray}` }]}>11 Nov 2023</Text>
            </View>
            <View style={[tw`w-full mt-2`, { height: 1, backgroundColor: COLORS.grayLight }]} />

            <View style={[tw`mt-4 px-4 flex flex-row items-center justify-between`]}>
              <View style={[tw`flex-row items-center`]}>
                <MIcon name='receipt' style={[tw`text-sm`, { color: COLORS.primary }]} />
                <Text style={[tw`text-sm ml-1`, { color: `${COLORS.gray}` }]}>Token Value</Text>
              </View>
              <Text style={[tw``, { color: `${COLORS.gray}` }]}>$0.80</Text>
            </View>
            <View style={[tw`w-full mt-2`, { height: 1, backgroundColor: COLORS.grayLight }]} />

            <View style={[tw`mt-4 px-4 pb-4 flex flex-row items-center justify-between`]}>
              <View style={[tw`flex-row items-center`]}>
                <MIcon name='point-of-sale' style={[tw`text-sm`, { color: COLORS.primary }]} />
                <Text style={[tw`text-sm ml-1`, { color: `${COLORS.gray}` }]}>Token Detail</Text>
              </View>
              <Text style={[tw``, { color: `${COLORS.gray}` }]}>Spar</Text>
            </View>
          </View>

        </View>


        <View style={styles.bottom}>
          <View style={[tw`text-center mt-4`, { color: `${COLORS.gray}` }]}>
            <Text style={[tw`text-center text-4xl`, { color: `${COLORS.primary}` }]}>$10.00</Text>
          </View>
          <View style={[tw`text-center mt-4`]}>
            <Text style={[tw`text-center text-2xl text-red-500`, { color: `${COLORS.primary}` }]}>Pending Transaction</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Transaction

const styles = StyleSheet.create({
  container: {
    height: hp(100)
  },
  header: {
    height: hp(12)
  },
  info: {
    height: hp(50)
  },
  bottom: {
    height: hp(20)
  }
})