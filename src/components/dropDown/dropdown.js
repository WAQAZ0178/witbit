//import liraries
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './dropdown.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../services/colors';
import ReactNativeModal from 'react-native-modal';

// create a component
const DropDown = ({selected, setSelected, list, title}) => {
  const [showmodal, setshowmodal] = useState(false);
  const renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelected(item.name), setshowmodal(false);
        }}
        style={styles.item}>
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => setshowmodal(true)}
        style={styles.container}>
        <Text style={styles.title}>{selected ? selected : title}</Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={20}
          color={colors.darkGray}
        />
      </TouchableOpacity>
      <ReactNativeModal
        onBackButtonPress={() => setshowmodal(false)}
        onBackdropPress={() => setshowmodal(false)}
        backdropColor="transparent"
        isVisible={showmodal}>
        <View style={styles.modalView}>
          <FlatList
            data={list}
            contentContainerStyle={styles.flatlistStyle}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default DropDown;
