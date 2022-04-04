import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import colors from '../../services/colors';
import {mvs} from '../../services/metrices';

const styles = StyleSheet.create({
  conntainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  infoTopContainer: {
    flexDirection: 'row',
    paddingHorizontal: mvs(30),
  },
  topRowInformationContainer: {
    marginLeft: mvs(15),
    justifyContent: 'space-around',
  },
  image: {
    height: mvs(100),
    width: mvs(100),
    borderRadius: mvs(25),
  },
  topRowView: {
    flexDirection: 'row',
  },
  itemHeadingName: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '500',
  },
  subName: {
    color: colors.darkGray,
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: mvs(5),
  },
  displaySelectedItem: {
    backgroundColor: '#e6e6e6',
    height: mvs(300),
    width: '100%',
    alignSelf: 'center',
    marginTop: mvs(50),
  },
  item: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
    minHeight: mvs(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(20),
    alignItems: 'center',
  },
  itemName: {
    fontSize: 16,
    color: colors.black,
  },
  addNoteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: mvs(10),
    paddingHorizontal: mvs(15),
    paddingVertical: mvs(5),
  },
  instructiontxt: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '600',
  },
  addnoteText: {
    color: colors.primary,
    fontSize: 16,
  },
  addnoteButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: mvs(20),
    paddingHorizontal: mvs(15),
    height: mvs(100),
    borderTopWidth: 0.9,
    borderBottomWidth: 0.9,
    borderBottomColor: colors.gray,
    borderTopColor: colors.gray,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonCheckout: {
    width: '90%',
    alignSelf: 'center',
    height: mvs(50),
    marginTop: mvs(30),
    marginBottom: mvs(20),
  },
});

export default styles;
