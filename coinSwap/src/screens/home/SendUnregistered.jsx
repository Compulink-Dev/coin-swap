import { View, Text, TextInput, Modal, KeyboardAvoidingView } from 'react-native';
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
import Toast from 'react-native-toast-message';

export default function SendUnRegistered() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const relationships = ['Family', 'Friend', 'Merchant', 'Client', 'Partner'];


  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [account, setAccount] = useState()
  const [amount, setAmount] = useState()
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {}

    if (!name) errors.name = 'Name is required'
    if (!phone) errors.phone = 'Phone is required'
    if (!account) errors.account = 'Account Id is required'
    if (!amount) errors.amount = 'Enter amount you want to send'

    setErrors(errors)

    return Object.keys(errors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Submitted', account, phone, amount, name);
      setPhone('')
      setAccount('')
      setAmount('')
      setName('')
      setErrors({})
      setModalVisible(!modalVisible)
    }
    else {
      showErrorToast()
    }
  }

  const onChangePhone = (phone) => {
    setPhone(phone)
    console.log(phone);
  }

  const onChangeAccount = (account) => {
    setAccount(account)
    console.log(account);
  }

  const onChangeAmount = (amount) => {
    setAmount(amount)
    console.log(`$${amount}`);
  }


  const onChangeName = (name) => {
    setName(name)
    console.log(name);
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

  const handleSave = () => {
    showSuccessToast()
    setModalVisible(!modalVisible)
  }



  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={[tw`h-full `]}>
      <SafeAreaView style={[tw`m-4 h-full flex-1 relative`]}>

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
                  onPress={() => handleSave()}
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
        <View style={[tw`mt-8 flex flex-col`, { gap: 2 }]}>
          <FormInput
            placeholder="Full Name"
            onChange={onChangeName}
            value={name}
          />
          <View>
            {
              errors.name ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.name}</Text> : null
            }
          </View>
          <FormInput
            placeholder="ID Number"
            onChange={onChangeAccount}
            value={account}
          />
          <View>
            {
              errors.account ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.account}</Text> : null
            }
          </View>
          <FormInput
            placeholder="Phone Number"
            onChange={onChangePhone}
            value={phone}
          />
          <View>
            {
              errors.phone ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.phone}</Text> : null
            }
          </View>
          <View style={[tw`mt-4`]}>
            <Text>Enter Amount</Text>
            <TextInput
              placeholder="$ 0.00"
              keyboardType="number-pad"
              value={amount}
              style={[tw`border-b border-b-2 border-gray-400 `]}
              onChange={onChangeAmount}
            />
          </View>
          <View>
            {
              errors.amount ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.amount}</Text> : null
            }
          </View>



        </View>
        <View style={[tw`my-4 flex flex-col justify-center absolute bottom-0 w-full`, { gap: 10 }]}>
          <FillButton name="Confirm"
            onPress={() => handleSubmit()}
          />
          <OutlineButton name="Cancel" onPress={() => navigation.goBack()} />
        </View>
        <Toast />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
