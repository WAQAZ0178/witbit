/**
 * @providesModule ButtonStyles
 */
import { StyleSheet } from 'react-native';
import colors from '../services/colors';
import fonts from '../services/fonts';
import {
  mvs
} from '../services/metrices';

export const INPUT_STYLES = StyleSheet.create({
  LABLE_STYLE: {
    fontSize: mvs(15),
    color: colors.text,
  },
  INPUT_TXT: {
    color: colors.primary,
    paddingLeft: 0,
    fontSize: mvs(15),
    fontFamily: fonts.carosSoftRegular,
    height: mvs(40),
    marginBottom: mvs(15),
    borderColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  SECONDARY_INPUT: {
    backgroundColor: colors.secondary,
    height: mvs(38),
    width: '100%',
    padding: 0,
    borderRadius: mvs(10),
    paddingHorizontal: mvs(10),
    color: colors.primary
  },
  SEND_CODE: { position: 'absolute', right: mvs(0), top: mvs(10), color: colors.primary, textDecorationLine: 'underline', fontSize: mvs(13) },
  REVIEW_CONTAINER: {
    padding: mvs(20),
    backgroundColor: colors.secondary,
    borderRadius: mvs(15),
    minHeight:mvs(100)
  },
  REVIEW_LABEL_CONTAINER: {
    backgroundColor: colors.white,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: mvs(12),
    paddingHorizontal: mvs(35),
    paddingVertical: mvs(6),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
  // INPUT_CONTAINER: {
  //     // padding:0,
  //     height:mvs(55),
  //     backgroundColor:'gray',
  //     // marginBottom: scale(15),
  //     borderBottomWidth: StyleSheet.hairlineWidth,
  //     borderColor:colors.border,
  //     borderWidth:1
  // },
});
