import { View, Text, FlatList, Pressable, Modal } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS, CITIES } from '../colors';
import styles from './styles';

const CityPickerModal = ({
  visible,
  cities = CITIES,
  selectedCity,
  onClose,
  onSelect,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        <Pressable style={styles.modalSheet} onPress={() => {}}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>İl Seçin</Text>
            <Pressable hitSlop={8} onPress={onClose}>
              <Feather name="x" size={22} color={COLORS.text} />
            </Pressable>
          </View>
          <FlatList
            data={cities}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Pressable
                style={styles.modalItem}
                onPress={() => onSelect?.(item)}
              >
                <Text
                  style={[
                    styles.modalItemText,
                    selectedCity === item && styles.modalItemActive,
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            )}
          />
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default CityPickerModal;
