import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'tailwind-react-native-classnames';
import {COLORS} from '../constants';

const AddUserModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
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
                tw`p-4 rounded-full`,
                {backgroundColor: `${COLORS.primary}`},
              ]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[tw` p-4 rounded-full`, {color: `${COLORS.primary}`}]}
        onPress={() => setModalVisible(true)}>
        <Text style={[tw`text-white`]}>Show Modals</Text>
      </Pressable>
      <TouchableOpacity
        style={[tw`p-6 rounded-full my-4`, {color: `${COLORS.primary}`}]}
        onPress={() => setModalVisible(true)}>
        <Text style={[tw`text-white`]}>Show Modal</Text>
      </TouchableOpacity>
    </View>
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

export default AddUserModal;
