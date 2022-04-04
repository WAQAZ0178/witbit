//import liraries
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import MiniButton from '../../components/button/miniButton';
import {useNavigation, CommonActions, useTheme} from '@react-navigation/native';
import styles from './home.styles';
import colors from '../../services/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CustomHeader} from '../../components/molecules/header/header-1x';
import DropDown from '../../components/dropDown/dropdown';
import Card from '../../components/card/card';
import {ACTIONS} from '../../store/actions';
import moment from 'moment';
const Home = props => {
  const navigation = useNavigation({navigation});
  const [loading, setLoading] = React.useState(false);
  const [selectedCat, setSelectedCat] = React.useState(1);
  const [flag, setflag] = useState('completed');
  const [quentity, setquentity] = useState(1);
  const [size, setsize] = useState('');
  const [ingradients, setingradients] = useState('');
  const [price, setprice] = useState(150);
  const [totalPrice, settotalPrice] = useState(0);
  let itemSize = [{name: '12'}, {name: '14'}, {name: '18'}];
  let Itemingradeint = [
    {name: 'kuch bhi '},
    {name: 'pata nhi '},
    {name: 'pata nhi '},
    {name: 'ye bhi ni pata '},
  ];
  const {setCartItems, cart} = props;
  const addToCart = () => {
    console.log('cart', cart);
    let item = {
      name: 'Pizza',
      price: price,
      quentity: quentity,
      ingradients: ingradients,
      size: size,
      total: totalPrice,
      id: moment().format('MMhhss'),
    };
    setCartItems([...cart, item]);
    props.navigation.navigate('MyOrders');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <CustomHeader
        onpressCart={() => navigation.navigate('MyOrders')}
        spacebetween
        title="My order"
        absolute
      />
      <Image
        source={require('../../assets/images/pizza.jpg')}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.itemNameText}>Tandoori Chicken Pizza</Text>
          <View style={styles.rattingcontainer}>
            <View style={styles.ratcontainer}>
              <View style={styles.starContainer}>
                <AntDesign name="star" color={colors.primary} size={15} />
                <AntDesign name="star" color={colors.primary} size={15} />
                <AntDesign name="star" color={colors.primary} size={15} />
                <AntDesign name="star" color={colors.primary} size={15} />
                <AntDesign name="staro" color={colors.primary} size={15} />
              </View>
              <Text style={styles.rattingText}>4 Star Ratting</Text>
            </View>
            <View>
              <Text style={styles.itemPrice}>RS. 150</Text>
              <Text style={styles.itemperPortion}>/ Per Portion</Text>
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionHeading}>Description</Text>
            <Text style={styles.descriptiondetails}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Text>
          </View>
          <Text style={[styles.descriptionHeading, styles.customizeText]}>
            Customize Your Order
          </Text>
          <DropDown
            selected={size}
            setSelected={setsize}
            list={itemSize}
            title={'select an size of postion'}
          />
          <DropDown
            selected={ingradients}
            setSelected={setingradients}
            list={Itemingradeint}
            title={'select the ingridients'}
          />
          <View style={styles.numberofPortionView}>
            <Text style={[styles.descriptionHeading, styles.customizeText]}>
              Numbers of portions
            </Text>
            <View style={styles.miniButtnsContainer}>
              <MiniButton
                onpress={() => {
                  if (quentity > 1) {
                    setquentity(quentity - 1);
                  }
                }}
                minus
              />
              <MiniButton
                title={quentity}
                backcolor="white"
                textcolor="black"
              />
              <MiniButton
                onpress={() => {
                  setquentity(quentity + 1);
                }}
                plus
              />
            </View>
          </View>
          <Card
            total={totalPrice}
            prize={price}
            quentity={quentity}
            onpress={() => addToCart()}
            setTotal={settotalPrice}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
