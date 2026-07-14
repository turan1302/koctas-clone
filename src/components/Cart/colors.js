import { Dimensions } from 'react-native';

const { width: W } = Dimensions.get('window');
export const CARD_WIDTH = (W - 48) / 2;

export const COLORS = {
  orange: '#F58220',
  orangeSoft: '#FFF0E6',
  white: '#FFFFFF',
  bg: '#F7F7F7',
  text: '#333333',
  textMuted: '#757575',
  textDark: '#4A4A4A',
  button: '#4D4D4D',
  border: '#E8E8E8',
  green: '#2E9B45',
  red: '#C4122E',
  stepInactive: '#B0B0B0',
  stepLine: '#D0D0D0',
};

export const STEPS = [
  { key: 'cart', label: 'Sepetim', icon: 'cart-outline', active: true },
  { key: 'delivery', label: 'Teslimat', icon: 'map-marker-outline', active: false },
  { key: 'payment', label: 'Ödeme', icon: 'credit-card-outline', active: false },
];

export const RECOMMENDED = [
  {
    id: '1',
    name: 'Eko Tavan Vantilatörü LED 3 Kanatlı',
    discount: '%18',
    oldPrice: '3.999,00 TL',
    price: '3.299,00 TL',
    icon: 'fan',
    iconColor: '#C45A12',
  },
  {
    id: '2',
    name: 'PowerMaster Orta Boy Çöp Torbası',
    discount: '%25',
    oldPrice: '129,00 TL',
    price: '96,90 TL',
    icon: 'trash-can-outline',
    iconColor: '#2E7D32',
  },
  {
    id: '3',
    name: 'Domestos Çamaşır Suyu 750 ml',
    discount: '%15',
    oldPrice: '89,90 TL',
    price: '76,50 TL',
    icon: 'bottle-tonic',
    iconColor: '#1565C0',
  },
];
