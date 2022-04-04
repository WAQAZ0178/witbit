import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import fonts from '../../services/fonts'
type FcProps={
    label?:string;
    numberOfLines?:number;
    style?:object;
    props?:{
      children: JSX.Element
    };
  }
const Bold : React.FC<FcProps>= (props) => {
    const {label,style}=props
    return <Text {...props} style={{...styles.label,...style}}>{label}</Text>;
}

export default Bold

const styles = StyleSheet.create({
    label:{
        fontFamily:fonts.carosSoftBold,
    }
});
