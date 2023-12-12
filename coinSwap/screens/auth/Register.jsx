import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  FlatList
} from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import { COLORS } from '../../constants';
import FillButton from '../../components/FillButton';
import Toast from 'react-native-toast-message';
import flag from '../../assets/flag.png'
import Icon from 'react-native-vector-icons/AntDesign';
const { width, height } = Dimensions.get("window");
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


const Register = () => {
  const navigation = useNavigation();


  const [phoneNumber, setPhoneNumber] = useState('')
  const [areas, setAreas] = useState([])
  const [selectedArea, setSelectedArea] = useState(null)
  const [errors, setErrors] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then(response => response.json())
      .then(data => {
        let areaData = data.map(item => {
          return {
            code: item.alpha2Code,
            item: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://countryflagsapi.com/png/${item.name}`
          }
        });

        setAreas(areaData);
        if (areaData.length > 0) {
          let defaultData = areaData.filter(a => a.code == "US");

          if (defaultData.length > 0) {
            setSelectedArea(defaultData[0])
          }
        }
      })
  }, [])


  const validateForm = () => {
    let errors = {}

    if (!phoneNumber) errors.phoneNumber = 'Phone number is required'

    setErrors(errors)

    return Object.keys(errors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Submitted', phoneNumber);
      setPhoneNumber('')
      setErrors({})
      navigation.navigate('OtpCode')
    }
    else {
      showErrorToast()
    }
  }


  const onChangePhone = (number) => {
    setPhoneNumber(number)
    console.log('+263' + number);
    phone = number
  }

  const showErrorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Error logging in',
      text2: 'Please enter correct phone number',
      visibilityTime: 2000
    })
  }




  function renderAreaCodes() {

    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            padding: 10,
            flexDirection: 'row'
          }}
          onPress={() => {
            setSelectedArea(item)
            setModalVisible(false)
          }}
        >
          <Image
            source={{ uri: item.flag }}
            style={{
              height: 30,
              width: 30,
              marginRight: 10
            }}
          />
          <Text style={{
            fontSize: 16,
            color: "#fff"
          }}>{item.item}</Text>
        </TouchableOpacity>
      )
    }

    return (
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
      >
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(false)}
        >
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <View
              style={{
                height: 400,
                width: width * 0.8,
                color: "#fff",
                backgroundColor: COLORS.primary,
                borderRadius: 12
              }}
            >
              <FlatList
                data={areas}
                renderItem={renderItem}
                keyExtractor={(item) => item.code}
                verticalScrollIndicator={false}
                style={{
                  padding: 20,
                  marginBottom: 20
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={[tw`h-full`, styles.container]}>
      <SafeAreaView style={[tw`m-4 h-full flex-1`]}>
        <BackButton />

        <View style={[tw`mt-16`]}>
          <View style={[tw``]}>
            <Text style={[tw`text-2xl font-bold`, { color: COLORS.primary }]}>Phone number</Text>
            <Text style={[tw`text-sm text-gray-400`]}>
              Enter your number to create an account
            </Text>
          </View>
          <View style={{ width: "100%", paddingHorizontal: 5, paddingVertical: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={{
                width: 80,
                height: 50,
                marginHorizontal: 5,
                borderBottomColor: errors.phoneNumber ? "red" : COLORS.gray,
                borderBottomWidth: 1,
                flexDirection: "row",
                fontSize: 12
              }}
                onPress={() => setModalVisible(true)}
              >

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginRight: 20 }}>
                  <View style={{ justifyContent: "center", marginRight: 5 }}>
                    <Icon name="down" color={errors.phoneNumber ? "red" : COLORS.gray} />
                  </View>
                  <View style={{ justifyContent: "center", marginLeft: 5 }}>
                    {/* {
                      selectedArea?.flag !== "" ?
                        <Image
                          source={{ uri: selectedArea?.flag || flag }}
                          resizeMode="contain"
                          style={{
                            width: 30,
                            height: 30
                          }}
                        /> :
                        null
                    } */}
                    <Image
                      source={flag}
                      resizeMode="contain"
                      style={{
                        width: 30,
                        height: 30
                      }}
                    />
                  </View>
                  <View style={{ justifyContent: "center", marginLeft: 5 }}>
                    <Text style={{ color: errors.phoneNumber ? "red" : COLORS.gray, fontSize: 12 }}>+263</Text>
                  </View>
                </View>

              </TouchableOpacity>
              <View style={{ marginLeft: 10, width: '75%' }}>
                <TextInput
                  style={{
                    flex: 1,
                    borderBottomColor: errors.phoneNumber ? "red" : COLORS.gray,
                    borderBottomWidth: 1,
                    height: 40,
                    fontSize: 20,
                    color: '#111',
                    width: '100%',
                    fontSize: 16
                  }}
                  placeholder='Phone number'
                  placeholderTextColor={errors.phoneNumber ? "red" : COLORS.gray}
                  keyboardType='number-pad'
                  onChangeText={onChangePhone}
                  value={phoneNumber}
                  autoCompleteType="password"
                />
              </View>
            </View>
          </View>
          <View>
            {
              errors.phoneNumber ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.phoneNumber}</Text> : null
            }
          </View>
        </View>

        <View style={[tw`absolute bottom-10 w-full`]}>
          <FillButton
            name={'Submit number'}
            onPress={() => handleSubmit()}
          />
        </View>
      </SafeAreaView>
      {renderAreaCodes()}
      <Toast />
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    height: hp(100)
  },
  title: {
    height: hp(10)
  },
  inputWrapper: {
    height: hp(10)
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginTop: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
    width: '100%'
  },
});
