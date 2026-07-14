import { View, Text } from 'react-native';
import styles from './styles';

const BrandFooter = () => {
  return (
    <View style={styles.bottomSection}>
      <View style={styles.brandHouse}>
        <View style={styles.brandRoofRow}>
          <View style={styles.brandRoofLeft} />
          <View style={styles.brandRoofRight} />
        </View>
        <View style={styles.brandBodyRow}>
          <View style={styles.brandBodyLeft} />
          <View style={styles.brandBodyCenter} />
          <View style={styles.brandBodyRight} />
        </View>
      </View>
      <Text style={styles.bottomUrl}>koctas.com.tr</Text>
    </View>
  );
};

export default BrandFooter;
