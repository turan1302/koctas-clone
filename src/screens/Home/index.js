import React, { useState } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  HomeHeader,
  StoriesRow,
  CampaignChips,
  PromoBanner,
  ForYouProducts,
  COLORS,
} from '../../components/Home';
import * as NavigationService from '../../common/NavigationService';
import styles from './styles';

const Home = () => {
  const insets = useSafeAreaInsets();
  const [activeChip, setActiveChip] = useState('1');

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

      <HomeHeader onMenuPress={() => NavigationService.navigate('Menu')} />

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <StoriesRow />
        <CampaignChips activeId={activeChip} onSelect={setActiveChip} />
        <PromoBanner />
        <ForYouProducts />
      </ScrollView>
    </View>
  );
};

export default Home;
