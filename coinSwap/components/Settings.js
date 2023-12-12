import { KeyboardAvoidingView, SafeAreaView, Switch, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { COLORS } from '../constants'
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import IonIcon from 'react-native-vector-icons/Ionicons'
import Octicon from 'react-native-vector-icons/Octicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Settings = () => {

    const [isEnabled, setIsEnabled] = useState(false)
    const [isEnabled2, setIsEnabled2] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState)

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            enabled={false}
            style={[tw``, styles.container]}>
            <SafeAreaView>
                <View style={[tw`h-full`]}>
                    <Text style={[tw`font-bold text-lg text-gray-400`, { color: `${COLORS.primary}` }]}>Settings</Text>
                    <ScrollView>
                        <View style={[styles.profile]}>
                            <Text style={[tw`mt-2`, { color: COLORS.primary }]}>Profile</Text>
                            <View style={[tw`border rounded`, { borderColor: COLORS.primary }]}>
                                <TouchableOpacity style={[tw`items-center p-2 flex-row`, { gap: 10 }]}>
                                    <McIcon name='email' style={[tw`text-3xl`, { color: COLORS.primary }]} />
                                    <Text style={[tw``, { color: COLORS.primary }]}>Change email</Text>
                                </TouchableOpacity>
                                <View style={[tw`w-full`, { height: 1, backgroundColor: COLORS.grayLight }]} />
                                <TouchableOpacity style={[tw`items-center p-2 flex-row`, { gap: 10 }]}>
                                    <McIcon name='key-variant' style={[tw`text-3xl`, { color: COLORS.primary }]} />
                                    <Text style={[tw``, { color: COLORS.primary }]}>Change password</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={[tw``, styles.display]}>
                            <Text style={[tw`mt-2`, { color: COLORS.primary }]}>Display</Text>
                            <View style={[tw`border rounded`, { borderColor: COLORS.primary }]}>
                                <View style={[tw`flex-row items-center justify-between`]}>
                                    <View style={[tw`items-center p-2 flex-row`, { gap: 10 }]}>
                                        <IonIcon name='notifications' style={[tw`text-3xl`, { color: COLORS.primary }]} />
                                        <Text style={[tw``, { color: COLORS.primary }]}>Notification</Text>
                                    </View>
                                    <Switch
                                        trackColor={{ false: COLORS.grayLight, true: COLORS.primary }}
                                        thumbColor={isEnabled ? COLORS.grayLight : COLORS.primary}
                                        ios_backgroundColor={COLORS.primary}
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />
                                </View>
                                <View style={[tw`w-full`, { height: 1, backgroundColor: COLORS.grayLight }]} />

                                <View style={[tw`w-full`, { height: 1, backgroundColor: COLORS.grayLight }]} />
                                <View style={[tw`flex-row items-center justify-between`]}>
                                    <View style={[tw`items-center p-2 flex-row`, { gap: 10 }]}>
                                        <IonIcon name='notifications' style={[tw`text-3xl`, { color: COLORS.primary }]} />
                                        <Text style={[tw``, { color: COLORS.primary }]}>Notification</Text>
                                    </View>
                                    <Switch
                                        trackColor={{ false: COLORS.grayLight, true: COLORS.primary }}
                                        thumbColor={isEnabled2 ? COLORS.grayLight : COLORS.primary}
                                        ios_backgroundColor={COLORS.primary}
                                        onValueChange={toggleSwitch2}
                                        value={isEnabled2}
                                    />
                                </View>
                            </View>
                        </View>



                        <View style={[tw``, styles.others]}>
                            <Text style={[tw`mt-2`, { color: COLORS.primary }]}>Others</Text>
                            <View style={[tw`border rounded`, { borderColor: COLORS.primary }]}>
                                <TouchableOpacity style={[tw`items-center p-2 flex-row`, { gap: 10 }]}>
                                    <Octicon name='report' style={[tw`text-3xl`, { color: COLORS.primary }]} />
                                    <Text style={[tw``, { color: COLORS.primary }]}>Report a bug</Text>
                                </TouchableOpacity>
                                <View style={[tw`w-full`, { height: 1, backgroundColor: COLORS.grayLight }]} />
                                <View style={[tw`w-full`, { height: 1, backgroundColor: COLORS.grayLight }]} />
                                <TouchableOpacity style={[tw`items-center p-2 flex-row`, { gap: 10 }]}>
                                    <McIcon name='logout' style={[tw`text-3xl`, { color: COLORS.primary }]} />
                                    <Text style={[tw``, { color: COLORS.primary }]}>Logout</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        height: hp(70)
    },
    profile: {
        height: hp(20)
    },
    display: {
        height: hp(20)
    },
    others: {
        height: hp(20)
    }
})