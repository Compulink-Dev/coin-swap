import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import BackButton from '../../components/BackButton'

const Forgot = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            enabled={false}
            style={[tw`h-full w-full `]}>
            <SafeAreaView style={tw`m-4 h-full w-full flex-1`}>
                <BackButton />
                <View>
                    <Text style={styles.titleText}>New OtpCode has been sent to your phone</Text>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default Forgot

const styles = StyleSheet.create({
    titleText: {
        marginTop: 80,
        textAlign: 'center',
    }
})