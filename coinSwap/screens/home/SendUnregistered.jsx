import { View, Text, TextInput, Modal } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import BackButton from '../../components/BackButton';
import FormInput from '../../components/FormInput';
import FillButton from '../../components/FillButton';
import OutlineButton from '../../components/OutlineButton';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import SelectDropdown from 'react-native-select-dropdown';

export default function SendUnRegistered() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const relationships = ['Family', 'Friend', 'Merchant', 'Client', 'Partner'];
  return (
    <SafeAreaView style={[tw`m-4 h-full flex-1`]}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={[tw`flex-1 justify-center items-center`]}>
          <View style={[tw`w-3/4 bg-white px-4 py-8 shadow-lg rounded-lg`]}>
            <Text style={[tw`text-center my-4 text-lg font-bold`]}>
              Do you want to continue with the payment
            </Text>
            <View
              style={[
                tw`flex-col w-full items-center justify-center`,
                { gap: 4 },
              ]}>
              <FillButton
                name="Confirm"
                onPress={() => setModalVisible(!modalVisible)}
                style={tw`w-full`}
              />
              <View style={tw`w-full mt-2`}>
                <OutlineButton
                  name="Cancel"
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <BackButton />
      <View style={[tw`mt-16 flex flex-col`, { gap: 4 }]}>
        <FormInput name="Full Name" />
        <FormInput name="ID Number" />
        <FormInput name="Phone Number" />
        <View style={[tw`mt-2 flex flex-row items-center `]}>
          <Text>Relationship</Text>
          <SelectDropdown
            data={relationships}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextStyle={tw`text-sm text-gray-500`}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            style={[tw`border border-blue-500`]}
          />
        </View>
        <View style={[tw`mt-4`]}>
          <Text>Enter Amount</Text>
          <TextInput
            placeholder="$ 0.00"
            keyboardType="number-pad"
            style={[tw`border-b border-b-2 border-gray-400 `]}
          />
        </View>

        <View style={[tw`flex-row items-center mt-4`, { gap: 4 }]}>
          <CheckBox
            value={isSelected}
            onValueChange={setIsSelected}
            style={tw`text-blue-500`}
          />
          <Text>Keep information for later</Text>
        </View>

        <View style={[tw`my-4 flex flex-col justify-center`, { gap: 10 }]}>
          <FillButton name="Confirm"
            onPress={() => setModalVisible(!modalVisible)}
          />
          <OutlineButton name="Cancel" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </SafeAreaView>
  );
}
