//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../services/colors';
import {mvs} from '../../services/metrices';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from 'react-native-reanimated';

// create a component
const Card = ({onpress, prize, total, setTotal, quentity}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Total Price</Text>
      {setTotal(prize * quentity)}
      <Text style={styles.txt}>LKR {total}</Text>
      <TouchableOpacity onPress={onpress} style={styles.button}>
        <AntDesign color={'white'} size={20} name="shoppingcart" />
        <Text style={styles.btnText}>Add to Cart</Text>
      </TouchableOpacity>
      <View style={styles.cartView}>
        <AntDesign color={colors.primary} size={30} name="shoppingcart" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: mvs(20),
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'white',
    height: mvs(150),
    marginBottom: mvs(20),
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    ...colors.Card,
    alignItems: 'center',
    paddingVertical: mvs(20),
  },
  txt: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '600',
    marginTop: mvs(5),
  },
  button: {
    marginTop: mvs(20),
    backgroundColor: colors.primary,
    width: mvs(200),
    height: mvs(30),
    borderRadius: mvs(15),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnText: {
    color: colors.white,
    fontSize: 14,
    paddingHorizontal: mvs(10),
  },
  cartView: {
    backgroundColor: colors.white,
    width: mvs(50),
    height: mvs(50),
    borderRadius: mvs(25),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    ...colors.shadow,
    right: -20,
    top: mvs(50),
  },
});

//make this component available to the app
export default Card;
