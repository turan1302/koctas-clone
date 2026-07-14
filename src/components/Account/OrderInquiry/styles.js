import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export default StyleSheet.create({
  orderRow: {
    marginTop: 28,
    marginHorizontal: -20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.divider,
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orderText: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.text,
  },
});
