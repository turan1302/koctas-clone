import { View, Text, Pressable, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, RECOMMENDED } from '../colors';
import styles from './styles';

const RecommendedProducts = ({
  data = RECOMMENDED,
  title = 'İlginizi Çekebilecek Ürünler 😍',
  onAddPress,
  onFavoritePress,
}) => {
  return (
    <View>
      <Text style={styles.recommendTitle}>{title}</Text>

      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productRow}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Pressable
              style={styles.heartBtn}
              hitSlop={8}
              onPress={() => onFavoritePress?.(item)}
            >
              <Feather name="heart" size={18} color={COLORS.textMuted} />
            </Pressable>

            <View style={styles.productImage}>
              <MaterialCommunityIcons
                name={item.icon}
                size={48}
                color={item.iconColor}
              />
            </View>

            <Text style={styles.productName} numberOfLines={2}>
              {item.name}
            </Text>

            <View style={styles.priceRow}>
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>{item.discount}</Text>
              </View>
              <Text style={styles.oldPrice}>{item.oldPrice}</Text>
            </View>

            <Text style={styles.currentPrice}>{item.price}</Text>

            <Pressable
              style={styles.addBtn}
              onPress={() => onAddPress?.(item)}
            >
              <Text style={styles.addBtnText}>Sepete Ekle</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default RecommendedProducts;
