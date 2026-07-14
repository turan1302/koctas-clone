import { Pressable, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../colors';
import styles from './styles';

const OrderInquiry = ({ open, onToggle }) => {
  return (
    <Pressable style={styles.orderRow} onPress={onToggle}>
      <Text style={styles.orderText}>Siparişimi Sorgula</Text>
      <Feather
        name={open ? 'chevron-up' : 'chevron-down'}
        size={20}
        color={COLORS.text}
      />
    </Pressable>
  );
};

export default OrderInquiry;
