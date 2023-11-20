import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import ProfileInfo from '../../components/ProfileInfo';
import Statistics from '../../components/Statistics';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants';

const Profile = () => {
  const [profile, setProfile] = useState(true);
  return (
    <SafeAreaView>
      <View style={[tw`h-full px-4`]}>
        <View style={[tw`flex-row items-center mt-2`, { gap: 8 }]}>
          <Ionicons name='person-circle' style={[tw`text-4xl`, { color: `${COLORS.primary}` }]} />
          <View style={[tw`pt-4`]}>
            <Text style={[tw`font-bold text-2xl text-gray-600`]}>
              Lloyd Matare
            </Text>
            <Text>Occupation</Text>
          </View>
        </View>

        <View style={[tw`flex justify-center mt-4`]}>
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
              <Text style={tw``}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                tw`border border-blue-900 flex justify-center items-center w-44 px-4 py-1 rounded-lg`,
              ]}
              onPress={() => setProfile(false)}>
              <Ionicons
                name="stats-chart"
                style={[tw`text-2xl`, { color: `${COLORS.primary}` }]}
              />
              <Text style={tw``}>Statistics</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={tw`mt-6 flex-1`}>
          {profile ? <ProfileInfo /> : <Statistics />}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
