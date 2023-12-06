import { StyleSheet, Text, View, Button, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

const OtpPass = () => {

    const [internalVal, setInternalVal] = useState('')

    const textInput = useRef(null)
    const lengthInput = 6
    const onChangeText = (val) => {

    }

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
                <Text style={styles.titleStyle}>{'Input your OTP code via SMS'}</Text>
                <View>
                    <TextInput
                        ref={(input) => textInput = input}
                        onChangeText={onChangeText}
                        style={{ width: 0, height: 0 }}
                        value={internalVal}
                        maxLength={lengthInput}
                        returnKeyType='done'
                        keyboardType='numeric'
                    />
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default OtpPass

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerAvoidingView: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    textTitle: {
        marginTop: 50,
        marginBottom: 50,
        fontSize: 16
    }
})