import { View, Text, ScrollView, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, STORIES } from '../colors';
import styles from './styles';

const StoriesRow = ({ data = STORIES, onStoryPress }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.storiesRow}
    >
      {data.map((story) => (
        <Pressable
          key={story.id}
          style={styles.storyItem}
          onPress={() => onStoryPress?.(story)}
        >
          <View style={styles.storyCircleWrap}>
            <View style={styles.storyCircle}>
              {story.type === 'letter' ? (
                <Text style={[styles.storyLetter, { color: story.color }]}>
                  {story.letter}
                </Text>
              ) : (
                <MaterialCommunityIcons
                  name={story.icon}
                  size={30}
                  color={story.color}
                />
              )}
            </View>
            <View style={styles.storyBadge}>
              <Feather name="star" size={10} color={COLORS.white} />
            </View>
          </View>
          <Text style={styles.storyLabel} numberOfLines={2}>
            {story.label}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default StoriesRow;
