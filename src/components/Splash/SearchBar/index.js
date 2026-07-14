import { View, Text } from 'react-native';
import styles from './styles';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <View style={styles.searchIcon}>
        <View style={styles.searchCircle} />
        <View style={styles.searchHandle} />
      </View>

      <Text style={styles.searchText}>koctas.com.tr</Text>

      <View style={styles.micIcon}>
        <View style={styles.micHead} />
        <View style={styles.micStand} />
        <View style={styles.micBase} />
      </View>
    </View>
  );
};

export default SearchBar;
