import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export default StyleSheet.create({
  header: {
    backgroundColor: COLORS.orange,
    paddingHorizontal: 16,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
  },
  headerIconBtn: {
    padding: 4,
  },
});
