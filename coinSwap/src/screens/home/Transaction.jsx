import { Text, View, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import React from 'react'
import BackButton from '../../components/BackButton';
import tw from 'tailwind-react-native-classnames';
import Title from '../../components/Title';

const Transaction = () => {
  return (
    <SafeAreaView style={[tw`m-4 h-full`]}>
      <BackButton />
      <View style={[tw`mt-12`]}>
        <Title
          name={'Transaction'}
        />
      </View>
      <View style={[tw``]}>
        <View style={[tw`w-full h-36 rounded bg-blue-900`]}></View>
        <View style={[tw``]}>
          <View style={[tw`mt-4 flex flex-row items-center justify-between`]}>
            <Text style={[tw`text-lg`]}>Name:</Text>
            <Text style={[tw``]}>Lloyd Matare</Text>
          </View>
          <View style={[tw`mt-4 flex flex-row items-center justify-between`]}>
            <Text style={[tw`text-lg`]}>Date:</Text>
            <Text style={[tw``]}>11 Nov 2023</Text>
          </View>
          <View style={[tw`mt-4 flex flex-row items-center justify-between`]}>
            <Text style={[tw`text-lg`]}>Time:</Text>
            <Text style={[tw``]}>11: 00 am</Text>
          </View>
          <View style={[tw`text-center mt-12`]}>
            <Text style={[tw`text-center text-4xl`]}>$400.00</Text>
          </View>
          <View style={[tw`text-center mt-12`]}>
            <Text style={[tw`text-center text-2xl text-red-500`]}>Warning</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Transaction

const styles = StyleSheet.create({})