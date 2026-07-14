import { View, Pressable } from 'react-native';
import styles from './styles';

const SupportFab = ({ onPress }) => {
  return (
    <Pressable style={styles.fab} onPress={onPress}>
      <View style={styles.fabRoof} />
      <View style={styles.fabBody}>
        <View style={styles.fabFace}>
          <View style={styles.fabEyes}>
            <View style={styles.fabEye} />
            <View style={styles.fabEye} />
          </View>
          <View style={styles.fabSmile} />
          <View style={styles.fabHeadset} />
        </View>
      </View>
    </Pressable>
  );
};

export default SupportFab;
