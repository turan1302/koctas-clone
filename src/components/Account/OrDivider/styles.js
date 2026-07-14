import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export default StyleSheet.create({
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 24,
  },
  orLine: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.divider,
  },
  orText: {
    marginHorizontal: 14,
    fontSize: 13,
    color: COLORS.label,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
});
