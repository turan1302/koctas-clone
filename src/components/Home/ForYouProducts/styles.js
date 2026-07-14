import { StyleSheet } from 'react-native';
import { COLORS, PRODUCT_WIDTH } from '../colors';

export default StyleSheet.create({
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.text,
    marginHorizontal: 16,
    marginTop: 18,
    marginBottom: 12,
  },
  productsRow: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  productCard: {
    width: PRODUCT_WIDTH,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    marginRight: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  heartBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 2,
    padding: 4,
  },
  productImage: {
    width: '100%',
    height: PRODUCT_WIDTH * 0.72,
    borderRadius: 6,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 8,
  },
  productName: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.text,
    minHeight: 36,
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  priceTag: {
    width: 14,
    height: 14,
    borderRadius: 2,
    backgroundColor: COLORS.red,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.text,
  },
});
