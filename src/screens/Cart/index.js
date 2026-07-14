import React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import {
  CartHeader,
  CheckoutStepper,
  EmptyCart,
  RecommendedProducts,
  COLORS,
} from '../../components/Cart';
import styles from './styles';

const Cart = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.orange} />
      <CartHeader />
      <CheckoutStepper />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <EmptyCart />
        <RecommendedProducts />
      </ScrollView>
    </View>
  );
};

export default Cart;
