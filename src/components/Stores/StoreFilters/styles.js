import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export default StyleSheet.create({
  filterSection: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 12,
    backgroundColor: COLORS.white,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 14,
  },
  dropdownRow: {
    flexDirection: 'row',
    gap: 12,
  },
  dropdownCol: {
    flex: 1,
  },
  dropdownLabel: {
    fontSize: 13,
    color: COLORS.label,
    marginBottom: 6,
  },
  dropdown: {
    height: 44,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
  },
  dropdownDisabled: {
    borderColor: '#E8E8E8',
    backgroundColor: COLORS.disabledBg,
  },
  dropdownText: {
    fontSize: 14,
    color: COLORS.text,
    flex: 1,
  },
  dropdownPlaceholder: {
    color: COLORS.muted,
  },
  dropdownTextDisabled: {
    color: COLORS.disabled,
  },
  storeCount: {
    marginTop: 14,
    fontSize: 13,
    color: COLORS.muted,
  },
});
