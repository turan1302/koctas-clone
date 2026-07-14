import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export default StyleSheet.create({
  fieldGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 13,
    color: COLORS.label,
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 6,
    paddingHorizontal: 14,
    fontSize: 15,
    color: COLORS.text,
    backgroundColor: COLORS.white,
  },
  passwordWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 6,
    backgroundColor: COLORS.white,
    paddingHorizontal: 14,
  },
  passwordInput: {
    flex: 1,
    fontSize: 15,
    color: COLORS.text,
    paddingVertical: 0,
  },
  eyeBtn: {
    paddingLeft: 8,
    paddingVertical: 4,
  },
  forgotBtn: {
    alignSelf: 'center',
    marginTop: 4,
    marginBottom: 28,
  },
  forgotText: {
    fontSize: 14,
    color: COLORS.text,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  loginBtn: {
    backgroundColor: COLORS.button,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtnText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
});
