import { View, Text, SafeAreaView, KeyboardAvoidingView, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import FormInput from '../../components/FormInput';
import FillButton from '../../components/FillButton';
import OutlineButton from '../../components/OutlineButton';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants';
import { TextInput } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const AddUser = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState({})
  const [modalVisible, setModalVisible] = useState(false);

  const validateForm = () => {
    let errors = {}

    if (!email) errors.email = 'Email is required'
    if (!firstName) errors.firstName = 'First name is required'
    if (!lastName) errors.lastName = 'Last name is required'
    if (!phone) errors.phone = 'Phone is required'

    setErrors(errors)

    return Object.keys(errors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Submitted', firstName, lastName, email, phone);
      setModalVisible(!modalVisible)
      setEmail('')
      setFirstName('')
      setLastName('')
      setPhone('')
      setErrors({})
    }
    else {
      showErrorToast()
    }
  }

  const onChangeEmail = (email) => {
    setEmail(email)
    console.log(email);
  }

  const onChangePhone = (phone) => {
    setPhone(phone)
    console.log('+263' + phone);
  }

  const onChangeFirst = (firstName) => {
    setFirstName(firstName)
    console.log(firstName);
  }

  const onChangeLast = (lastName) => {
    setLastName(lastName)
    console.log(lastName);
  }

  const showErrorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Error adding merchant',
      text2: 'Please fill in all the details',
      visibilityTime: 2000
    })
  }

  const showSuccessToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Successfully added merchant',
      text2: 'Merchant added',
      visibilityTime: 2000
    })
  }

  const handleSave = () => {
    showSuccessToast()
    setModalVisible(!modalVisible)
    setEmail('')
    setFirstName('')
    setLastName('')
    setPhone('')
    navigation.goBack()
  }


  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={20}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={[tw`h-full `]}>
      <SafeAreaView style={[tw`m-4 h-full`]}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={[tw`flex-1 justify-center items-center`]}>
            <View style={[tw`w-3/4 bg-white px-4 py-10 shadow-lg rounded-lg`]}>
              <View>
                <Text>Would you like to save these changes?</Text>
              </View>
              <View style={[tw`my-4`]}>
                <FillButton
                  name={'Save Changes'}
                  onPress={handleSave}
                />

              </View>
              <View style={[tw`mb-4`]}>
                <OutlineButton
                  name={'Cancel'}
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </View>
            </View>
          </View>
        </Modal>
        <BackButton />


        <View style={tw`mt-8 flex-1 h-full flex flex-col justify-between h-full`}>

          <View style={[tw`flex-1`]}>
            <FormInput
              placeholder="First Name"
              onChange={onChangeFirst}
              value={firstName}
              focusable={true}
            />
            <View>
              {
                errors.firstName ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.firstName}</Text> : null
              }
            </View>
            <FormInput
              placeholder="Last Name"
              onChange={onChangeLast}
              value={lastName}
              focusable={true}
            />
            <View>
              {
                errors.lastName ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.lastName}</Text> : null
              }
            </View>
            <FormInput
              placeholder="Email"
              onChange={onChangeEmail}
              value={email}
              focusable={true}
            />
            {/* <View >
              <TextInput
                placeholder={'Emails'}
                style={[tw`border border-gray-300 p-2 rounded-lg mt-2`]}
                onChange={onChangeEmail}
                value={email}
                focusable={true}
              />
            </View> */}
            <View>
              {
                errors.email ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.email}</Text> : null
              }
            </View>
            <FormInput
              placeholder="Phone Number"
              type="number-pad"
              onChange={onChangePhone}
              value={phone}
              focusable={true}
            />
            <View>
              {
                errors.phone ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.phone}</Text> : null
              }
            </View>
          </View>

        </View>


        <View style={tw`flex flex-1 items-center justify-center w-full absolute bottom-12 `}>
          <View style={tw`w-full mb-4`}>
            <FillButton
              name="Add Merchant"
              onPress={handleSubmit}
            />
          </View>
          <OutlineButton
            name="Cancel"
            onPress={() => navigation.goBack()}
          />
        </View>
        <Toast />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default AddUser;
