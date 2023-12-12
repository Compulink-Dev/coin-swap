import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import ProfileInfo from '../../components/ProfileInfo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants';
import { AuthContext } from '../../context/auth-context';
import { useNavigation } from '@react-navigation/native';
import Settings from '../../components/Settings';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Profile = () => {
  const [profile, setProfile] = useState(true);
  const { logout, userToken } = useContext(AuthContext)
  const navigation = useNavigation()

  const onLogOut = () => {
    { logout() }
    console.log({ userToken });
  }

  const handleLogout = () => {
    onLogOut()
    navigation.navigate('Onboarding')

  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={[tw`h-full`, styles.container]}>
      <SafeAreaView>
        <View style={[tw`h-full px-4`]}>
          <View style={styles.header}>
            <View style={[tw`flex-row justify-between items-center`]}>
              <View style={[tw`flex-row items-center mt-2`, { gap: 8 }]}>
                <Ionicons name='person-circle' style={[tw`text-4xl`, { color: `${COLORS.primary}` }]} />
                <View style={[tw`pt-4`]}>
                  <Text style={[tw`font-bold text-2xl text-gray-600`, { color: `${COLORS.primary}` }]}>
                    Lloyd Matare
                  </Text>
                  <Text style={{ color: COLORS.primary }}>Sales Rep</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => handleLogout()}
              >
                <Text style={{ color: COLORS.primary }}>Sign Out</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[tw`flex justify-center mt-4`, styles.select]}>
            <View
              style={[
                tw`px-2 pt-2 flex-row justify-center items-center`,
                { gap: 8 },
              ]}>
              <TouchableOpacity
                style={[
                  tw`border border-blue-900 flex justify-center items-center w-44 px-4 py-1 rounded-lg`,
                ]}
                onPress={() => setProfile(true)}>
                <Ionicons
                  name="person"
                  style={[tw`text-2xl`, { color: `${COLORS.primary}`, }]}
                />
                <Text style={[tw``, { color: `${COLORS.primary}` }]}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  tw`border border-blue-900 flex justify-center items-center w-44 px-4 py-1 rounded-lg`,
                ]}
                onPress={() => setProfile(false)}>
                <Ionicons
                  name="settings"
                  style={[tw`text-2xl`, { color: `${COLORS.primary}` }]}
                />
                <Text style={[tw``, { color: `${COLORS.primary}` }]}>Settings</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[tw`mt-6 flex-1`, styles.content]}>
            {profile ? <ProfileInfo /> : <Settings />}
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Profile;


const styles = StyleSheet.create({
  container: {
    height: hp(100)
  },
  header: {
    height: hp(10)
  },
  select: {
    height: hp(10)
  },
  content: {
    height: hp(70)
  }
})