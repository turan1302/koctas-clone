import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export default StyleSheet.create({
  googleWrap: {
    alignItems: 'center',
    marginBottom: 24,
  },
  googleBtn: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleG: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.googleBlue,
  },
  signupBtn: {
    alignSelf: 'center',
  },
  signupText: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.text,
    textDecorationLine: 'underline',
  },
});
