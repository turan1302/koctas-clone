import { Dimensions } from 'react-native';

const { width: W, height: H } = Dimensions.get('window');

const colors = {
  bg: '#4A160C',
  white: '#FFFFFF',
  SeninIcin: '#F0A020',
  var: '#E85A1C',
  searchBorder: '#FFFFFF',
  chevron: [
    '#D45A28',
    '#C44A20',
    '#B03C18',
    '#9A3014',
    '#842710',
    '#6E1E0C',
    '#581608',
    '#421008',
  ],
  houseFacet: {
    left: '#E85A1C',
    mid: '#F07828',
    right: '#C43818',
    tip: '#F5A040',
    white: '#FFFFFF',
  },
};

export { W, H, colors };
