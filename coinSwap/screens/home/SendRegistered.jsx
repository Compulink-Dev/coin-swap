import { View, Text, TextInput, Modal, KeyboardAvoidingView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import BackButton from '../../components/BackButton';
import FillButton from '../../components/FillButton';
import OutlineButton from '../../components/OutlineButton';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


export default function SendRegistered() {

  const [modalVisible, setModalVisible] = useState(false);

  const [phone, setPhone] = useState()
  const [account, setAccount] = useState()
  const [amount, setAmount] = useState()
  const [errors, setErrors] = useState({})

  const navigation = useNavigation()

  const validateForm = () => {
    let errors = {}

    if (!phone) errors.phone = 'Phone is required'
    if (!account) errors.account = 'Account Id is required'
    if (!amount) errors.amount = 'Enter amount you want to send'

    setErrors(errors)

    return Object.keys(errors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Submitted', account, phone);
      setPhone('')
      setAccount('')
      setAmount('')
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
              <Text style={[tw`text-center my-4 text-lg font-bold`, { color: COLORS.gray }]}>
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
        <View style={[tw`pt-4 flex justify-between h-full`, styles.container]}>
          <View style={[tw`mt-8`, styles.input]}>
            <View style={[tw`mt-8`]}>
              <View>
                <Text style={{ color: errors.account ? 'red' : `${COLORS.gray}` }}>Account ID</Text>
                <TextInput
                  placeholder="Account ID"
                  keyboardType="number-pad"
                  style={[tw`border border-gray-300 p-2 rounded-lg mt-2`, { borderColor: errors.account ? "red" : COLORS.gray, color: COLORS.gray }]}
                  secureTextEntry={false}
                  value={account}
                  onChangeText={onChangeAccount}
                  placeholderTextColor={errors.account ? "red" : COLORS.gray}
                />
              </View>
              <View>
                {
                  errors.account ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.account}</Text> : null
                }
              </View>
            </View>
            <View style={[tw`mt-4`]}>
              <View>
                <Text style={{ color: errors.phone ? 'red' : `${COLORS.gray}` }}>Phone Number</Text>
                <TextInput
                  placeholder="Phone Number"
                  keyboardType="number-pad"
                  style={[tw`border border-gray-300 p-2 rounded-lg mt-2`, { borderColor: errors.phone ? "red" : COLORS.gray, color: COLORS.gray }]}
                  secureTextEntry={false}
                  value={phone}
                  onChangeText={onChangePhone}
                  placeholderTextColor={errors.phone ? "red" : COLORS.gray}
                />
              </View>
              <View>
                {
                  errors.phone ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.phone}</Text> : null
                }
              </View>
            </View>
            <View style={[tw`my-8`]}>
              <View style={[tw``]}>
                <Text style={[tw`font-bold text-lg`, { color: errors.amount ? 'red' : `${COLORS.gray}` }]}>
                  Enter Amount
                </Text>
                <TextInput
                  placeholder="$ 0.00"
                  keyboardType="number-pad"
                  value={amount}
                  placeholderTextColor={errors.amount ? "red" : COLORS.gray}
                  style={[
                    tw`border-b border-b-2 border-gray-400 p-2`, { color: `${COLORS.gray}`, borderColor: errors.amount ? 'red' : COLORS.gray }
                  ]}
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

        </View>
        <View style={[tw`absolute bottom-2 w-full`, styles.button]}>
          <FillButton
            name="Send Credit"
            onPress={() => handleSubmit()}
          />
          <View style={{ marginTop: 10 }}>
            <OutlineButton name="Cancel" onPress={() => navigation.goBack()} />
          </View>
        </View>
        <Toast />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    height: hp(100)
  },
  input: {
    height: hp(20)
  },
  button: {
    height: hp(10)
  }
})