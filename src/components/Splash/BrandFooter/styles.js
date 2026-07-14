import { StyleSheet } from 'react-native';
import { H, colors } from '../colors';

export default StyleSheet.create({
  bottomSection: {
    marginBottom: H * 0.06,
    alignItems: 'center',
    zIndex: 2,
  },
  brandHouse: {
    width: 48,
    height: 44,
    alignItems: 'center',
  },
  brandRoofRow: {
    flexDirection: 'row',
    height: 18,
  },
  brandRoofLeft: {
    width: 0,
    height: 0,
    borderRightWidth: 24,
    borderBottomWidth: 18,
    borderRightColor: 'transparent',
    borderBottomColor: colors.houseFacet.tip,
  },
  brandRoofRight: {
    width: 0,
    height: 0,
    borderLeftWidth: 24,
    borderBottomWidth: 18,
    borderLeftColor: 'transparent',
    borderBottomColor: colors.houseFacet.mid,
  },
  brandBodyRow: {
    flexDirection: 'row',
    width: 48,
    height: 26,
  },
  brandBodyLeft: {
    flex: 1,
    backgroundColor: colors.houseFacet.left,
  },
  brandBodyCenter: {
    width: 16,
    backgroundColor: colors.houseFacet.white,
  },
  brandBodyRight: {
    flex: 1,
    backgroundColor: colors.houseFacet.right,
  },
  bottomUrl: {
    marginTop: 10,
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
});
