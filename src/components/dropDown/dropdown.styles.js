import {StyleSheet} from 'react-native';
import colors from '../../services/colors';
import {mvs} from '../../services/metrices';
const styles = StyleSheet.create({
  container: {
    marginTop: mvs(10),
    width: '100%',
    height: mvs(45),
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(20),
    ...colors.shadow,
  },

  detailsContainer: {
    backgroundColor: colors.offWhite,
    position: 'absolute',
    minHeight: mvs(500),
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
    borderWidth: 1,
    borderColor: 'red',
    marginTop: mvs(15),
    paddingBottom: mvs(20),
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  title: {
    color: colors.darkGray,
  },
  modalView: {
    backgroundColor: colors.white,
    alignSelf: 'center',
    width: '90%',
    minHeight: mvs(300),
    borderRadius: 30,
  },
  item: {
    // borderWidth: 1,
    // borderColor: 'red',
  },
  itemText: {
    color: colors.darkGray,
    paddingLeft: mvs(20),
    height: mvs(50),
    textAlignVertical: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  flatlistStyle: {
    marginTop: mvs(20),
  },
});
export default styles;
