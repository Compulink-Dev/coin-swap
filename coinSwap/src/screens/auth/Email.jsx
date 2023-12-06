import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
} from 'react-native';
import React, { useContext, useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/FillButton';
import FillButton from '../../components/FillButton';
import { AuthContext } from '../../context/auth-provider';
import Toast from 'react-native-toast-message';

const Email = () => {
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
                        name={'Continue'}
                        onPress={() => handleSubmit()}
                    />
                </View>
            </SafeAreaView>
            <Toast />
        </KeyboardAvoidingView>
    );
};

export default Email;

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
