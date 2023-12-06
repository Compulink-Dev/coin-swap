import {
  View,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import FillButton from './FillButton';
import Icon from "react-native-vector-icons/FontAwesome"
import OutlineButton from './OutlineButton';
import FormInput from './FormInput';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const ProfileInfo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {}

    if (!email) errors.email = 'Email is required'
    if (!username) errors.username = 'Username is required'
    if (!phone) errors.phone = 'Phone is required'

    setErrors(errors)

    return Object.keys(errors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Submitted', username, email, phone);
      handleConfirm()
      setEmail('')
      setUsername('')
      setPhone('')
      setErrors({})
    }
    else {
      showErrorToast()
    }
  }

  const handleModal = () => {
    setModalVisible(!modalVisible)
    setEmail('')
    setUsername('')
    setPhone('')
    setErrors({})
  }

  const onChangeEmail = (email) => {
    setEmail(email)
    console.log(email);
  }

  const onChangePhone = (phone) => {
    setPhone(phone)
    console.log('+263' + phone);
  }

  const onChangeUsername = (username) => {
    setUsername(username)
    console.log(username);
  }


  const showErrorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Error in profile changes',
      text2: 'Failed to make any changes',
      visibilityTime: 2000,
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
      style={[tw``]}>
      <SafeAreaView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={[tw`flex-1 justify-center items-center`]}>
            <View style={[tw`w-3/4 bg-white px-4 py-2 shadow-lg rounded-lg`]}>
              <Text style={[tw`text-lg font-bold`]}>
                Edit your profile
              </Text>

              <View style={[tw`-mt-4`]}>
                <FormInput
                  placeholder={'Username'}
                  onChange={onChangeUsername}
                  value={username}
                  focusable={true}
                />
              </View>
              <View>
                {
                  errors.username ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.username}</Text> : null
                }
              </View>
              <View style={[tw`-mt-4`]}>
                <FormInput
                  placeholder={'Email'}
                  onChange={onChangeEmail}
                  value={email}
                  focusable={true}
                />
              </View>
              <View>
                {
                  errors.email ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.email}</Text> : null
                }
              </View>
              <View style={[tw`-mt-4`]}>
                <FormInput
                  placeholder={'Phone number'}
                  type="number-pad"
                  onChange={onChangePhone}
                  value={phone}
                  focusable={true}

                />
              </View>
              <View>
                {
                  errors.phone ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.phone}</Text> : null
                }
              </View>
              <View style={[tw`-mt-4`]}>
              </View>
              <View style={[tw`mt-4`]}>
                <View style={[tw`my-4`]}>
                  <FillButton
                    name={'Save Changes'}
                    onPress={() => handleSubmit()}
                  />

                </View>
                <View style={[tw`mb-4`]}>
                  <OutlineButton
                    name={'Cancel'}
                    onPress={() => handleModal()}
                  />
                </View>
              </View>
            </View>
          </View>
          <Toast />
        </Modal>

        <View style={[tw`h-full`]}>
          <Text style={[tw`font-bold text-lg text-gray-400`]}>Profile</Text>
          <ScrollView>
            <View style={[tw`flex flex-row items-center justify-center my-6`, { gap: 40 }]}>
              <View style={[tw`flex items-center justify-center`]}>
                <Text style={[tw`text-4xl font-bold`]}>34</Text>
                <Text style={[tw``]}>Merchants</Text>
              </View>
              <View style={[tw`flex items-center justify-center`]}>
                <Text style={[tw`text-4xl font-bold`]}>12</Text>
                <Text style={[tw``]}>Clients</Text>
              </View>
              <View style={[tw`flex items-center justify-center`]}>
                <Text style={[tw`text-4xl font-bold`]}>45</Text>
                <Text style={[tw``]}>Transactions</Text>
              </View>
            </View>
            <View style={[tw`pt-2 flex `, { gap: 10 }]}>
              <View style={[tw`flex flex-row items-center justify-between`]}>
                <Text style={[tw``]}></Text>
                <Text style={[tw``]}></Text>
              </View>
              <View style={[tw`flex flex-row items-center justify-center`, { gap: 20 }]}>
                <Icon name='envelope-o' style={[tw`text-2xl flex-1`]} />
                <Text style={[tw`text-sm`]}>lloydm@compulink.co.zw</Text>
              </View>
              <View style={[tw`flex flex-row items-center justify-center`, { gap: 20 }]}>
                <Icon name='mobile' style={[tw`text-3xl flex-1`]} />
                <Text style={[tw`text-sm`]}>+236 778 191 278</Text>
              </View>
              <View style={[tw`flex flex-row items-center justify-center`, { gap: 20 }]}>
                <Icon name='user' style={[tw`text-2xl flex-1`]} />
                <Text style={[tw`text-sm`]}>Sales Rep</Text>
              </View>
              <View style={[tw`flex flex-row items-center justify-center`, { gap: 20 }]}>
                <Icon name='map-pin' style={[tw`text-2xl flex-1`]} />
                <Text style={[tw`text-sm`]}>Harare</Text>
              </View>

            </View>
          </ScrollView>
          <View style={tw`absolute bottom-8 w-full`}>
            <FillButton
              name="Edit Profile"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ProfileInfo;
