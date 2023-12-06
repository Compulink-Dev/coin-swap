import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import BackButton from '../../components/BackButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import FillButton from '../../components/FillButton'

const Password = () => {

    const navigation = useNavigation();

    const { test } = useContext(AuthContext)

    const [email, setEmail] = useState()
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        let errors = {}

        if (!email) errors.email = 'Email is required'

        setErrors(errors)

        return Object.keys(errors).length === 0
    }

    const handleSubmit = () => {
        if (validateForm()) {
            console.log('Submitted', email);
            setEmail('')
            setErrors({})
            navigation.navigate('Password')
        }
        else {
            showErrorToast()
        }
    }

    const onChangeEmail = (email) => {
        setEmail(email)
        console.log(email);
    }

    const showErrorToast = () => {
        Toast.show({
            type: 'error',
            text1: 'Error in checking in ',
            text2: 'Please enter your email',
            visibilityTime: 2000
        })
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
                        <Text style={[tw`text-2xl font-bold`]}>Email</Text>
                        <Text style={[tw` text-gray-400 `]}>Enter your email address</Text>
                        <Text>{test}</Text>
                    </View>

                    <View>
                        <TextInput style={styles.input} placeholder="Email" onChangeText={onChangeEmail} />
                        {
                            errors.email ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.email}</Text> : null
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
        </KeyboardAvoidingView>
    )
}

export default Password

const styles = StyleSheet.create({})