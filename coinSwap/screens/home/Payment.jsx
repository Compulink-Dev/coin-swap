import { View, Text, TextInput, Modal, KeyboardAvoidingView, StyleSheet } from 'react-native';
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
import { COLORS } from '../../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

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
      <SafeAreaView style={[tw`m-4 h-full flex-1`, styles.container]}>
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
              <Text style={[tw`text-center my-4 text-lg font-bold text-gray-500`]}>
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
          <View style={[tw`mt-8`, styles.input]}>
            <View style={[tw`mt-8`]}>
              <Text style={[tw`font-bold text-lg`, { color: COLORS.primary }]}>Pay Credits</Text>
              <View>
                <Picker
                  selectedValue={selectedMerchant}
                  value={selectedMerchant}
                  style={{ color: COLORS.gray }}
                  placeholder={COLORS.gray}
                  dropdownIconColor={COLORS.gray}
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
                <Text style={{ color: COLORS.gray }}>Amount</Text>
                <TextInput
                  placeholder="$ 0.00"
                  keyboardType="number-pad"
                  placeholderTextColor={COLORS.gray}
                  value={amount}
                  style={[tw`border-b border-gray-400 p-2`, { color: COLORS.gray }]}
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

          <View style={[tw`flex-col justify-center mt-44 `, { gap: 10 }, styles.input]}>
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