import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import { COLORS } from '../../constants';

const PassCode = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[tw`m-4 h-full flex-1`]}>
      <View style={[tw``]}>
        <BackButton />

        <View style={[tw`mt-28 flex items-center`]}>
          <Text style={[tw`text-3xl font-bold`]}>Enter passcodes</Text>
        </View>

        <View style={[tw`mt-10 flex justify-center items-center`]}>
          <TextInput
            placeholder="Enter your passcode to log ins"
            style={[tw`text-xs`]}
          />
        </View>

        <View style={[tw`mt-8 px-20`]}>
          <View style={[tw`flex-row justify-between`]}>
            <TouchableOpacity>
              <Text style={[tw`text-2xl font-bold`]}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[tw`text-2xl font-bold`]}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[tw`text-2xl font-bold`]}>3</Text>
            </TouchableOpacity>
          </View>

          <View style={[tw`flex-row justify-between mt-12`]}>
            <TouchableOpacity style={[tw]}>
              <Text style={[tw`text-2xl font-bold`]}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[tw`text-2xl font-bold`]}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[tw`text-2xl font-bold`]}>6</Text>
            </TouchableOpacity>
          </View>

          <View style={[tw`flex-row justify-between mt-12`]}>
            <TouchableOpacity>
              <Text style={[tw`text-2xl font-bold`]}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[tw`text-2xl font-bold`]}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[tw`text-2xl font-bold`]}>9</Text>
            </TouchableOpacity>
          </View>

          <View style={[tw`flex-row justify-between mt-12`]}>
            <TouchableOpacity>
              <Text style={[tw`text-2xl font-bold`]}></Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[tw`text-2xl font-bold`]}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[tw`text-2xl font-bold`]}></Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={[tw`flex justify-center items-center mt-12`]}
        onPress={() => navigation.navigate('BottomNavigation')}>
        <Text style={{ color: COLORS.primary }}>Forgot Passcode ?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PassCode;
