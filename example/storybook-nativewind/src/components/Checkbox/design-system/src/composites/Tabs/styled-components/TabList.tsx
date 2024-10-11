import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    flexDirection: 'row',
  },
  { ancestorStyle: ['_tabList'] }
);
