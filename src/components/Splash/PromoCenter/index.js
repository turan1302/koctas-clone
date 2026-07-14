import { View, Text } from 'react-native';
import SearchBar from '../SearchBar';
import styles from './styles';

const PromoCenter = () => {
  return (
    <View style={styles.centerSection}>
      <Text style={styles.seninIcin}>SENİN İÇİN</Text>
      <SearchBar />
      <Text style={styles.varText}>VAR</Text>
    </View>
  );
};

export default PromoCenter;
