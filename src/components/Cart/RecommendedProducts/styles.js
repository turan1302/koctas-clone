import { StyleSheet } from 'react-native';
import { COLORS, CARD_WIDTH } from '../colors';

export default StyleSheet.create({
  recommendTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 24,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  productRow: {
    paddingHorizontal: 16,
    gap: 12,
  },
  productCard: {
    width: CARD_WIDTH,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 10,
    marginRight: 12,
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
    height: CARD_WIDTH * 0.75,
    borderRadius: 6,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    marginTop: 4,
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
    flexWrap: 'wrap',
    marginBottom: 4,
    gap: 6,
  },
  discountBadge: {
    backgroundColor: COLORS.red,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },
  discountText: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: '700',
  },
  oldPrice: {
    fontSize: 12,
    color: COLORS.textMuted,
    textDecorationLine: 'line-through',
  },
  currentPrice: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 10,
  },
  addBtn: {
    borderWidth: 1.5,
    borderColor: COLORS.green,
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: 'center',
  },
  addBtnText: {
    color: COLORS.green,
    fontSize: 13,
    fontWeight: '700',
  },
});
