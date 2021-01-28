import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Item from './views/Item';

import TelaA from './views/TelaA'
import TelaB from './views/TelaB'
import TelaC from './views/TelaC'

export default props => (
  <SafeAreaView style={{flex: 1}}>
    <TelaA />
    <TelaB />
    <TelaC />
    <Item />
    </SafeAreaView>
);
