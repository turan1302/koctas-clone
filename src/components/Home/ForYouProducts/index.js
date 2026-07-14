import { View, Text, FlatList, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, PRODUCTS } from '../colors';
import styles from './styles';

const ForYouProducts = ({
  data = PRODUCTS,
  title = 'Bu Ürünleri Senin İçin Seçtik 🔍😍',
  onFavoritePress,
  onProductPress,
}) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>

      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productsRow}
        renderItem={({ item }) => (
          <Pressable
            style={styles.productCard}
            onPress={() => onProductPress?.(item)}
          >
            <Pressable
              style={styles.heartBtn}
              hitSlop={8}
              onPress={() => onFavoritePress?.(item)}
            >
              <Feather name="heart" size={18} color={COLORS.muted} />
            </Pressable>

            <View style={styles.productImage}>
              <MaterialCommunityIcons
                name={item.icon}
                size={44}
                color={item.iconColor}
              />
            </View>

            <Text style={styles.productName} numberOfLines={2}>
              {item.name}
            </Text>

            <View style={styles.priceRow}>
              <View style={styles.priceTag} />
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default ForYouProducts;
