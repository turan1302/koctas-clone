import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';

const CartHeader = ({ title = 'Sepetim' }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default CartHeader;
