import { View, Text, TextInput, Modal, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import BackButton from '../../components/BackButton';
import FillButton from '../../components/FillButton';
import OutlineButton from '../../components/OutlineButton';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { merchants } from '../../constants/data';
import Toast from 'react-native-toast-message';

const Payment = () => {
  const navigation = useNavigation();
  const [selectedMerchant, setSelectedMerchant] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState()
  const [errors, setErrors] = useState({})


  const validateForm = () => {
    let errors = {}

    if (!amount) errors.amount = 'Enter amount you wish to send'
    if (!selectedMerchant) errors.selectedMerchant = 'Please select merchant'

    setErrors(errors)

    return Object.keys(errors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Submitted', amount, selectedMerchant);
      setAmount('')
      setSelectedMerchant('')
      setErrors({})
      setModalVisible(!modalVisible)
    }
    else {
      showErrorToast()
    }
  }

  const onChangeAmount = (amount) => {
    setAmount(amount)
    console.log(amount);
  }


  const showErrorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Error in sending credits',
      text2: 'Please fill in the detail below',
      visibilityTime: 2000
    })
  }

  const showSuccessToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Credit payment successful',
      text2: 'Transaction finished successfully',
      visibilityTime: 2000
    })
  }

  const handleConfirm = () => {
    showSuccessToast()
    setModalVisible(!modalVisible)
  }



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
                Do you want to continue with the payment.
              </Text>
              <View
                style={[
                  tw`flex-col w-full items-center justify-center`,
                  { gap: 4 },
                ]}>
                <FillButton
                  name="Confirm"
                  onPress={() => handleConfirm()}
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
                  value={selectedMerchant}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedMerchant(itemValue)
                  }>
                  {
                    merchants.map((merchant) => (
                      <Picker.Item label={merchant.name} value={merchant.value} key={merchant.id} />
                    ))
                  }

                </Picker>
                <View>
                  {
                    errors.selectedMerchant ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.selectedMerchant}</Text> : null
                  }
                </View>
              </View>
              <View style={[tw`mt-4`]}>
                <Text>Amount</Text>
                <TextInput
                  placeholder="$ 0.00"
                  keyboardType="number-pad"
                  value={amount}
                  style={[tw`border-b border-gray-400 p-2`]}
                  onChangeText={onChangeAmount}
                />
              </View>
              <View>
                {
                  errors.amount ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.amount}</Text> : null
                }
              </View>
            </View>
          </View>

          <View style={[tw`flex-col justify-center mt-44 `, { gap: 10 }]}>
            <FillButton
              name="Confirm"
              onPress={() => handleSubmit()}
            />
            <OutlineButton name="Cancel" onPress={() => navigation.goBack()} />
          </View>
        </View>
        <Toast />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Payment;
