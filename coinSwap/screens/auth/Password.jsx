import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import BackButton from '../../components/BackButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import FillButton from '../../components/FillButton'
import { AuthContext } from '../../context/auth-context'
import Toast from 'react-native-toast-message';

const Password = () => {

    const navigation = useNavigation();

    const { test } = useContext(AuthContext)

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        let errors = {}

        if (!password) errors.password = 'Password is required'
        if (!confirmPassword) errors.confirmPassword = 'Password is required'
        if (password != confirmPassword) errors.confirmPassword = 'Passwords do not match'

        setErrors(errors)

        return Object.keys(errors).length === 0
    }

    const handleSubmit = () => {
        if (validateForm()) {
            console.log('Submitted', password);
            setPassword('')
            setConfirmPassword('')
            setErrors({})
            navigation.navigate('Register')
        }
        else {
            showErrorToast()
        }
    }

    const onChangePassword = (password) => {
        setPassword(password)
        console.log(password);
    }

    const onChangeConfirmPassword = (confirmPassword) => {
        setConfirmPassword(confirmPassword)
        console.log(confirmPassword);
    }


    const showErrorToast = () => {
        if (!password) {
            Toast.show({
                type: 'error',
                text1: 'Error in checking in ',
                text2: 'Please enter your password',
                visibilityTime: 2000
            })
        }
        if (!confirmPassword) {
            Toast.show({
                type: 'error',
                text1: 'Error in checking in ',
                text2: 'Please confirm your password',
                visibilityTime: 2000
            })
        }

        if (!password && !confirmPassword) {
            Toast.show({
                type: 'error',
                text1: 'Error in checking in ',
                text2: 'Please fill in the details below',
                visibilityTime: 2000
            })
        }
        if (password != confirmPassword) {
            Toast.show({
                type: 'error',
                text1: 'Error in checking in ',
                text2: 'Passwords does not match',
                visibilityTime: 2000
            })
        }
    }



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            enabled={false}
            style={[tw`h-full `]}>
            <SafeAreaView style={[tw`m-4 h-full`]}>
                <BackButton />
                <View style={[tw`mt-16`]}>
                    <View style={[tw``]}>
                        <Text style={[tw`text-2xl font-bold`]}>Password</Text>
                        <Text style={[tw` text-gray-400 `]}>Enter your password</Text>
                        <Text>{test}</Text>
                    </View>

                    <View>
                        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={onChangePassword} />
                        {
                            errors.password ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.password}</Text> : null
                        }
                    </View>
                    <View>
                        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} onChangeText={onChangeConfirmPassword} />
                        {
                            errors.password ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.confirmPassword}</Text> : null
                        }
                    </View>
                </View>

                <View style={[tw`absolute bottom-20 w-full`]}>
                    <FillButton
                        name={'Confirm'}
                        onPress={() => handleSubmit()}
                    />
                </View>
            </SafeAreaView>
            <Toast />
        </KeyboardAvoidingView>
    )
}

export default Password

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        marginTop: 10,
        borderRadius: 5,
        height: 55,
        paddingVertical: 0,
    },
});
