import { View, Text } from 'react-native';
import styles from './styles';

const OrDivider = () => {
  return (
    <View style={styles.orRow}>
      <View style={styles.orLine} />
      <Text style={styles.orText}>VEYA</Text>
      <View style={styles.orLine} />
    </View>
  );
};

export default OrDivider;
