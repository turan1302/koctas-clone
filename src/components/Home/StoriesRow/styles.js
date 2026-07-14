import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export default StyleSheet.create({
  storiesRow: {
    paddingHorizontal: 12,
    paddingTop: 14,
    paddingBottom: 8,
    backgroundColor: COLORS.white,
  },
  storyItem: {
    width: 78,
    alignItems: 'center',
    marginRight: 10,
  },
  storyCircleWrap: {
    width: 64,
    height: 64,
    marginBottom: 6,
  },
  storyCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: COLORS.orange,
    borderStyle: 'dashed',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyLetter: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.orange,
  },
  storyBadge: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.star,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  storyLabel: {
    fontSize: 11,
    color: COLORS.text,
    textAlign: 'center',
    lineHeight: 14,
  },
});
