import { View, Text, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS, SOCIAL } from '../colors';
import styles from './styles';

const SocialFooter = ({
  items = SOCIAL,
  version = 'Versiyon 3.7.0',
  onSocialPress,
}) => {
  return (
    <View>
      <View style={styles.socialRow}>
        {items.map((item) => (
          <Pressable
            key={item.id}
            style={styles.socialBtn}
            onPress={() => onSocialPress?.(item)}
          >
            <FontAwesome name={item.icon} size={18} color={COLORS.white} />
          </Pressable>
        ))}
      </View>
      <Text style={styles.versionText}>{version}</Text>
    </View>
  );
};

export default SocialFooter;
