import { View, Text, FlatList, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../colors';
import styles from './styles';

const StoreList = ({ data, onStorePress, onDirectionsPress }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
      ItemSeparatorComponent={() => <View style={styles.divider} />}
      renderItem={({ item }) => (
        <Pressable style={styles.storeRow} onPress={() => onStorePress?.(item)}>
          <View style={styles.storeBody}>
            <View style={styles.storeTop}>
              <Text style={styles.storeName}>{item.name}</Text>
              <Text style={styles.storeDistance}>{item.distance}</Text>
            </View>
            <Text style={styles.storeAddress}>{item.address}</Text>
            <Pressable onPress={() => onDirectionsPress?.(item)}>
              <Text style={styles.directionsText}>Yol Tarifi</Text>
            </Pressable>
          </View>
          <Feather name="chevron-right" size={20} color={COLORS.text} />
        </Pressable>
      )}
    />
  );
};

export default StoreList;
