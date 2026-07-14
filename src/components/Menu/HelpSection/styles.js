import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export default StyleSheet.create({
  helpSection: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  helpTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 14,
  },
  helpGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  helpItem: {
    width: '23%',
    alignItems: 'center',
  },
  helpIcon: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: COLORS.helpIconBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  helpLabel: {
    fontSize: 11,
    color: COLORS.muted,
    textAlign: 'center',
    lineHeight: 14,
  },
});
