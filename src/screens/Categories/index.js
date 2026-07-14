import React from 'react';
import { View, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  CategoriesHeader,
  CategoryList,
  SupportFab,
  COLORS,
} from '../../components/Categories';
import styles from './styles';

const Categories = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <CategoriesHeader />
      <CategoryList />
      <SupportFab />
    </View>
  );
};

export default Categories;
