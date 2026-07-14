import { Dimensions } from 'react-native';

const { width: W } = Dimensions.get('window');
export const BANNER_WIDTH = W - 32;
export const PRODUCT_WIDTH = (W - 48) / 2.35;

export const COLORS = {
  orange: '#F58220',
  orangeSoft: '#FFF0E6',
  white: '#FFFFFF',
  bg: '#F5F5F5',
  text: '#2C2C2C',
  muted: '#8A8A8A',
  placeholder: '#9A9A9A',
  border: '#E0E0E0',
  searchBorder: '#E5E5E5',
  purple: '#6B2FA0',
  purpleDark: '#5A248A',
  red: '#C4122E',
  star: '#E91E8C',
  chipInactive: '#F0F0F0',
};

export const STORIES = [
  { id: '1', type: 'icon', icon: 'white-balance-sunny', label: 'Fırsatlarla ferah bir y...', color: '#F5C518' },
  { id: '2', type: 'letter', letter: 'Ç', label: 'Küçük balkonlara ...', color: COLORS.orange },
  { id: '3', type: 'icon', icon: 'white-balance-sunny', label: "Haftanın Fırsatları 😍", color: '#F5C518' },
  { id: '4', type: 'letter', letter: 'A', label: "Haziran'ın çok satanl...", color: COLORS.orange },
  { id: '5', type: 'letter', letter: 'Z', label: 'Eğlence seni bekler...', color: COLORS.orange },
  { id: '6', type: 'icon', icon: 'tree', label: 'Bahçe key zamanı! 🍏', color: '#4CAF50' },
];

export const CHIPS = [
  { id: '1', label: 'Kampanyalar' },
  { id: '2', label: 'Deniz 🌊 Güneş ☀️ İndirim! 💸' },
  { id: '3', label: 'İlk Alışverişe Özel' },
];

export const PRODUCTS = [
  {
    id: '1',
    name: 'Güçlü Çöp Torbası Orta Boy',
    price: '34.99 TL',
    icon: 'trash-can-outline',
    iconColor: '#E85A1C',
  },
  {
    id: '2',
    name: 'Şemsiye Ön Cam Güneşlik',
    price: '499.90 TL',
    icon: 'car-side',
    iconColor: '#5A5A5A',
  },
  {
    id: '3',
    name: 'Karre Serisi Beyaz Topraklı Priz',
    price: '129.90 TL',
    icon: 'power-socket-eu',
    iconColor: '#1565C0',
  },
];

export const BANNER_ICONS = ['sofa', 'fridge', 'lamp', 'hammer', 'fan'];
