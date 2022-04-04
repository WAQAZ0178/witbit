//import liraries
import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../../services/colors';
import {mvs} from '../../services/metrices';
import AntDesign from 'react-native-vector-icons/AntDesign';

// create a component
const MiniButton = ({
  onpress,
  disbale,
  title,
  backcolor = '#FC6011',
  textcolor = 'white',
  plus = false,
  minus = false,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onpress}
      disabled={disbale}
      style={{...styles.container, ...style, backgroundColor: backcolor}}>
      {plus ? (
        <AntDesign name="plus" size={15} color={colors.white} />
      ) : minus ? (
        <AntDesign name="minus" size={15} color={colors.white} />
      ) : (
        <Text style={{color: textcolor}}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: mvs(50),
    height: mvs(25),
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: colors.primary,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MiniButton;
