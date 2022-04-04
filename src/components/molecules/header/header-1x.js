import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import colors from '../../../services/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Regular from '../../../presentation/typography/regular-text';
import Back from '../../../assets/headers-icons/Back.svg';
import {mvs} from '../../../services/metrices';
export const CustomHeader = ({
  // navigation,
  route,
  title = 'Home',
  allowBackBtn = false,
  spacebetween = false,
  post = false,
  avatar = false,
  chat = false,
  userIcon = false,
  headerLog = false,
  style,
  uri,
  loading,
  isShowDelete = false,
  onPost,
  onPressDelete,
  onpreseBack,
  onpressCart,
  absolute = false,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        ...styles.CONTAINER,
        position: absolute ? 'absolute' : 'relative',
      }}>
      {spacebetween ? (
        <View style={styles.firstType}>
          <TouchableOpacity>
            <Ionicons
              name="ios-arrow-back-outline"
              color={colors.offWhite}
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onpressCart}>
            <Ionicons name="cart" color={colors.offWhite} size={25} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.second}>
          <TouchableOpacity onPress={onpreseBack}>
            <Ionicons
              name="ios-chevron-back-outline"
              color={colors.black}
              size={25}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  CONTAINER: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: mvs(50),
    // position: 'absolute',
    paddingHorizontal: mvs(22),
    zIndex: 1,
    backgroundColor: 'transparent',
  },

  firstType: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    // borderWidth: 1,
    right: 20,
    alignSelf: 'center',
  },
  title: {
    color: colors.black,
    fontSize: mvs(18),
    paddingLeft: mvs(30),
    fontWeight: '500',
  },
  second: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
});
