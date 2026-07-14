import { View, Text } from 'react-native';
import styles from './styles';

const AnniversaryHeader = () => {
  return (
    <View style={styles.topSection}>
      <View style={styles.houseOutline}>
        <View style={styles.houseRoof} />
        <View style={styles.houseRoofInner} />
        <View style={styles.houseBody}>
          <View style={styles.houseBodyFill} />
          <Text style={styles.koctasDiagonal}>koçtaş</Text>
        </View>
      </View>

      <View style={styles.thirtyYearRow}>
        <Text style={styles.thirtyYearText}>3</Text>
        <View style={styles.zeroWrap}>
          <Text style={styles.heartInZero}>♥</Text>
        </View>
        <Text style={styles.thirtyYearText}> YIL</Text>
      </View>
    </View>
  );
};

export default AnniversaryHeader;
