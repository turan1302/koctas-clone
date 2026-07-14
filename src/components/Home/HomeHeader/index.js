import { View, TextInput, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../colors';
import styles from './styles';

const HomeHeader = ({ onMenuPress, onBarcodePress }) => {
  return (
    <View style={styles.header}>
      <Pressable style={styles.menuBtn} hitSlop={8} onPress={onMenuPress}>
        <Feather name="menu" size={24} color={COLORS.text} />
      </Pressable>

      <View style={styles.searchBar}>
        <Feather name="search" size={18} color={COLORS.placeholder} />
        <TextInput
          style={styles.searchInput}
          placeholder="Ürün, kategori veya marka ara..."
          placeholderTextColor={COLORS.placeholder}
          returnKeyType="search"
        />
        <Pressable hitSlop={8} onPress={onBarcodePress}>
          <MaterialCommunityIcons
            name="barcode-scan"
            size={22}
            color={COLORS.muted}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default HomeHeader;
