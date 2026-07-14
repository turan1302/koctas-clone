import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export default StyleSheet.create({
  listContent: {
    paddingBottom: 16,
  },
  storeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: COLORS.white,
  },
  storeBody: {
    flex: 1,
    paddingRight: 8,
  },
  storeTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  storeName: {
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.text,
    paddingRight: 12,
  },
  storeDistance: {
    fontSize: 13,
    color: COLORS.muted,
  },
  storeAddress: {
    fontSize: 13,
    color: COLORS.muted,
    lineHeight: 18,
    marginBottom: 8,
  },
  directionsText: {
    fontSize: 13,
    color: COLORS.label,
    textDecorationLine: 'underline',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.divider,
    marginLeft: 16,
  },
});
