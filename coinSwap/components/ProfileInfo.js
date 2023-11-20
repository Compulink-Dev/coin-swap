import {
  View,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import FillButton from './FillButton';
import Icon from "react-native-vector-icons/FontAwesome"
import OutlineButton from './OutlineButton';
import FormInput from './FormInput';
import { useNavigation } from '@react-navigation/native';

const ProfileInfo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={[tw`flex-1 justify-center items-center`]}>
          <View style={[tw`w-3/4 bg-white px-4 py-2 shadow-lg rounded-lg`]}>
            <Text style={[tw`text-lg font-bold`]}>
              Edit your profile
            </Text>
            {/* <View
              style={[
                tw`flex-col w-full items-center justify-center`,
                { gap: 4 },
              ]}>
              <FillButton
                name="Save"
                onPress={() => setModalVisible(!modalVisible)}
                style={tw`w-full`}
              />
              <View style={tw`w-full mt-2`}>
                <OutlineButton
                  name="Cancel"
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </View>
            </View> */}

            <View style={[tw`-mt-4`]}>
              <FormInput
                placeholder={'Username'}
              />
            </View>
            <View style={[tw`-mt-4`]}>
              <FormInput
                placeholder={'Email'}
              />
            </View>
            <View style={[tw`-mt-4`]}>
              <FormInput
                placeholder={'Phone number'}
              />
            </View>
            <View style={[tw`-mt-4`]}>
              <FormInput
                placeholder={'Location'}
              />
            </View>
            <View style={[tw`-mt-4`]}>
              <FormInput
                placeholder={'Password'}
              />
            </View>
            <View style={[tw`my-4`]}>
              <FillButton
                name={'Save Changes'}
              />

            </View>
            <View style={[tw`mb-4`]}>
              <OutlineButton
                name={'Cancel'}
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
        </View>
      </Modal>

      <View style={[tw`h-full`]}>
        <Text style={[tw`font-bold text-lg text-gray-400`]}>Profile</Text>
        <ScrollView>
          <View style={[tw`flex flex-row items-center justify-center my-6`, { gap: 40 }]}>
            <View style={[tw`flex items-center justify-center`]}>
              <Text style={[tw`text-4xl font-bold`]}>34</Text>
              <Text style={[tw``]}>Merchants</Text>
            </View>
            <View style={[tw`flex items-center justify-center`]}>
              <Text style={[tw`text-4xl font-bold`]}>12</Text>
              <Text style={[tw``]}>Clients</Text>
            </View>
            <View style={[tw`flex items-center justify-center`]}>
              <Text style={[tw`text-4xl font-bold`]}>45</Text>
              <Text style={[tw``]}>Transactions</Text>
            </View>
          </View>
          <View style={[tw`pt-2 flex `, { gap: 10 }]}>
            <View style={[tw`flex flex-row items-center justify-between`]}>
              <Text style={[tw``]}></Text>
              <Text style={[tw``]}></Text>
            </View>
            <View style={[tw`flex flex-row items-center justify-center`, { gap: 20 }]}>
              <Icon name='envelope-o' style={[tw`text-2xl flex-1`]} />
              <Text style={[tw`text-sm`]}>lloydm@compulink.co.zw</Text>
            </View>
            <View style={[tw`flex flex-row items-center justify-center`, { gap: 20 }]}>
              <Icon name='mobile' style={[tw`text-3xl flex-1`]} />
              <Text style={[tw`text-sm`]}>+236 778 191 278</Text>
            </View>
            <View style={[tw`flex flex-row items-center justify-center`, { gap: 20 }]}>
              <Icon name='user' style={[tw`text-2xl flex-1`]} />
              <Text style={[tw`text-sm`]}>Sales Rep</Text>
            </View>
            <View style={[tw`flex flex-row items-center justify-center`, { gap: 20 }]}>
              <Icon name='map-pin' style={[tw`text-2xl flex-1`]} />
              <Text style={[tw`text-sm`]}>Harare</Text>
            </View>

          </View>
        </ScrollView>
        <View style={tw`absolute bottom-8 w-full`}>
          <FillButton
            name="Edit Profile"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ProfileInfo;
