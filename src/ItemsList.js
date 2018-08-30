import React from 'react';
import { FlatList } from 'react-native';

import { itemsData } from './itemsData';
import Item from './Item';

const ItemsList = () => (
  <FlatList
    data={itemsData}
    keyExtractor={item => `${item.id}`}
    renderItem={({ item }) => (
      <Item
        title={item.title}
        description={item.description}
        color={item.color}
      />
    )}
  />
);

export default ItemsList;
