import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg from 'react-native-svg';

export interface IItemIcon {
  id: number;
  icon: React.ReactNode;
}

const ItemIcon: React.FC<IItemIcon> = ({id, icon}) => {
  return (
    <View style={[id === 1 && styles.view]}>
      <Svg width={38} height={38} viewBox={'0 0 38 38'}>
        {icon}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginLeft: 20,
    marginRight: 20,
  },
});

export default ItemIcon;
