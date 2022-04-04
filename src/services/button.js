/**
* @providesModule ButtonStyles
*/
import { StyleSheet } from 'react-native';
import colors from './colors';
import { mvs } from './metrices';


export const buttonStyles = StyleSheet.create({
  buttonPrimary: {
    height: mvs(50),
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colors.primary,
    borderRadius: mvs(10),
    width:'100%'
  },
  buttonSecondary: {
    height: mvs(50),
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colors.white,
    borderRadius: mvs(10),
    borderWidth:0.7,
    borderColor:colors.border,
    width:'100%'
  },
  plus_button: {
    position: 'absolute',
    bottom: mvs(20),
    right: mvs(20),
    width: mvs(50),
    height: mvs(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: mvs(25),
    backgroundColor: colors.primary,
  },
 
});

export default buttonStyles