import { View, Text, FlatList, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, CATEGORIES } from '../colors';
import styles from './styles';

const CategoryList = ({ data = CATEGORIES, onItemPress }) => {
  const renderIcon = (item) => {
    if (item.iconSet === 'mci') {
      return (
        <MaterialCommunityIcons
          name={item.icon}
          size={28}
          color={item.iconColor}
        />
      );
    }

    return <Feather name={item.icon} size={26} color={item.iconColor} />;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
      ItemSeparatorComponent={() => <View style={styles.divider} />}
      renderItem={({ item }) => (
        <Pressable style={styles.row} onPress={() => onItemPress?.(item)}>
          <View style={[styles.iconWrap, { backgroundColor: item.bg }]}>
            {renderIcon(item)}
            {item.isNew ? (
              <View style={styles.yeniBadge}>
                <Text style={styles.yeniBadgeText}>YENİ</Text>
              </View>
            ) : null}
          </View>

          <Text style={styles.rowTitle} numberOfLines={2}>
            {item.title}
          </Text>

          <Feather name="chevron-right" size={20} color={COLORS.chevron} />
        </Pressable>
      )}
    />
  );
};

export default CategoryList;
