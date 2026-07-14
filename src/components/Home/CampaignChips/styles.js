import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export default StyleSheet.create({
  chipsRow: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: COLORS.chipInactive,
    marginRight: 8,
  },
  chipActive: {
    backgroundColor: COLORS.orangeSoft,
  },
  chipText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.text,
  },
  chipTextActive: {
    color: COLORS.orange,
  },
});
