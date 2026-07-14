import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export default StyleSheet.create({
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14,
    marginTop: 28,
  },
  socialBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.social,
    alignItems: 'center',
    justifyContent: 'center',
  },
  versionText: {
    marginTop: 14,
    textAlign: 'center',
    fontSize: 12,
    color: COLORS.version,
  },
});
