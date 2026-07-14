import { View, Text, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../colors';
import styles from './styles';

const StoreFilters = ({
  selectedCity,
  storeCount,
  onCityPress,
}) => {
  return (
    <View style={styles.filterSection}>
      <Text style={styles.filterTitle}>Mağaza Bul</Text>

      <View style={styles.dropdownRow}>
        <View style={styles.dropdownCol}>
          <Text style={styles.dropdownLabel}>İl</Text>
          <Pressable style={styles.dropdown} onPress={onCityPress}>
            <Text
              style={[
                styles.dropdownText,
                !selectedCity && styles.dropdownPlaceholder,
              ]}
              numberOfLines={1}
            >
              {selectedCity || 'İl Seçin'}
            </Text>
            <Feather name="chevron-down" size={18} color={COLORS.muted} />
          </Pressable>
        </View>

        <View style={styles.dropdownCol}>
          <Text style={styles.dropdownLabel}>İlçe</Text>
          <View style={[styles.dropdown, styles.dropdownDisabled]}>
            <Text
              style={[styles.dropdownText, styles.dropdownTextDisabled]}
              numberOfLines={1}
            >
              İlçe Seçin
            </Text>
            <Feather name="chevron-down" size={18} color={COLORS.disabled} />
          </View>
        </View>
      </View>

      <Text style={styles.storeCount}>Toplam {storeCount} mağaza</Text>
    </View>
  );
};

export default StoreFilters;
