import { View, Text, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../colors';
import styles from './styles';

const MenuHeader = ({ title = 'Daha Fazla', onClose }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Pressable style={styles.closeBtn} hitSlop={10} onPress={onClose}>
        <Feather name="x" size={24} color={COLORS.text} />
      </Pressable>
    </View>
  );
};

export default MenuHeader;
