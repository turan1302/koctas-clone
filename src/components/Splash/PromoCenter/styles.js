import { StyleSheet } from 'react-native';
import { W, colors } from '../colors';

export default StyleSheet.create({
  centerSection: {
    alignItems: 'center',
    zIndex: 2,
    paddingHorizontal: 24,
  },
  seninIcin: {
    color: colors.SeninIcin,
    fontSize: Math.min(W * 0.095, 38),
    fontWeight: '900',
    letterSpacing: 1.5,
    textAlign: 'center',
  },
  varText: {
    marginTop: 8,
    color: colors.var,
    fontSize: Math.min(W * 0.28, 112),
    fontWeight: '900',
    letterSpacing: 2,
    lineHeight: Math.min(W * 0.3, 120),
    includeFontPadding: false,
  },
});
