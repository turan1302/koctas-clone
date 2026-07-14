import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export default StyleSheet.create({
  listContent: {
    paddingBottom: 100,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: COLORS.white,
  },
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    overflow: 'hidden',
  },
  yeniBadge: {
    position: 'absolute',
    top: -2,
    right: -4,
    backgroundColor: COLORS.orange,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 8,
    transform: [{ rotate: '12deg' }],
  },
  yeniBadgeText: {
    color: COLORS.white,
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  rowTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text,
    paddingRight: 8,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.divider,
    marginLeft: 86,
  },
});
