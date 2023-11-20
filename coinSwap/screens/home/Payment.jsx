import { View, Text, TextInput, Modal } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import BackButton from '../../components/BackButton';
import FillButton from '../../components/FillButton';
import OutlineButton from '../../components/OutlineButton';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { merchants } from '../../constants/data';

const Payment = () => {
  const navigation = useNavigation();
  const [selectedMerchant, setSelectedMerchant] = useState();
  const [modalVisible, setModalVisible] = useState(false);
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
              Do you want to continue with the payment.
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
      <View style={[tw`flex flex-col justify-between h-full`]}>
        <View style={[tw`mt-8`]}>
          <View style={[tw`mt-8`]}>
            <Text style={[tw`font-bold text-lg`]}>Pay Credits</Text>
            <View>
              <Text style={[tw`font-bold mt-4`]}>Search</Text>
              <Picker
                selectedValue={selectedMerchant}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedMerchant(itemValue)
                }>
                {
                  merchants.map((merchant) => (
                    <Picker.Item label={merchant.name} value={merchant.value} key={merchant.id} />
                  ))
                }

              </Picker>
            </View>
            <View style={[tw`mt-4`]}>
              <Text>Amount</Text>
              <TextInput
                placeholder="$ 0.00"
                keyboardType="number-pad"
                style={[tw`border-b border-gray-400 p-2`]}
              />
            </View>
          </View>
        </View>

        <View style={[tw`flex-col justify-center mt-44 `, { gap: 10 }]}>
          <FillButton
            name="Confirm"
            onPress={() => setModalVisible(!modalVisible)}
          />
          <OutlineButton name="Cancel" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Payment;
