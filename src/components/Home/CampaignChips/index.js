import { Text, ScrollView, Pressable } from 'react-native';
import { CHIPS } from '../colors';
import styles from './styles';

const CampaignChips = ({
  data = CHIPS,
  activeId,
  onSelect,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.chipsRow}
    >
      {data.map((chip) => {
        const active = activeId === chip.id;
        return (
          <Pressable
            key={chip.id}
            style={[styles.chip, active && styles.chipActive]}
            onPress={() => onSelect?.(chip.id)}
          >
            <Text style={[styles.chipText, active && styles.chipTextActive]}>
              {chip.label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default CampaignChips;
