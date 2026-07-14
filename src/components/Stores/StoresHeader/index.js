import { View, Text, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../colors';
import styles from './styles';

const StoresHeader = ({ title = 'Mağazalar', onMapPress }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Pressable style={styles.headerIconBtn} hitSlop={8} onPress={onMapPress}>
        <MaterialCommunityIcons
          name="map-marker-radius-outline"
          size={26}
          color={COLORS.white}
        />
      </Pressable>
    </View>
  );
};

export default StoresHeader;
