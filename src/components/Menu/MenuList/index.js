import { View, Text, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS, MENU_ITEMS } from '../colors';
import styles from './styles';

const MenuList = ({ items = MENU_ITEMS, onItemPress }) => {
  return (
    <View>
      {items.map((label, index) => (
        <View key={label}>
          <Pressable
            style={styles.menuRow}
            onPress={() => onItemPress?.(label)}
          >
            <Text style={styles.menuRowText}>{label}</Text>
            <Feather name="chevron-right" size={18} color={COLORS.muted} />
          </Pressable>
          {index < items.length - 1 ? <View style={styles.divider} /> : null}
        </View>
      ))}
    </View>
  );
};

export default MenuList;
