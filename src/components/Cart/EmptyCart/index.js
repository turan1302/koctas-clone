import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const EmptyCart = ({ onStartShopping }) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Sepetim</Text>
      <View style={styles.emptyBox}>
        <View style={styles.bagIcon}>
          <View style={styles.bagHandle} />
          <View style={styles.bagBody}>
            <View style={styles.bagSmile} />
          </View>
        </View>

        <Text style={styles.emptyText}>
          Sepetinizde henüz ürün bulunmamaktadır.
        </Text>

        <Pressable style={styles.startBtn} onPress={onStartShopping}>
          <Text style={styles.startBtnText}>Alışverişe Başla</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EmptyCart;
