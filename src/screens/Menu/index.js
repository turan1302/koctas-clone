import React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {
  MenuHeader,
  MenuList,
  LiveBanner,
  HelpSection,
  SocialFooter,
  COLORS,
} from '../../components/Menu';
import styles from './styles';

const Menu = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

      <MenuHeader onClose={() => navigation.goBack()} />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <MenuList />
        <LiveBanner />
        <HelpSection />
        <SocialFooter />
      </ScrollView>
    </View>
  );
};

export default Menu;
