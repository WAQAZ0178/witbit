import { number } from 'prop-types';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../services/colors';
import fonts from '../../services/fonts';
import { mvs } from '../../services/metrices';
type FcProps={
  label?:string|number;
  numberOfLines?:number;
  onPress?:()=>void;
  style?:object;
  props?:{
    children?: JSX.Element
  };
}
const Regular: React.FC<FcProps>= ({label,numberOfLines=100,style,...props}) => {
  return <Text numberOfLines={numberOfLines} {...props} style={{...styles.label,...style}}>{label}{props.children}</Text>;
};

export default Regular;

const styles = StyleSheet.create({
    label:{
        fontFamily:fonts.carosSoftRegular,
        fontSize:mvs(15),
        color:colors.headerTitle,//default color
    }
});
