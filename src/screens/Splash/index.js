import { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import {
  ChevronBackground,
  AnniversaryHeader,
  PromoCenter,
  BrandFooter,
} from '../../components/Splash';
import * as NavigationService from '../../common/NavigationService';
import styles from './styles';

const Splash = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      NavigationService.reset();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <ChevronBackground />
      <AnniversaryHeader />
      <PromoCenter />
      <BrandFooter />
    </View>
  );
};

export default Splash;
