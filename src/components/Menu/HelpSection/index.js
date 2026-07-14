import { View, Text, Pressable, Linking } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, HELP_ITEMS } from '../colors';
import styles from './styles';

const HelpSection = ({ items = HELP_ITEMS, onItemPress }) => {
  const renderHelpIcon = (item) => {
    if (item.iconSet === 'feather') {
      return <Feather name={item.icon} size={24} color={COLORS.orange} />;
    }
    return (
      <MaterialCommunityIcons name={item.icon} size={26} color={COLORS.orange} />
    );
  };

  return (
    <View style={styles.helpSection}>
      <Text style={styles.helpTitle}>Yardım</Text>
      <View style={styles.helpGrid}>
        {items.map((item) => (
          <Pressable
            key={item.id}
            style={styles.helpItem}
            onPress={() => {
              if (item.phone) {
                Linking.openURL(`tel:${item.phone}`);
              }
              onItemPress?.(item);
            }}
          >
            <View style={styles.helpIcon}>{renderHelpIcon(item)}</View>
            <Text style={styles.helpLabel}>{item.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default HelpSection;
