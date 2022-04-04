import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';

import colors from '../../services/colors';
import {mvs} from '../../services/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: '100%',
    height: mvs(400),
    resizeMode: 'cover',
  },
  detailsContainer: {
    backgroundColor: colors.offWhite,
    position: 'absolute',
    height: mvs(500),
    zIndex: 1,
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: mvs(30),
    marginTop: mvs(10),
  },
  itemNameText: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '500',
    marginTop: mvs(30),
  },
  descriptionContainer: {
    // borderWidth: 1,
    // borderColor: 'red',
    marginTop: mvs(15),
    paddingBottom: mvs(20),
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  descriptionHeading: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '500',
  },
  descriptiondetails: {
    paddingTop: mvs(10),
    color: colors.black,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
  },
  customizeText: {
    paddingTop: mvs(10),
  },
  earningText: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '600',
  },
  numberofPortionView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: mvs(10),
  },
  miniButtnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: mvs(160),
  },
  rattingcontainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  starContainer: {
    flexDirection: 'row',
  },
  rattingText: {
    color: colors.primary,
    fontSize: 16,
  },
  ratcontainer: {
    // borderWidth: 1,
    // borderColor: 'red',
  },
  itemPrice: {
    color: colors.black,
    fontSize: 28,
    fontWeight: 'bold',
  },
  itemperPortion: {
    color: colors.black,
    fontSize: 18,
  },
});
export default styles;
