import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { mvs } from '../../services/metrices';
import fonts from '../../services/fonts'
type FcProps={
    label?:string;
    numberOfLines?:number;
    style?:object;
    props?:{
      children: JSX.Element
    };
  }
const Light: React.FC<FcProps>=(props) => {
    const {label,style}=props
    return <Text {...props} style={{...styles.label,...style}}>{label}</Text>;
}

export default Light

const styles = StyleSheet.create({
    label:{
        fontFamily:fonts.carosSoftLight,
        fontSize:mvs(15),
    }
});
