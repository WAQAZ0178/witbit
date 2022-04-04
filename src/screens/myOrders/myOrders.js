import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './myOrders.styles';
import {connect} from 'react-redux';
import {CustomHeader} from '../../components/molecules/header/header-1x';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../services/colors';
import Button from '../../components/button/miniButton';
import {ACTIONS} from '../../store/actions';
const MyOrders = props => {
  const {setCartItems, cart} = props;
  const [subTotal, setsubTotal] = useState(0);
  const [total, settotal] = useState(0);
  useEffect(() => {
    calculate();
  }, [cart]);
  const calculate = () => {
    let price = 0;
    cart.map(x => {
      price = price + x.total;
    });
    setsubTotal(price);
  };
  const removeFromCart = (item, index) => {
    console.log('cart', cart);
    const result = cart.filter(x => x.id !== item.id);
    setCartItems(result);
    // setCartItems([...cart]);
    // props.navigation.navigate('MyOrders');
  };
  let items = [
    {
      name: 'Beef Burger',
      price: '10',
      quentity: 1,
    },
    {
      name: 'Chicken Showarma',
      price: '8',
      quentity: 1,
    },
    {
      name: 'Chicken Cheeze Burger',
      price: '15',
      quentity: 1,
    },
    {
      name: 'French Fries',
      price: '5',
      quentity: 2,
    },
    {
      name: 'Beef Burger',
      price: '10',
      quentity: 1,
    },
    {
      name: 'Fruit Chat',
      price: '6',
      quentity: 1,
    },
    {
      name: 'Beef Burger',
      price: '10',
      quentity: 1,
    },
  ];
  const renderItem = (item, index) => {
    let i = items.length;
    return (
      <TouchableOpacity
        onLongPress={() => removeFromCart(item, index)}
        style={{...styles.item, borderBottomWidth: i - 1 == index ? 0 : 0.3}}>
        <Text style={styles.itemName}>
          {item.name} * {item.quentity}
        </Text>
        <Text style={styles.itemName}>{item.price}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.conntainer}>
      <CustomHeader
        absolute={false}
        onpreseBack={() => navigation.goBack()}
        title="My order"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.infoTopContainer}>
          <Image
            source={require('../../assets/images/pizza.jpg')}
            style={styles.image}
          />
          <View style={styles.topRowInformationContainer}>
            <Text style={styles.itemHeadingName}>King Burger</Text>
            <View style={styles.topRowView}>
              <AntDesign name="star" color={colors.primary} size={15} />
              <Text style={{...styles.subName, color: colors.primary}}>
                4.9
              </Text>
              <Text style={styles.subName}>Burger Westren Food</Text>
            </View>
            <Text style={styles.subName}>Burger Westren Food</Text>
            <View style={styles.topRowView}>
              <Entypo name="location-pin" color={colors.primary} size={15} />
              <Text style={styles.subName}>03 No 4th Lane Newyork</Text>
            </View>
          </View>
        </View>
        <View style={styles.displaySelectedItem}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cart}
            renderItem={({item, index}) => renderItem(item, index)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.addNoteContainer}>
          <Text style={styles.instructiontxt}>Delivery Instructions</Text>
          <TouchableOpacity style={styles.addnoteButton}>
            <Entypo name="plus" color={colors.primary} size={15} />
            <Text style={styles.addnoteText}>Add Notes</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.totalContainer}>
          <View style={styles.subtotalContainer}>
            <Text style={styles.instructiontxt}>Sub Total</Text>
            <Text style={{...styles.addnoteText, fontWeight: '900'}}>
              ${subTotal}
            </Text>
          </View>
          <View style={styles.subtotalContainer}>
            <Text style={styles.instructiontxt}>Delivery Cost</Text>
            <Text style={{...styles.addnoteText, fontWeight: '900'}}>$7</Text>
          </View>
        </View>
        <View style={styles.addNoteContainer}>
          <Text style={styles.instructiontxt}>Total</Text>
          <Text style={{...styles.addnoteText, fontWeight: '900'}}>
            ${subTotal + 7}
          </Text>
        </View>
        <Button style={styles.buttonCheckout} title={'Checkout'} />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = store => {
  console.log('store::', store);
  return {
    cart: store.state.cart,
  };
};
const mapDispatchToProps = {
  setCartItems: payload => ACTIONS.setCartItems(payload),
};
export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);
