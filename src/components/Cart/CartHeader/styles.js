import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export default StyleSheet.create({
  header: {
    backgroundColor: COLORS.orange,
    paddingHorizontal: 16,
    paddingBottom: 14,
    justifyContent: 'flex-end',
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
  },
});
