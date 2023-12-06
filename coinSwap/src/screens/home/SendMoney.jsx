import { View, Text, Modal, Pressable, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import FillButton from '../../components/FillButton';
import OutlineButton from '../../components/OutlineButton';
import { COLORS } from '../../constants';

const SendMoney = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={[tw`mt-10 mx-4 h-full`]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[
                tw` p-4 rounded-full`,
                { backgroundColor: `${COLORS.primary}` },
              ]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={[tw``]}>
        <View style={[tw`flex justify-center items-center my-8`]}>
          <Image
            source={require('../../assets/deposit.png')}
            style={[tw`h-40 w-40`]}
          />
        </View>

        <Text style={[tw`text-center font-bold text-2xl`]}>Send Money</Text>
      </View>

      <View style={[tw`my-8 flex justify-center items-center`]}>
        <Text>You are Sending</Text>
        <View style={[tw`flex-row my-4`, { gap: 4 }]}>
          <Text style={[tw`font-bold text-3xl`]}>$</Text>
          <Text style={[tw`font-bold text-3xl`]}>45.00</Text>
        </View>

        <Text>to</Text>

        <Text style={[tw`font-bold text-3xl my-4`]}>Food World</Text>
      </View>

      <View
        style={[
          tw`absolute bottom-20 flex-col justify-center items-center w-full left-0`,
          { gap: 10 },
        ]}>
        <FillButton name="Confirm" />
        <OutlineButton name="Cancel" onPress={() => navigation.goBack()} />
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

export default SendMoney;
