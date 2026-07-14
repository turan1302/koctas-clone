import React, { useMemo, useState } from 'react';
import { View, StatusBar } from 'react-native';
import {
  StoresHeader,
  StoreFilters,
  StoreList,
  CityPickerModal,
  COLORS,
  STORES,
} from '../../components/Stores';
import styles from './styles';

const Stores = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [cityModalVisible, setCityModalVisible] = useState(false);

  const filteredStores = useMemo(() => {
    if (!selectedCity) {
      return STORES;
    }
    return STORES.filter((store) =>
      store.address.toLowerCase().includes(selectedCity.toLowerCase()),
    );
  }, [selectedCity]);

  const storeCount = selectedCity ? filteredStores.length : 135;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.orange} />

      <StoresHeader />

      <StoreFilters
        selectedCity={selectedCity}
        storeCount={storeCount}
        onCityPress={() => setCityModalVisible(true)}
      />

      <StoreList data={filteredStores} />

      <CityPickerModal
        visible={cityModalVisible}
        selectedCity={selectedCity}
        onClose={() => setCityModalVisible(false)}
        onSelect={(city) => {
          setSelectedCity(city);
          setCityModalVisible(false);
        }}
      />
    </View>
  );
};

export default Stores;
