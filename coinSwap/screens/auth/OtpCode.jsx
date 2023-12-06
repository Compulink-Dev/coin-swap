import { View, Text, StyleSheet, Alert, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import FillButton from '../../components/FillButton';
import { AuthContext } from '../../context/auth-context';
import { TextInput } from 'react-native-gesture-handler';
import { COLORS } from '../../constants';
import Toast from 'react-native-toast-message'


const OtpCode = ({ value, disabled, onChange }) => {
  const lengthInput = 6
  const defaultCountdown = 5


  const [internalVal, setInternalVal] = useState('')
  const [enableResend, setEnableResend] = useState(false)
  const [countdown, setCountdown] = useState(defaultCountdown)

  const navigation = useNavigation()

  let clockCall = null
  let textInput = useRef(null)


  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Login successful',
      text2: 'Congratulations on creating an account',
      visibilityTime: 1000,
      topOffset: 10
    })
  }


  const decrementClock = () => {
    if (countdown === 0) {
      setEnableResend(true)
      setCountdown(0)
      clearInterval(clockCall)
    } else
      setCountdown(countdown - 1)
  }

  const onResendOTP = () => {
    if (enableResend) {
      setCountdown(defaultCountdown)
      setEnableResend(false)
      clearInterval(clockCall)
      clockCall = setInternalVal(() => {
        decrementClock(0)
      }, 1000)
    }
  }

  const onChangeNumber = () => {
    setInternalVal('')
    navigation.navigate('Congratulation')
  }


  const onChangeText = (val) => {
    setInternalVal(val)
    if (val.length == lengthInput) {
      setInternalVal('')
      navigation.navigate('Congratulation')
    }
  }

  useEffect(() => {
    clockCall = setInterval(() => {
      decrementClock()
    }, 1000)
    return () => {
      clearInterval(clockCall)
    }
  })

  useEffect(() => {
    textInput.focus()
  }, [])


  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={'padding'}
        style={styles.containerAvoidingView}
      >
        <BackButton />
        <View style={{ marginTop: 40 }}>
          <Text style={styles.textTitle}>{'Input your OTP code via SMS'}</Text>
          <View>
            <TextInput
              ref={(input) => textInput = input}
              onChangeText={onChangeText}
              style={{ width: 20, height: 20 }}
              value={internalVal}
              maxLength={lengthInput}
              returnKeyType='done'
              keyboardType='number-pad'
            />
            <View style={styles.containerInput}>
              {
                Array(lengthInput).fill().map((data, index) => (
                  <View
                    style={[styles.cellView,
                      // {
                      //     borderBottomColor: index === internalVal.length ? COLORS.gradientForm : COLORS.dark
                      // }
                    ]}
                    key={index}
                  >
                    <Text
                      style={styles.cellText}
                      onPress={() => textInput.focus()}
                    >
                      {internalVal && internalVal.length > 0 ? internalVal[index] : ''}
                    </Text>
                  </View>
                ))
              }
            </View>
          </View>
          <View style={styles.bottomView}>
            <TouchableOpacity onPress={onChangeNumber}>
              <View style={styles.btnChangeNumber}>
                <Text style={styles.textChange}>
                  Change Number
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onResendOTP}>
              <View style={styles.btnResend}>
                <Text style={[styles.textResend,
                {
                  color: enableResend ? '#234db7' : 'gray'
                }
                ]}>
                  Resend OTP {`[ ${countdown}s ]`}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Toast />
      </KeyboardAvoidingView>
    </View>
  )
}

export default OtpCode

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  containerAvoidingView: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  textTitle: {
    marginTop: 20,
    marginBottom: 50,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cellView: {
    paddingVertical: 11,
    width: 40,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1.5
  },
  cellText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  bottomView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 50,
    alignItems: 'flex-end'
  },
  btnChangeNumber: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  textChange: {
    color: COLORS.primary,
    fontSize: 16
  },
  btnResend: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  textResend: {
    alignItems: 'center'

  }

})