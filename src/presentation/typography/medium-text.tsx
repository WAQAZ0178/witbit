import { number } from 'prop-types';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import fonts from '../../services/fonts'
type FcProps={
    label?:string|number;
    numberOfLines?:number;
    style?:object;
    props?:{
      children: JSX.Element
    };
  }
const Medium: React.FC<FcProps>=({label,style,...props}) => {
    //const {label,style}=props
    return <Text {...props} style={{...styles.label,...style}}>{label}</Text>;
}
 
export default Medium

const styles = StyleSheet.create({
    label:{
        fontFamily:fonts.carosSoftMedium,
    }
});
