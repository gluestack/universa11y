import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    fontSize: '$xs',
    color: '$error600',
    ml: '$1',

    _dark: {
      color: '$error500',
    },
  },
  {}
);
