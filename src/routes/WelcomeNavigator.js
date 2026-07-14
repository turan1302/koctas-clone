import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { View, Platform, Text } from 'react-native';
import HomeNavigator from './HomeNavigator';
import CategoriesNavigator from './CategoriesNavigator';
import CartNavigator from './CartNavigator';
import AccountNavigator from './AccountNavigator';
import StoresNavigator from './StoresNavigator';

const Tab = createBottomTabNavigator();

// Koçtaş bottom bar palette (from screenshot)
const TAB_COLOR_ACTIVE = '#E85A1C';
const TAB_COLOR_INACTIVE = '#757575';
const TAB_LABEL_ACTIVE = '#1A1A1A';
const TAB_BG_ACTIVE = '#FFF0E6';

const TAB_CONFIG = {
  HomeNavigator: { label: 'Anasayfa', icon: 'home' },
  CategoriesNavigator: { label: 'Kategoriler', icon: 'list' },
  CartNavigator: { label: 'Sepetim', icon: 'shopping-cart' },
  AccountNavigator: { label: 'Hesabım', icon: 'user' },
  StoresNavigator: { label: 'Mağazalar', icon: 'map-pin' },
};

const WelcomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeNavigator"
      screenOptions={({ route }) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
        const tabBarHidden = ['Menu'];
        const tabConfig = TAB_CONFIG[route.name];

        return {
          headerShown: false,
          tabBarShowLabel: true,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: TAB_COLOR_ACTIVE,
          tabBarInactiveTintColor: TAB_COLOR_INACTIVE,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 11,
                fontWeight: focused ? '700' : '500',
                color: focused ? TAB_LABEL_ACTIVE : TAB_COLOR_INACTIVE,
                marginTop: 4,
              }}
            >
              {tabConfig?.label}
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            const iconName = tabConfig?.icon ?? 'circle';
            const color = focused ? TAB_COLOR_ACTIVE : TAB_COLOR_INACTIVE;

            if (focused) {
              return (
                <View
                  style={{
                    borderRadius: 10,
                    paddingHorizontal: 12,
                    paddingVertical: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Feather name={iconName} size={22} color={color} />
                </View>
              );
            }

            return <Feather name={iconName} size={22} color={color} />;
          },
          tabBarStyle: tabBarHidden.includes(routeName)
            ? { display: 'none' }
            : {
              backgroundColor: '#FFFFFF',
              borderTopWidth: 1,
              borderTopColor: '#E5E5E5',
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              height: Platform.OS === 'ios' ? 84 : 64,
              paddingTop: 6,
              paddingBottom: Platform.OS === 'ios' ? 24 : 8,
              elevation: 0,
              shadowOpacity: 0,
            },
          tabBarItemStyle: {
            paddingVertical: 2,
          },
        };
      }}
    >
      <Tab.Screen name="HomeNavigator" component={HomeNavigator} />
      <Tab.Screen name="CategoriesNavigator" component={CategoriesNavigator} />
      <Tab.Screen name="CartNavigator" component={CartNavigator} />
      <Tab.Screen name="AccountNavigator" component={AccountNavigator} />
      <Tab.Screen name="StoresNavigator" component={StoresNavigator} />
    </Tab.Navigator>
  );
};

export default WelcomeNavigator;
