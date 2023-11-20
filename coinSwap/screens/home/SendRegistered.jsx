import { View, Text, TextInput, Modal, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import BackButton from '../../components/BackButton';
import FillButton from '../../components/FillButton';
import OutlineButton from '../../components/OutlineButton';

export default function SendRegistered() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={[tw`h-full `]}>
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
        <View style={[tw`pt-4 flex justify-between h-full`]}>
          <View style={[tw`mt-8`]}>
            <View style={[tw`mt-8`]}>
              <View>
                <Text>Account ID</Text>
                <TextInput
                  placeholder="Account ID"
                  keyboardType="number-pad"
                  style={[tw`border border-gray-300 p-2 rounded-lg mt-2`]}
                />
              </View>
            </View>
            <View style={[tw`mt-4`]}>
              <View>
                <Text>Phone Number</Text>
                <TextInput
                  placeholder="Phone Number"
                  keyboardType="number-pad"
                  style={[tw`border border-gray-300 p-2 rounded-lg mt-2`]}
                />
              </View>
            </View>
            <View style={[tw`my-8`]}>
              <View style={[tw``]}>
                <Text style={[tw`font-bold text-lg`]}>
                  Enter Amount
                </Text>
                <TextInput
                  placeholder="$ 0.00"
                  keyboardType="number-pad"
                  style={[
                    tw`border-b border-b-2 border-gray-400 p-2`,
                  ]}
                />
              </View>
            </View>
          </View>

        </View>
        <View style={[tw`absolute bottom-2 w-full`]}>
          <FillButton
            name="Send Credits"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
