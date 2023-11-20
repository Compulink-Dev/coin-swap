import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import { COLORS } from '../../constants';
import FillButton from '../../components/FillButton';


const Code = ({ value, disabled, onChange }) => {
    const navigation = useNavigation();

    const inputRefs = useRef([])

    // const onChangeValue = ({ text, index }) => {
    //     const newValue = value.map((item, valueIndex) => {
    //         if (valueIndex === index) {
    //             return text
    //         }
    //         return item
    //     })

    //     onChange(newValue)
    // }

    const handleChange = (text, index) => {
        // onChangeValue(text, index)

        if (text.length !== 0) {
            return inputRefs?.current[index + 1]?.focus()
        }

        return inputRefs?.current[index - 1]?.focus()
    }
    return (
        <SafeAreaView style={[tw`m-4 h-full flex-1 relative h-full`]}>
            <BackButton />
            <View style={[tw`mt-16`]}>
                <View>
                    <Text>Enter Passcode</Text>
                    <View style={[tw`mt-8 flex flex-row w-full justify-between`]}>
                        {[...new Array(6)].map((item, index) => (
                            <TextInput
                                ref={ref => {
                                    if (ref && !inputRefs.current.includes(ref)) {
                                        inputRefs.current = [...inputRefs.current, ref]
                                    }
                                }}
                                key={index}
                                style={[tw`w-12 h-12 border border-blue-900 rounded text-center flex mb-4`]}
                                maxLength={1}
                                contextMenuHidden
                                selectTextOnFocus
                                editable={!disabled}
                                keyboardType='decimal-pad'
                                testID={`Code-${index}`}
                                onChangeText={text => handleChange(text, index)}
                            />
                        ))}
                    </View>
                </View>
            </View>
            <View style={[tw`absolute bottom-8 w-full`]}>
                <FillButton
                    name={'Submit Passcode'}
                    onPress={() => navigation.navigate('BottomNavigation')}
                />
            </View>
        </SafeAreaView>
    )
}

export default Code

const styles = StyleSheet.create({
    loginBtnWrapper: {
        height: 55,
        marginTop: 60,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
    },
})